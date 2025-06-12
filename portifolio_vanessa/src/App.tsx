import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/page';
import HavaianasPage from './pages/Havaianas/page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/havaianas" element={<HavaianasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;