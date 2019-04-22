import { CREATE_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODOS } from '../actions/types'
import { mapKeys, omit } from 'lodash'

export default (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        ...mapKeys(action.payload, 'id')
      }
    case EDIT_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case CREATE_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case DELETE_TODO:
      return omit(state, action.payload)
    default:
      return state
  }
}
