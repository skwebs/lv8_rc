// import partial components
// import ResponsiveAppBar from './components/ResponsiveAppBar';
// import Navigation from './components/Navigation';
// import page components
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Sitemap from "./pages/Sitemap";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./helpers/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter basename={`/mui/`}>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
