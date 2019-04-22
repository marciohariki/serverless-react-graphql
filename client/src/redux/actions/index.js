import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, EDIT_TODO } from './types'

export const createTodo = todo => dispatch => {
  dispatch({ type: CREATE_TODO, payload: todo })
}

export const deleteTodo = todoId => dispatch => {
  dispatch({ type: DELETE_TODO, payload: todoId })
}

export const fetchTodos = () => dispatch => {
  dispatch({ type: FETCH_TODOS, payload: {} })
}

export const editTodos = todo => dispatch => {
  dispatch({ type: EDIT_TODO, payload: todo })
}
