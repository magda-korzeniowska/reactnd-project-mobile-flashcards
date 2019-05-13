import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, white, orange, red, green } from '../utils/colors'
import { connect } from 'react-redux'
// import { NavigationActions } from 'react-navigation'

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
       title: `${deck} Quiz`,
   }
  }

  state = {
    currentIndex: 0,
    showAnswer: false,
    correctAnswers: 0
  }

 handleToggleCard = () => {
    this.setState((previousState) => ({
      showAnswer: !previousState.showAnswer,
    }))
  }

  // toHome = () => {
  //   this.props.navigation.dispatch(NavigationActions.back({
  //     key: null
  //   }))
  // }

  render() {

    const { deck, navigation } = this.props
    const { currentIndex, showAnswer } = this.state
    const questionNo = this.state.currentIndex + 1


    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.counter}>{questionNo} / {deck.questions.length}</Text>

          {!showAnswer ? <Text style={styles.question}>{deck.questions[currentIndex].question}</Text>
          : <Text style={styles.question}>{deck.questions[currentIndex].answer}</Text>}


          <TouchableOpacity style={styles.btn} onPress={this.handleToggleCard}>
            <Text style={[styles.btnText, {fontSize: 22}]}>{!showAnswer ? 'Show Answer' : 'Show Question'}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]} onPress={this.handleQuiz}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, {backgroundColor: red}]} onPress={this.handleQuiz}>
            <Text style={styles.btnText}>Incorrect</Text>
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
  card: {

  },
  counter: {
    alignSelf: 'flex-start',
    color: white,
    fontSize: 22,
  },
  question: {
    textAlign: 'center',
    fontSize: 38,
    marginTop: 38,
    color: white,
  },
  answer: {

  },
  btn: {
     justifyContent: 'center',
     alignItems: 'center',
     margin: 10,
     padding: 10,
     borderRadius: 5,
   },
   btnText: {
      textAlign: 'center',
      fontSize: 18,
      color: white
   },
})

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck: decks[deck]
  }
}

export default connect(mapStateToProps)(Quiz)
