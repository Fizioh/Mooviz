import React from 'react'
import { ActivityIndicator, StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import FilmItem from './FilmItem'
import FilmList from './FilmList'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.searchedText = "" // Init de la donnée searchedText en dehors du state
        this.page = 0 // Compteur de page courante
        this.totalPages = 0 // Nombre de pages totales
        this._loadFilms = this._loadFilms.bind(this)
        this.state = {
            films: [],
            isLoading: false
        }

        this._loadFilms = this._loadFilms.bind(this)
    }

    _loadFilms() {
        if(this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            this.setState( { isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    films: [...this.state.films, ...data.results],
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(text){
        this.searchedText = text // Modif du texte recherché à chaque saisie de texte sans passer par le setState
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate('FilmDetail', { idFilm: idFilm})
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return(
                <View style={styles.loeading_container}>
                    <ActivityIndicator size='large' color='yellow'/>
                </View>
            )
        }
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
        films: [],
        }, () => { 
            this._loadFilms() 
        })
    }
    

    render(){
        return (
            <View style={styles.main_container}>
                 <TextInput 
                 style={styles.textinput} 
                 placeholder='Titre du film'
                 onChangeText={(text) => this._searchTextInputChanged(text)}
                 onEndEditing={() => this._searchFilms()}
                 onEndSubmitEditing={() => this._searchFilms()}
                />
                <Button title="Rechercher"   color="#3CE0CC" onPress={() => this._searchFilms()} />
                 <FilmList
                 films={this.state.films}
                 navigation={this.props.navigation}
                 loadFilms={this._loadFilms}
                 page={this.page}
                 totalPages={this.totalPages}
                 favoriteList={false} // ajouter booléen pour indiquer qu'on est pas dans le cas de l'affichage de liste des favoris
                 />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    textinput: {
        fontWeight: 'bold',
        height: 50,
        borderColor: '#3CE0CC',
        borderWidth: 1,
        paddingLeft: 10,
        color: '#3CE0CC',
        backgroundColor: 'white'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Search