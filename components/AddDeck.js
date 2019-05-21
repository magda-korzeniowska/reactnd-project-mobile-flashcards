import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { gray, white, orange } from '../utils/colors'
import { saveDeck } from '../utils/api'
import { addDeck } from '../actions'

class AddDeck extends Component {

  state = {
    text: ''
  }

  handleAddDeck = () => {
    const { text } = this.state
    const { dispatch, navigation } = this.props

    if (text.length > 0) {
      const deck = {
        [text]: {
          title: text,
          questions: []
        }
      }

      saveDeck(text).then(() => {
        dispatch(addDeck(deck))
        navigation.navigate('DeckDetails', { deck: text }, Keyboard.dismiss())
        this.setState((state) => ({
          text: ''
        }))
      })

    } else {
      return Alert.alert('Enter a deck title')
    }
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          placeholder='Deck name'
          value={this.state.text}
        />
        <TouchableOpacity style={styles.btn} onPress={this.handleAddDeck}>
          <Text style={[styles.btnText, {fontWeight: '500'}]}>Add Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  header: {
    textAlign: 'center',
    fontSize: 38,
    marginTop: 38,
    color: white,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: white,
    fontSize: 20,
    borderRadius: Platform.OS === 'ios' ? 16 : 5,
    padding: 20,
    marginTop: 35,
    marginBottom: 35,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 130,
    padding: 10,
    borderRadius: Platform.OS === 'ios' ? 16 : 5,
    backgroundColor: white,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: orange
  },

})

export default connect()(AddDeck)
