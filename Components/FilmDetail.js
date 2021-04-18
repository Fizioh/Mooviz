import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

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
                        <Text>{this.state.film.title}</Text>
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
    }
})

export default FilmDetail