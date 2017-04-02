import { ADD_THING } from '../constants'

const thing = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const things = (state = [], action) => {
  let things = null
  switch (action.type) {
    case ADD_THING:
      things = [...state, thing(action)]
      console.log('things as state', things)
      return things
    default:
      return state
  }
}

export default things
