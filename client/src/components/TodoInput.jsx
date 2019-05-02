import React, { useState } from 'react'

export default (props) => {
  const {onSubmit} = props
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(inputValue)
    setInputValue('')
  }

  return (
    <form className='ui form error' onSubmit={handleSubmit}>
      <div className='ui action input'>
        <input
          className='field'
          type='text'
          onChange={handleChange}
          placeholder='What you have todo?'
          value={inputValue}/>
        <button
          className='ui button primary'
          type='submit'
        >
          Create
        </button>
      </div>
    </form>
  )
}
