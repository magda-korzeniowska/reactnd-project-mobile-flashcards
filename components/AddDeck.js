import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { gray, white, orange } from '../utils/colors'

class AddDeck extends Component {

  state = {
    text: ''
  }

  handleTextChange = (text) => {
    this.setState({
      text
    })
  }

  handleAddDeck = () => {
    
    // TODO
  }

  render() {

    const { text } = this.state

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleTextChange}
          placeholder='Deck name'
          value={text}
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

export default AddDeck
