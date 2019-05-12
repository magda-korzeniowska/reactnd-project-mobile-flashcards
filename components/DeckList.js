import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { gray, white } from '../utils/colors'


class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>

        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck]
          return (
            <TouchableOpacity key={deck} style={styles.btn} onPress={() => this.props.navigation.navigate(
              'DeckDetails', { deck }
            )}>
              <Text style={styles.deckTitle}>{title}</Text>
              <Text style={styles.deckText}>{questions.length} {questions.length === 1 ? 'card' : 'cards' }</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginTop: 5,
    padding: 10,
    backgroundColor: gray,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: white,
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
