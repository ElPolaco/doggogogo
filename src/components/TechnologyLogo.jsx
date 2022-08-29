import React from 'react'

function TechnologyLogo({image}) {
  return (
  <img src={image.img} alt={`${image.alt} logo`} className='logo'/>
  )
}

export default TechnologyLogo