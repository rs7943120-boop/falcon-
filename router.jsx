import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/import" element={<Import />} />
        <Route path="/export-trading" element={<ExportTrading />} />
        <Route path="/download-brochure" element={<Brochure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trade-inquiry" element={<TradeInquiry />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;