import React from 'react'
import './style.css'

const Card = ({name, desc, categories, condition, backgroundImageURL}) => {
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${backgroundImageURL})`,
        };
    
    return (
        <div className={`card ${condition ? 'on_mobile' : ''}`}>
            <a href='/'>
                <div className='container'>
                    <div className='bg_image' style={cardStyle}>
                    </div>
                    <p>{categories}</p>
                </div>
                <h2>{name}</h2>
            </a>
            <h5>PC, Consoles</h5>
            <p className='description'>
                {desc}
            </p>
        </div>
    )
}

export default Card