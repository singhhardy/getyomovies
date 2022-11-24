import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/sheets/Home";
import About from "./components/sheets/About";
import Dpage from "./components/Dpage/Dpage";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Router>
        <div className="app">
          <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Dpage' element={<Dpage />} />
              <Route path="/Dpage/:id" element={<Dpage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
