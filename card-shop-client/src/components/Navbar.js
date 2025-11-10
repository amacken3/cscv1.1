import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
