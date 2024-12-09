import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
