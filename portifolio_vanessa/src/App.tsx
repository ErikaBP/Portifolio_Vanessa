import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/page';
import HavaianasPage from './pages/Havaianas/page';
import GirafaPage from './pages/Girafa/page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/havaianas" element={<HavaianasPage />} />
         <Route path="/girafa" element={<GirafaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;