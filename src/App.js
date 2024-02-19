// import './App.css';
import { useEffect } from 'react';
import Slider from './components/slider/slider';
import { slides } from './data/data';
import HeroSection from './sections/herosection';
import Reasons from './sections/reasons';


function App() {

  useEffect(() => {
    document.title = "REASONS";
  });
  return (
    <div className="App">
      <HeroSection />
      <Slider slides = {slides}/>
      <Reasons />
    </div>
  );
}

export default App;
