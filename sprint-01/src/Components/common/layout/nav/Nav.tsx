import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <div className="page-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">
          login
          </NavLink>

        <NavLink to="/Searchfilter">
          Searchfilter
        </NavLink>
        <NavLink to="/booklist">
          Book List
        </NavLink>
      </div>
    </nav>
  );
}
