
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import Login from "./views/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import Productos from "./views/Productos"
import Cart from "./views/Cart";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Carrito" element={<Cart />} />
            <Route path="/Productos" element={<Productos />} />

          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
