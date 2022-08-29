import React from 'react'

function HeroSlide({name,role}) {
  return (
        <div>
            <div className='details'><h1>{role}</h1></div>
            <p className="legend">{name}</p>
        </div>

  )
}

export default HeroSlide