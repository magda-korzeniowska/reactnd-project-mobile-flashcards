import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, orange } from '../utils/colors'

class DeckDetails extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck
   }
  }

  handleQuiz = () => {
    const { deck, navigation } = this.props;

    if (deck.questions.length === 0) {
      return alert('No cards in deck', 'Add new card')
    } else {
      navigation.navigate('Quiz', { deck })
    }
  }


  render() {
    const { deck, navigation } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckText}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards' }</Text>
          <TouchableOpacity
            style={styles.btn} onPress={() => this.props.navigation.navigate(
            'AddCard', { deck }
          )}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleQuiz}>
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
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
  deckTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700'
  },
  deckText: {
    textAlign: 'center',
    fontSize: 20,
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

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck: decks[deck]
  }
}

export default connect(mapStateToProps)(DeckDetails)
