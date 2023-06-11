import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SuperAdminPannel from './Dashboard/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin' element={<SuperAdminPannel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
