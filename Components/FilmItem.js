import React from 'react'
import { StyleSheet } from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={StyleSheet.main_container}>
                <Text style={StyleSheet.title_text}>Titre du film</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main_container: {
        height: 190
    },
    title_text: {

    }

})

export default FilmItem