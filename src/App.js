import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

import './App.sass';
import Header from './compents/header/Header';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exack path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
