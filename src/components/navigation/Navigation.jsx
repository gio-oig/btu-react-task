import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as routes from '../../utils/routePaths';
import Button from '../shared/Buttton';

function Navigation() {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem('auth_token');
    history.replace('/auth');
  };

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            to={routes.GREETING_PATH}
            className="d-flex align-items-center fs-2 text-white text-decoration-none">
            Pc Parts
          </NavLink>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to={routes.HOME_PATH}
                className="nav-link text-secondary"
                activeClassName="text-white"
                exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components"
                className="nav-link text-secondary"
                activeClassName="text-white">
                Components
              </NavLink>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {user ? (
              <Button onClick={handleLogOut} className="btn btn-outline-light me-2">
                Log out
              </Button>
            ) : (
              <NavLink
                to={routes.AUTH_PATH}
                type="button"
                className="btn btn-outline-light me-2">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
