import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import HeroSlide from './HeroSlide';
function TeamCarousel() {
  return (
            <Carousel autoPlay swipeable infiniteLoop showThumbs={false} showStatus={false} emulateTouch>
                <HeroSlide name="Daniel Lesiński" role="Stworzenie głównego API"/>
                <HeroSlide name="Konrad Lipka" role="Podpięcie API obsługi użytkownika"/>
                <HeroSlide name="Łukasz Ziobro" role="Chat i panel ogłoszeń"/>
                <HeroSlide name="Włodzimierz Rywka" role="Strona projektu i front aplikacji"/>
            </Carousel>

  )
}

export default TeamCarousel