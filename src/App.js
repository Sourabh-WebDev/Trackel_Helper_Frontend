import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import ServicePage from './LandingPage/Pages/ServicePage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/serviceName' element={<ServicePage />} />
          <Route path='/admin' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
