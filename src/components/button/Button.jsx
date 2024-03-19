import React from 'react'
import '../button/Button.css'

function Button({text, className, onClick}) {
  return (
    <button onClick={onClick} className={className}>
        {text}
    </button>
  )
}

export default Button
