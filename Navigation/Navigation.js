import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import SignInScreen from '../Components/SignInScreen'


const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Mooviz',
            headerTitleStyle: {
                textAlign: 'center',
              },
              headerTintColor: '#3CE0CC',
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
    
})

const AuthStack = createStackNavigator({ 
    Auth: {
        screen: SignInScreen,
        navigationOptions: {
            title: 'Connexion',
            headerTitleStyle: {
                textAlign: 'center',
              },
              headerTintColor: '#3CE0CC',
        }
    },
 });





const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris',
            headerTitleStyle: {
                textAlign: 'center',
              },
              headerTintColor: '#3CE0CC',
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { 
                return <Image
                    source ={require('../Images/search.png')}
                    style={styles.icon}
                />

            }
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../Images/favorite.png')}
                    style={styles.icon}
                />
            }
        }
    },

    Auth: {
        screen: AuthStack,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../Images/user.png')}
                    style={styles.icon}
                />
            }
        }
    },
},
    {
        tabBarOptions: {
            activeBackgroundColor: '#FFFFFF', // Couleur arrière plan de l'onglet selectionné
            inactiveBackgroundColor: '#3CE0CC', // Arrière plan onglet non select
            showLabel: false, // On masque les titres
            showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icones définies
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)