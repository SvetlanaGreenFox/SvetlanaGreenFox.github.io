import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import classNames from "classnames";


const Navbar = () => {
    const activeLink = classNames(styles["nav-list__link"], styles["nav-list__link--active"]);
    const normalLink = styles["nav-list__link"];

    return ( 
        <nav className={ styles.nav }>
            <div className= { styles.container }>
                <ul className={ styles["nav-list"] }>
                    <li className={ styles["nav-list__item"] }>
                        <NavLink to="/" className={ ({ isActive }) =>  isActive ? activeLink : normalLink }>
                            Home
                        </NavLink>
                    </li>
                    <li className={ styles["nav-list__item"] }>
                        <NavLink to="/about" className={ ({ isActive }) =>  isActive ? activeLink : normalLink }>
                            About me
                        </NavLink>
                    </li>
                    {/* <li className={ styles["nav-list__item"] }>
                        <NavLink to="/skills" className={ ({ isActive }) =>  isActive ? activeLink : normalLink }>
                            Skills
                        </NavLink>
                    </li> */}
                    <li className={ styles["nav-list__item"] }>
                        <NavLink to="/projects" className={ ({ isActive }) =>  isActive ? activeLink : normalLink }>
                            Projects
                        </NavLink>
                    </li>
                    <li className={ styles["nav-list__item"] }>
                        <NavLink to="/contacts" className={ ({ isActive }) =>  isActive ? activeLink : normalLink }>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}
 
export default Navbar;