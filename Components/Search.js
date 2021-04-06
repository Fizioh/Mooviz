import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'

class Search extends React.Component {
    render(){
        return (
            <View style={styles.main_container}>
                 <TextInput style={styles.texinput} placeholder='Titre du film'/>
                <Button title="Rechercher" onPress={() => {}} />
                <FlatList
                    data={films}
                    renderItem={({item}) => <Text>{item.key}</Text>}
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