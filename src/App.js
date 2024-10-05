import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/about' element={<About />} />
      </Routes>        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
