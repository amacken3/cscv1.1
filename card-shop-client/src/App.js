import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* placeholders for future pages */}
        <Route path="/shop" element={<div>Shop Page Coming Soon</div>} />
        <Route path="/cart" element={<div>Cart Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}

export default App;
