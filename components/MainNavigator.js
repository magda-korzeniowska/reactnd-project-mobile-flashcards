import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { orange, white } from '../utils/colors'

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

const MainNavigator = createAppContainer(Tabs)

export default MainNavigator
