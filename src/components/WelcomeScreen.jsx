import React from 'react'

function WelcomeScreen() {
  return (
    <>
        <div className="fluid" id="top">
            <div className="text">
                <h1>DoggoGoGo - innowacyjna aplikacja do wyprowadzania psów</h1> 
                <h4>Let's go doggo!</h4>
                <a href="#start">Zacznijmy</a>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecf0f1" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,202.7C384,213,480,267,576,245.3C672,224,768,128,864,122.7C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </>
  )
}

export default WelcomeScreen