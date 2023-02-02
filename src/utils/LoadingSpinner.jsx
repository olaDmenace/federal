import React from 'react'
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
    return (
        <div className='w-20 h-20 mx-auto'>
            <ReactLoading type="bubbles" color="#007222" height={'100%'} width={'100%'} />
        </div>
    )
}

export default LoadingSpinner