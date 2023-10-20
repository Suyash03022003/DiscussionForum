import { Link } from "react-router-dom";
import styles from './navbar.module.css';
import { MdSearch, MdHomeFilled } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {

  return (
    <header className={styles.mainNav}>
      <div className={styles.navlogo}>
        <h2>
          <span>D</span>iscussion
          <span>F</span>orum
        </h2>
      </div>

      <div className={styles.navlinks}>
        <ul>
          <li>
            <Link to="/">
              <MdHomeFilled color="white" size={45} />
            </Link>
          </li>

          <li className={styles.search}>
            <div className={styles.headerSearchContainer}>
              <MdSearch className={styles.searchSVG} color="grey" />
              <input type='text' placeholder='search...' />
            </div>
          </li>

        </ul>
      </div>


      <div className={styles.navlogin}>
        <Link to="/login">

          <BiLogIn color="white" size={45} />
        </Link>
      </div>

    </header>
  );
}

export default Navbar;
