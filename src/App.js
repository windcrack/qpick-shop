import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

import './App.sass';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exack path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
