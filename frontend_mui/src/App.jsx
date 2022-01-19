// import partial components
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Navigation from './components/Navigation';
// import page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Sitemap from './pages/Sitemap';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
