import 'animate.css';
import'./scss/style.scss';
import './scss/grid.css';
import './scss/_timeline.scss';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import Content from './components/Content';
import TimeLineElement from './components/TimeLineElement';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import reactlogo from './img/react.svg';
import netcore from './img/netcore.svg';
import sass from './img/sass.svg';
import mysql from './img/mysql.svg';
import TeamCarousel from './components/TeamCarousel';
import TechnologiesCarousel from './components/TechnologiesCarousel';
import TimeLine from './components/TimeLine';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <WelcomeScreen/>
        <Content id="start">
            <h1>Czym jest aplikacja DoggoGoGo?</h1>
            <p>Nie ma człowieka, który by nie lubił zwierząt. Psy, koty, czy nawet chomiki - zwierzęta wszelkiej maści stanowią nieodzowny element ludzkiego życia. Jednakże niekiedy się zdarza, że potrzebujemy wsparcia w opiece nad nimi, albo po prostu sami chcielibyśmy móc wyjść z inicjatywą pomocy. Tak narodził się projekt DoggoGoGo.</p>
            <p>Nasza innowacyjna aplikacja daje możliwość znalezienia opieki dla naszego kochanego pupila, bądź zajęcie się czyimś zwierzakiem. Ponadto dostarcza ona usługę chatu, w ramach danego ogłoszenia w celu dogadania szczegółów. Wszystko to w twojej okolicy! Pomimo, że to za tobą pupil będzie tęsknił najbardziej, to podziękuje ci za pozostawienie go pod opieką innej osoby uwielbiającej zwierzęta. Osoby oferujące opiekę dodatkowo zyskują możliwość przebywania, opiekowania się pupilem i czerpania z tego przyjemności.</p>      
        </Content>
        <Content additionalClasses="doggo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecf0f1" fillOpacity="2" d="M0,160L34.3,176C68.6,192,137,224,206,229.3C274.3,235,343,213,411,213.3C480,213,549,235,617,250.7C685.7,267,754,277,823,245.3C891.4,213,960,139,1029,128C1097.1,117,1166,171,1234,186.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecf0f1" fillOpacity="1" d="M0,160L34.3,176C68.6,192,137,224,206,229.3C274.3,235,343,213,411,213.3C480,213,549,235,617,250.7C685.7,267,754,277,823,245.3C891.4,213,960,139,1029,128C1097.1,117,1166,171,1234,186.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </Content>
        <Content>
            <h1 id='techno'>Technologie wykorzystane w projekcie</h1>
            <TechnologiesCarousel/>
        </Content>

        <Content additionalClasses="people">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecf0f1" fillOpacity="1" d="M0,32L34.3,58.7C68.6,85,137,139,206,144C274.3,149,343,107,411,117.3C480,128,549,192,617,213.3C685.7,235,754,213,823,176C891.4,139,960,85,1029,101.3C1097.1,117,1166,203,1234,234.7C1302.9,267,1371,245,1406,234.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecf0f1" fillOpacity="1" d="M0,32L34.3,58.7C68.6,85,137,139,206,144C274.3,149,343,107,411,117.3C480,128,549,192,617,213.3C685.7,235,754,213,823,176C891.4,139,960,85,1029,101.3C1097.1,117,1166,203,1234,234.7C1302.9,267,1371,245,1406,234.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </Content>  
        <Content id="postep">
        <div className="row">
            <div className="col-12">
                <h1>Etapy projektu</h1>
            </div>
        </div>   
        <TimeLine/>
        </Content>
        <Content id="team">
            <h1>Skład zespołu i role w projekcie</h1>
            <TeamCarousel/>
        </Content>
        <footer><a href="#top">^</a></footer>
    </div>
  );
}

export default App;
