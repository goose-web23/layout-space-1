import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';

function AppContent() {
  const location = useLocation();

  const updateBodyClass = () => {
    const path = location.pathname;
    document.body.className = '';

    if (path === '/') document.body.classList.add('home-page');
    else if (path === '/destination') document.body.classList.add('destination-page');
    else if (path === '/crew') document.body.classList.add('crew-page');
    else if (path === '/technology') document.body.classList.add('technology-page');
  };

  updateBodyClass();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;