import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Import from "./pages/Import";
import Export from "./pages/Export";
import FrozenMeat from "./pages/FrozenMeat";
import BuffaloHindQuarter from "./pages/BuffaloHindQuarter";
import BuffaloForeQuarter from "./pages/BuffaloForeQuarter";
import BuffaloOffals from "./pages/BuffaloOffals";
import BuffaloVealCuts from "./pages/BuffaloVealCuts";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/import" element={<Import />} />
          <Route path="/export-trading" element={<Export />} />
          <Route path="/frozen-meat/hind-quarter" element={<BuffaloHindQuarter />} />
          <Route path="/frozen-meat/fore-quarter" element={<BuffaloForeQuarter />} />
          <Route path="/frozen-meat/offals" element={<BuffaloOffals />} />
          <Route path="/frozen-meat/veal" element={<BuffaloVealCuts />} />
          <Route path="/frozen-meat" element={<FrozenMeat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trade-inquiry" element={<Contact />} />
          <Route path="/download-brochure" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;