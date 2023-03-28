import { Link, Route, Routes } from 'react-router-dom';
import MathsMagician from './component/pages/Calculator';
import Quote from './component/pages/Quote';
import Home from './component/pages/Home';
import './index.css';

function App() {
  return (
    <>
      <nav>
        <div className="header">
          <h1 className="title">Math Magicians</h1>

          <ul>
            <li><Link to="/" className="no-border">Home</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/Quote">Quote</Link></li>
          </ul>
        </div>
      </nav>
      <div className="footer"><p>Math Magicians © 2023</p></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<MathsMagician />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
