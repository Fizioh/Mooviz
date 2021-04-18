import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'

        class FilmDetail extends React.Component {

            constructor(props){
                super(props)
                this.state = {
                    film: undefined,
                    isLoading: true
                }
            }

        componentDidMount(){
            getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
                this.setState({
                    film: data,
                    isLoading: false
                })
            })
        }

        _displayLoading(){
            if(this.state.isLoading){
                return (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color='#0000ff' />
                    </View>
                )
            }
        }

        _displayFilm(){
            if(this.state.film != undefined){
                return(
                    <ScrollView style={styles.scrollview_container}>
                        <Image 
                        style ={styles.image}
                        source={{uri: getImageFromApi(this.state.film.backdrop_path)}}
                        />
                        <Text style={styles.text_title}>{this.state.film.title}</Text>
                        <Text numberOfLines={15}>{this.state.film.overview}</Text>
                        <Text>Sorti le : {this.state.film.release_date}</Text>
                        <Text>Note : {this.state.film.vote_average}/10</Text>
                        <Text>Budget: {this.state.film.budget}</Text>
                        <Text>Genre(s): {this.state.film.genres.name}</Text>
                    </ScrollView>
                )
            }
        }

    render() {
        return(
            <View style={styles.main_container}>
                    {this._displayLoading()}
                    {this._displayFilm()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    scrollview_container:{
        flex: 1
    },
    image: {
        width: 500,
        height: 150,
        justifyContent: 'center'
    },
    text_title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default FilmDetail