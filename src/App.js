import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
