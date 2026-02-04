import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <div className="page-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>

        <NavLink to="/searchfilter">
          Search Filter
        </NavLink>

        <NavLink to="/booklist">
          Book List
        </NavLink>
      </div>
    </nav>
  );
}
