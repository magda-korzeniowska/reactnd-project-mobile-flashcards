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
    correctAnswers: 0,
    showResults: false
  }

  handleToggleCard = () => {
    this.setState((previousState) => ({
      showAnswer: !previousState.showAnswer,
    }))
  }

  handleAnswer= (answer) => {
    const { questions } = this.props.deck
    const { currentIndex, correctAnswers, showResults } = this.state

    if (currentIndex < questions.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1,
        correctAnswers: answer === 'correct'
          ? correctAnswers + 1
          : correctAnswers
      })
    } else {
      this.setState({
        correctAnswers: answer === 'correct'
          ? correctAnswers + 1
          : correctAnswers,
        showResults: !showResults
      })

    // show animation
    }
  }

  resetQuiz = () => {
    this.setState({
      currentIndex: 0,
      showAnswer: false,
      correctAnswers: 0,
      showResults: false
    })
  }

  // toHome = () => {
  //   this.props.navigation.dispatch(NavigationActions.back({
  //     key: null
  //   }))
  // }

  render() {
    const { deck, navigation } = this.props
    const { questions } = this.props.deck
    const { currentIndex, showAnswer, showResults, correctAnswers } = this.state

    return (
      <View style={styles.container}>

        {!showResults &&
          <View style={styles.card}>
            <Text style={styles.counter}>{currentIndex + 1} / {questions.length}</Text>

            {!showAnswer
              ? <Text style={styles.question}>{questions[currentIndex].question}</Text>
              : <Text style={styles.answer}>{questions[currentIndex].answer}</Text>}


            <TouchableOpacity style={styles.btn} onPress={this.handleToggleCard}>
              <Text style={[styles.btnText, {fontSize: 22}]}>
                {!showAnswer ? 'Show Answer' : 'Show Question'}
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.btn, {backgroundColor: green}]}
              onPress={() => this.handleAnswer('correct')}>
                <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, {backgroundColor: red}]}
              onPress={() => this.handleAnswer('incorrect')}>
                <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        }

        {showResults &&
          <View style={styles.results}>
            <Text style={styles.score}>Your results: {correctAnswers}/{questions.length}</Text>

            <View>
              <TouchableOpacity style={[styles.btn, {backgroundColor: white}]} onPress={this.resetQuiz}>
                <Text style={[styles.btnText, {color: orange}]}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, {backgroundColor: white}]} onPress={() => navigation.goBack()}>
                <Text style={[styles.btnText, {color: orange}]}>Back to {deck.title} Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        }

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
    textAlign: 'center',
    fontSize: 20,
    marginTop: 38,
    color: white,
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
  results: {
     flex: 1,
     marginTop: 40,
  },
   score: {
     textAlign: 'center',
     fontSize: 32,
     fontWeight: '700',
     marginBottom: 40,
     color: white,
  },

})

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck: decks[deck]
  }
}

export default connect(mapStateToProps)(Quiz)
