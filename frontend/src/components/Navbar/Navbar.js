import { Link } from "react-router-dom";
import './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <p>Discussion Forum</p>
        </div>
        <div className="links">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/login">Login</Link></p>
        </div>
        <div>
          <p>Discussion Forum</p>
        </div>
      </nav>
    </>
  )
};

export default Navbar;