import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/pokemons'>Pokemons</NavLink>
      <NavLink to='/test' className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Test
      </NavLink>
    </header>
  )
}

export default Navbar
