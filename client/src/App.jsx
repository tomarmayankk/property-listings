import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyProperty from "./pages/BuyProperty";
import SellProperty from "./pages/SellProperty";
import Navbar from "./components/Navbar";
import { Contact } from "./pages/Contact";
import PropertyDetails from "./pages/PorpertyDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyProperty />} />
        <Route path="/sell" element={<SellProperty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}