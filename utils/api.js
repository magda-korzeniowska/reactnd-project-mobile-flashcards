import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, setInitialData } from './_decks'


// fetch all decks
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return results === null ? setInitialData() : JSON.parse(results)
    })
}

// save a new deck
export function saveDeck(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

// save a new card
export function saveCard(deck, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[deck] = {
        title: deck,
        questions: decks[deck].questions.concat(card)
      }
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    })
}
