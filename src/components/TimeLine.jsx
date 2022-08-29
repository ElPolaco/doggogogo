import React from 'react'
import TimeLineElement from './TimeLineElement'
function TimeLine() {
    const elements=[
    "Stworzenie strony domowej projektu",
    "Stworzenie API obsługującego zapytania aplikacji",
    "Zaprojektowanie strony oraz layoutu strony",
    "Podpięcie elementów API do środowiska strony i obsłużenie ich",
    "Stworzenie panelu ogłoszeń, obsłużenie stworzenia ogłoszenia",
    "Podpięcie elementów API dotyczących użytkowanika i obsłużenie ich",
    "Stworzenie chatu dla danego ogłoszenia"]
    return (<>{elements.map((element,index)=><TimeLineElement key={index} text={element} alignRight={index%2==0}/>)}</>)
}

export default TimeLine