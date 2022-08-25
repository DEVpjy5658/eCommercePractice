import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Wish from './pages/Wish';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/wish' element={<Wish />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
