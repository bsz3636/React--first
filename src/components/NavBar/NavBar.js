import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
      <NavLink to="/"><span className={styles.icon + ' fa fa-tasks'}></span></NavLink>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/favorite">Favorite</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;