import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import NavBar from './Components/Navbar';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
      <div className="App">
      <NavBar/>
       <Routes>
       <Route exact path="/"  element={  
              <>    
            <Home/>
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Contact />
            <div style={{marginBottom:'4rem'}}> </div>
            </>
         } />
          <Route exact path="/resume"  element={<Resume/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
