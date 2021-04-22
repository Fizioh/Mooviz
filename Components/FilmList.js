import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'

class FilmList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            films: []
        }
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display Film " + idFilm)
        // On a recup les infos de la navigation on peut afficher le detail du film
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    }

    render(){
        return (
            <FlatList
            style={styles.list}
            data={this.props.films}
            extraData={this.props.favoritesFilm}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <FilmItem
                film={item}
                isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false }
                displayDetailForFilm={this._displayDetailForFilm}
                />
            )}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (this.props.page < this.props.totalPages){
                    //on appelle la methode loadfilm du component search pour charger plus de films
                    this.props.loadFilms()
                }
            }}
            />
        )
    }
}

const styles= StyleSheet.create({
    list: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(FilmList)