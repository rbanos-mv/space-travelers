import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLink = (isActive) => `nav-link${(!isActive ? ' unselected' : '')}`;
  return (
    <nav>
      <div className="logo container">
        <h1 className="app-title">Space Travelers&apos; Hub</h1>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={activeLink}>Rockets</NavLink>
        <NavLink to="/missions" className={activeLink}>Missions</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
