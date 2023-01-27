import React from 'react'

function PopUp(props) {
  return (
    // <div className='fixed top-0 left-0 z-10'>
    //   <div className='h-screen w-screen top-0 left-0 bg-black/70 z-10 absolute grid items-center'>
    //     <div className='w-2/3 h2/3 bg-white/60'></div>
    //   </div>
    // { props.children }
    // </div>
    // <div className='fixed w-full h-screen top-0 left-0 z-10'>
    //   <div className='h-screen w-full bg-black/70 absolute top-0 left-0'>
    //     <div className='w-10/12 h-2/3 relative'></div>
    //   </div>
    // </div>
    <div onClick={props.state} className='fixed h-screen w-full top-0 left-0 z-10'>
      <div className='h-screen w-full grid absolute top-0 left-0 bg-black/60'>
        <div className='grid bg-white/90 gap-5 w-2/3 lg:w-1/3 relative z-10 place-self-center rounded p-5 py-10 text-white/70'>
          {/* <img className='' src={props.icon} alt="" /> */}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PopUp