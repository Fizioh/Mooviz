import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList} from 'react-native'
import film from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
    }

    render(){
        return (
            <View style={styles.main_container}>
                 <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title="Rechercher" onPress={() => {}} />
                <FlatList
                    data={film}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }

})


export default Search