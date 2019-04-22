import React from 'react'

export default (props) => {
  const { checked, content, onCheckClick, onRemoveClick } = props
  return (
    <div className='item'>
      <i
        className={`${checked && 'check'} square outline link icon`}
        onClick={onCheckClick}
      />
      <div className="content">
        {content}
      </div>
      <i
        className='trash link icon'
        onClick={onRemoveClick}
      />
    </div>
  )
}
