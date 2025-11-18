import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />

        </Routes>

    </Router>
  );
}

export default App;


