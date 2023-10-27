import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import Photo from './components/Photo.jpg'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Header />
    <About />
    <Education />
    <div className='App_subpart1'>
    <Skills />
    <Project />
    </div>
    <Contact />
    </div>
   
  );
}
export default App;
