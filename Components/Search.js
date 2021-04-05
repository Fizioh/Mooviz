import React from 'react'
import {View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render(){
        return (
            <View style={{marginTop: 20 }}>
                 <TextInput style={{ marginLeft: 5, marginRight: 5, height: '50%', borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Titre du film'/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

export default Search