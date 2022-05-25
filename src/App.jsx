import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navHome">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
