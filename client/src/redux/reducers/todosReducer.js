import { CREATE_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODOS, LOAD_FETCH_TODOS } from '../actions/types'
import { mapKeys, omit } from 'lodash'

const INITIAL_STATE = {
  data: {},
  isLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_FETCH_TODOS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...mapKeys(action.payload, 'id')
        }
      }
    case EDIT_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      }
    case CREATE_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      }
    case DELETE_TODO:
      return {
        ...state,
        data: omit(state.data, action.payload)
      }
    default:
      return state
  }
}
