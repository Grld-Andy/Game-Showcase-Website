import './App.css';
import {useState} from 'react'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Theme from './Components/Theme/Theme'
import CardCollection from './Components/CardCollection/CardCollection';
import Heading from './Components/Heading/Heading';
import SubController from './Components/SubController/SubController';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('game-theme') === 'dark' ? 'dark' : 'light');
  const toggleTheme = () => {
    localStorage.setItem('game-theme', isDarkMode === 'light' ? 'dark': 'light')
    setIsDarkMode(isDarkMode === 'light' ? 'dark': 'light')
  }

  return (
      <div className={isDarkMode}>
        <Hero/>
        {/* <MySlider/> */}
        <Heading text='Top Downloads'/>
        <CardCollection/>
        <Heading text='Featured'/>
        <SubController/>
        <Footer/>
        <Theme toggleTheme={toggleTheme}/>
      </div>
  );
}

export default App;
