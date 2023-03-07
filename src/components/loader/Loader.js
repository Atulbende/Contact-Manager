import React from 'react'
import  '../loader/style.css'
function Loader() {
  return (
    <div className="Savtech_overlay d-none">
    <div className="Savtech_overlay__inner">
        <div className="Savtech_overlay__content"><span className="spinner"></span></div>
    </div>
</div>
  )
}

export default Loader