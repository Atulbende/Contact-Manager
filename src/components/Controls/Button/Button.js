import React from 'react'
import './style.css'
export default function Button({ClassNane,Title,fn}) {

  return (
        <button onClick={fn} className={ClassNane}>{Title}</button>
  )
}
