import React from 'react'
import { StyleSheet } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

    render() {
        return (
            <FilmList 
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
                favoriteList={true} // on entre dans le cas de la lsite de films favoris
            />

        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(Favorites)