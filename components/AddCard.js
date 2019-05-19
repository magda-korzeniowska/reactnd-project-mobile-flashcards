import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { gray, orange, white } from '../utils/colors'

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

  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.header}>Question</Text>
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
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: gray,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    color: white,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: white,
    fontSize: 20,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
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
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    backgroundColor: white,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: orange
  },
})

export default connect()(AddCard)
