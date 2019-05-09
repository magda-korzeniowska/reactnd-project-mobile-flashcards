import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, setInitialData } from './_decks'


// fetch all Decks
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return results === null ? setInitialData() : JSON.parse(results)
    })
}
