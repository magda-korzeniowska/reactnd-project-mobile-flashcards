import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckDetails extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck
   }
  }

  render() {
    return (
      <View>
        <Text>Deck Details - {this.props.navigation.state.params.deck}</Text>
      </View>
    )
  }
}

export default DeckDetails
