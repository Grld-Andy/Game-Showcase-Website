import React from 'react'
import './style.css'

const Theme = ({toggleTheme}) => {
  return (
    <div className='theme'>
        <div className='theme-container'>
            <button className='light-mode' onClick={toggleTheme}>
                <span className='ray ray-1 veritcal'></span>
                <span className='ray ray-2 veritcal'></span>
                <span className='ray ray-3 horizontal'></span>
                <span className='ray ray-4 horizontal'></span>
                <span className='ray ray-5 diagonal-1'></span>
                <span className='ray ray-6 diagonal-1'></span>
                <span className='ray ray-7 diagonal-2'></span>
                <span className='ray ray-8 diagonal-2'></span>
            </button>
            <button className='dark-mode' onClick={toggleTheme}>
            </button>
        </div>
    </div>
  )
}

export default Theme
