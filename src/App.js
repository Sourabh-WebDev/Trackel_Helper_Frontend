import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ServicePage from './LandingPage/Pages/ServicePage';
import SuperAdminPannel from './Dashboard/Index';
import OurServices from './LandingPage/Pages/OurServices';
import ContactUs from './LandingPage/Pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/serviceName' element={<ServicePage />} />
        <Route path='/Our-All-Services' element={<OurServices />} />
        <Route path='/Contact-Us' element={<ContactUs />} />
        <Route path='/admin' element={<SuperAdminPannel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
