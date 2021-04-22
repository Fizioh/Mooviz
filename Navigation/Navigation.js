import {createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
    
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: Search
    },
    Favorites: {
        screen: Favorites
    }
})

export default createAppContainer(MoviesTabNavigator)