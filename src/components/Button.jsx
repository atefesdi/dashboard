import React from 'react'

const Button = props => {
  const { text, bgColor, color, borderRadius  } = props

  return (
    <button
      type='button'
      style={{ background: bgColor,  color,  borderRadius }}
      className='py-1 px-3  hover:drop-shadow-xl'
    >
      {text}
    </button>
  )
}

export default Button
