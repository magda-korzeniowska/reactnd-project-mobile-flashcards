import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { gray, white, orange } from '../utils/colors'


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
        <ScrollView>
          {Object.keys(decks).map((deck) => {
            const { title, questions } = decks[deck]
            return (
              <TouchableOpacity key={deck} style={styles.btn} onPress={() => this.props.navigation.navigate(
                'DeckDetails', { deck }
              )}>
                <Text style={[styles.btnText, {fontWeight: '500'}]}>{title}</Text>
                <Text style={styles.btnText}>{questions.length} {questions.length === 1 ? 'card' : 'cards' }</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
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
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: orange
  },
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
