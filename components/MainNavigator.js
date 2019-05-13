import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { orange, yellow, white } from '../utils/colors'
import DeckDetails from './DeckDetails'
import Quiz from './Quiz'

const Tabs = createBottomTabNavigator({
      Decks: {
        screen: DeckList,
        navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
        }
      },
      Add: {
        screen: AddDeck,
        navigationOptions: {
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        }
      }
    }, {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'orange' : 'white',
        style: {
          height: 56,
          backgroundColor: Platform.OS === 'ios' ? 'white' : 'orange',
        }
      }
    })

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: yellow,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: yellow
      }
    }
  }
})

const MainNavigator = createAppContainer(Stack)

export default MainNavigator
