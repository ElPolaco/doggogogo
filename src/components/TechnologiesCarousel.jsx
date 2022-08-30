import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import TechnologyLogo from './TechnologyLogo';
import reactlogo from '../img/react.svg';
import netcore from '../img/netcore.svg';
import sass from '../img/sass.svg';
import mssql from '../img/mssql.svg';
function TechnologiesCarousel() {
  const logos=[{img:reactlogo,alt:"React"},{img:netcore,alt:".NET Core"},{img:sass,alt:"Sass"},{img:mssql,alt:"MsSQL"}]
  const logosList=logos.map((image, index)=><TechnologyLogo key={index} image={image}/>)
  return (
        <Carousel swipeable emulateTouch infiniteLoop autoPlay showIndicators={false} showStatus={false} interval={1500} transitionTime={500} showThumbs={false} >
            {logosList}
        </Carousel>

  )
}

export default TechnologiesCarousel