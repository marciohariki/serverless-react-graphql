import { combineReducers } from 'redux'
import todoReducer from './todosReducer'

export default combineReducers({
  todos: todoReducer
})
