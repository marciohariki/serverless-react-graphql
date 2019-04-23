import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { createTodo, deleteTodo, editTodos, fetchTodos } from '../redux/actions'
import TodoInput from '../components/TodoInput'
import uuidV1 from 'uuid/v1'

class Todo extends React.Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  handleSubmit = (value) => {
    const todo = {
      id: uuidV1(),
      content: value,
      checked: false,
    }
    this.props.createTodo(todo)
  }

  onCheckClick = (todo) => {
    this.props.editTodos({
      ...todo,
      checked: !todo.checked
    })
  }

  onRemoveClick = (todo) => {
    this.props.deleteTodo(todo.id)
  }
  renderTodoList = () => {
    const { todos, isLoading } = this.props
    if (isLoading) {
      return (
        <div className="ui placeholder">
          <div className="line"/>
          <div className="line"/>
          <div className="line"/>
        </div>
      )
    }

    return (
      <>
        <TodoList
          todos={todos}
          onCheckClick={this.onCheckClick}
          onRemoveClick={this.onRemoveClick}/>
        <TodoInput onSubmit={this.handleSubmit}/>
      </>
    )
  }

  render () {
    return (
      <div className='ui container'>
        <h1>Todo List</h1>
        {this.renderTodoList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todos: state.todos.data,
    isLoading: state.todos.isLoading
  }
}

const mapDispatchToProps = {
  fetchTodos,
  createTodo,
  editTodos,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
