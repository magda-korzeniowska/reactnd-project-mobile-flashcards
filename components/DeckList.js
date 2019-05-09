import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'
// import { connect } from 'react-redux';

class DeckList extends Component {

  render() {

    return (
      <View>
        <Text>Deck List</Text>
      </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DeckList
