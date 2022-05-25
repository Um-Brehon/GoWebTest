import { NavLink } from 'react-router-dom';
import circleLogo from '../../assets/circleLogo.png';
import SSidebar from './style';

function Sidebar() {
  return (
    <SSidebar>
      <NavLink to="/">
        <div className="homeLogo">
          <div className="logoBox">
            <img className="logoPic" src={circleLogo} alt="circleLogo" />
          </div>
          <div className="logoText">
            <h3>Circle</h3>
            <h3>Products</h3>
          </div>
        </div>
      </NavLink>
      <ul className="navMenu">
        <li>Dashboard</li>
        <li>Products management</li>
        <li>Employees management</li>
      </ul>
      <div className="logDiv">
        <p>Log out</p>
      </div>
    </SSidebar>
  );
}

export default Sidebar;
