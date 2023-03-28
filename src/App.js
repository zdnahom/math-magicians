import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-link"><Link to="/calculator">Calculator</Link></li>
            <li className="nav-link"><Link to="/quote">Quote</Link></li>
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
