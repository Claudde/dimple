import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
