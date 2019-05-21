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
import { gray, orange, white } from '../utils/colors'
import { saveCard } from '../utils/api'
import { addCard } from '../actions'

class AddCard extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
       title: `Add Card to ${deck}`,
   }
  }

  state = {
    question: '',
    answer: ''
  }

  handleAddCard = () => {
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props
    const { deck } = navigation.state.params

    if (question.length > 0 && answer.length > 0) {
      const card = {
        question,
        answer
      }

      saveCard(deck, card).then(() => {
        dispatch(addCard(deck, card))
        navigation.navigate('DeckDetails', { deck: deck }, Keyboard.dismiss())
        this.setState((state) => ({
          question: '',
          answer: ''
        }))
      })

    } else {
      return Alert.alert('You need to enter both question and answer')
    }
  }

  render() {

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? -140 : -110}
        >
        <Text style={[styles.header, {marginTop: 25}]}>Question</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({ question })}
          placeholder='Question'
          value={this.state.question}
        />

        <Text style={styles.header}>Answer</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({ answer })}
          placeholder='Answer'
          value={this.state.answer}
        />
        <TouchableOpacity style={styles.btn} onPress={this.handleAddCard}>
          <Text style={[styles.btnText, {fontWeight: '500'}]}>Add Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: gray
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: white,
  },
  textInput: {
    backgroundColor: white,
    fontSize: 18,
    borderRadius: Platform.OS === 'ios' ? 16 : 5,
    padding: 10,
    paddingLeft: 20,
    marginTop: 15,
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

export default connect()(AddCard)
