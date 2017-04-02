import { ADD_THING } from '../constants'

export const addThing = (text) => {
  const action = {
    type: ADD_THING,
    text
  }
  console.log('action in addThing', action)
  return action
}
