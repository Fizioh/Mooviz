import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'



        class FilmDetail extends React.Component {

            constructor(props){
                super(props)
                this.state = {
                    film: undefined,
                    isLoading: true
                }
            }

        componentDidMount(){
            const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.navigation.state.params.idFilm)
            if(favoriteFilmIndex !== -1){ // Film déjà dans nos favoris pas besoin d'appeller l'API ici on ajoute le detail stocké dans notre state global au state du component
                this.setState({
                    film: this.props.favoritesFilm[favoriteFilmIndex]
                })
                return
            }
            // Le film n'est pas dans nos fav on n'a pas sond étail on appelle l'API pour le récuperer
            this.setState({ isLoading: true })
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

        _toggleFavorite(){
            const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
            this.props.dispatch(action)
        }

        _displayFavoriteImage(){
            var sourceImage = require('../Images/nofavorite.png')
            if(this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1){
                sourceImage = require('../Images/custom.png')
            }
            return(
                <Image 
                    style={styles.favorite_image}
                    source={sourceImage}
                />
            )
        }

        _displayFilm(){
            const { film } = this.state
            if(film != undefined){
                return(
                    <ScrollView style={styles.scrollview_container}>
                        <Image 
                        style ={styles.image}
                        source={{uri: getImageFromApi(film.backdrop_path)}}
                        />
                        <Text style={styles.title_text}>{film.title}</Text>
                        <TouchableOpacity
                            style={styles.favorite_container}
                            onPress={() => this._toggleFavorite()}>
                                {this._displayFavoriteImage()}
                        </TouchableOpacity>
                        <Text style={styles.description_text}>{film.overview}</Text>
                        <Text style={styles.default_text}>Sorti le : {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                        <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
                        <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
                        <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                        <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
                            return genre.name;
                            }).join(" / ")}
                        </Text >
                        <Text style={styles.default_text}> Compagnie(s) : {film.production_companies.map(function(company){
                            return company.name;
                        }).join(" / ")}
                        </Text>
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
      flex: 1,
      backgroundColor: 'black',
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      textAlign: 'center'
    },
    favorite_container:{
        alignItems: 'center',
    },
    description_text: {
      fontStyle: 'italic',
      color: 'grey',
      margin: 13,
      marginBottom: 15
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      color: 'white'
    }
  })

  

  const mapStateToProps = (state) => {
    return { 
        favoritesFilm: state.favoritesFilm
     }
}

export default connect(mapStateToProps)(FilmDetail)