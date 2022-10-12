import React from 'react'

function PopUp(props) {
  return (
    <div className='hidden h-screen w-screen top-0 left-0 bg-black/70 z-10 absolute grid items-center'>{props.children}</div>
  )
}

export default PopUp