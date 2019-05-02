import { CREATE_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODOS, LOAD_FETCH_TODOS } from './types'
import todoService from '../../services/todoService'

export const createTodo = todo => async dispatch => {
  const result = await todoService.createTodo(todo)
  dispatch({type: CREATE_TODO, payload: result})
}

export const deleteTodo = todoId => async dispatch => {
  const result = await todoService.deleteTodo(todoId)
  dispatch({type: DELETE_TODO, payload: result.id})
}

export const fetchTodos = () => async dispatch => {
  dispatch({type: FETCH_TODOS})
  const result = await todoService.getTodos()
  dispatch({type: LOAD_FETCH_TODOS, payload: result})
}

export const editTodos = todo => async dispatch => {
  const result = await todoService.editTodo(todo)
  dispatch({type: EDIT_TODO, payload: result})
}
