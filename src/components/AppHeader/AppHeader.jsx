import { Link, NavLink } from 'react-router-dom'
import './AppHeader.scss'

const AppHeader = () => (
  <header className="AppHeader">
    <div className="AppHeader__wrapper">
      <Link className="AppHeader__logo-link" to="/">
        <h1 className="AppHeader__title">JimBennett.dev</h1>
      </Link>
      <nav className="nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
)

export default AppHeader
