import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck'

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList
  },
  Add: {
    screen: AddDeck
  }
})

const MainNavigator = createAppContainer(Tabs)

export default MainNavigator
