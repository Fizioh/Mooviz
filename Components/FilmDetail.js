import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

        class FilmDetail extends React.Component {

            constructor(props){
                super(props)
                this.state = {
                    film: undefined,
                    isLoading: true
                }
            }

        _displayLoading(){
            if(this.state.isLoading){
                return (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                )
            }
        }

    render() {
        return(
            <View style={styles.main_container}>
                    {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center'
    },
    loading_container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around'
    }
})

export default FilmDetail