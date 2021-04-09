import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View>

                <View style={styles.content}>
                    <Text style={styles.title_text}>Titre du film</Text>   
                </View>

                <View>
                    <Text style={styles.vote_text}>Vote</Text>
                </View> 

                </View>

                <View style={styles.description}>
                    <Text style={styles.description_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>

                <View style={styles.date}>
                    <Text>Sorti le 09/09/1996</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    content: {
        flexDirection: 'column',
        backgroundColor: 'green'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'orange'
    },
    description: {
        backgroundColor: 'red'
    },
    date: {
        backgroundColor: 'pink'
    }

})

export default FilmItem