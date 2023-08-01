import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';


export default function NavBar():JSX.Element{
    return (
        <nav className={styles.container}>
            <NavLink className={styles.link} to="birds">Birds</NavLink>
            <NavLink className={styles.link} to="flowers">Flowers</NavLink>
            <NavLink className={styles.link} to="fishes">Fishes</NavLink>
        </nav>
    );
}