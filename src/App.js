import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import HeroSection from "./Components/HeroSection";
import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
