import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EnHome from './pages/english/home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en/home" element={<EnHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
