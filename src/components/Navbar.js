import { NavLink } from 'react-router-dom';
import logoUrl from '../img/logo.png';

const Navbar = () => {
  const activeLink = ({ isActive }) => `nav-link${(isActive ? ' activated' : '')}`;

  return (
    <nav>
      <div className="navbar-content">
        <div className="logo-container">
          <img className="logo" src={logoUrl} alt="" />
          <h1 className="app-title">Space Travelers&apos; Hub</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={activeLink}>Rockets</NavLink>
          <NavLink to="/missions" className={activeLink}>Missions</NavLink>
          <NavLink to="/my-profile" className={activeLink}>My Profile</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
