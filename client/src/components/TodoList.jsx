import React from 'react'
import TodoItem from './TodoItem'
import { map } from 'lodash'

export default (props) => {
  const {todos, onCheckClick, onRemoveClick} = props

  return (
    <div className='ui middle aligned divided list'>
      {map(todos, (t, k) => (
        <TodoItem
          key={k}
          content={t.content}
          checked={t.checked}
          onCheckClick={(e) => onCheckClick(t)}
          onRemoveClick={(e) => onRemoveClick(t)}
        />
      ))}
    </div>
  )
}
