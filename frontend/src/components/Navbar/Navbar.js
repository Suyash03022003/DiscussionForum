import { Link } from "react-router-dom";
import styles from './navbar.module.css';
import { MdSearch, MdHomeFilled } from "react-icons/md";
import { BiLogIn} from "react-icons/bi";

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
              <MdHomeFilled color="white" size={45}/>
            </Link>
          </li>

          <li>
            <div className={styles.headerSearchContainer}>
              <MdSearch color="grey"/>
              <input type='text'  placeholder='search...' />
            </div>
          </li>
          
        </ul>
      </div>


      <div className={styles.navlogin}>
        <BiLogIn color="white" size={45} />
      </div>

    </header>
  );
}

export default Navbar;
