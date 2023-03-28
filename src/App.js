import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './styles/App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="nav">
          <span><Link to="/" className="logo">Math Magicians</Link></span>
          <ul className="navbar">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/calculator" className="nav-link">Calculator</Link></li>
            <li><Link to="/quote" className="nav-link">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
