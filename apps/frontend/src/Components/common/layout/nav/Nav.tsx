import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";

export function Nav() {
  return (
    <nav>
      <div className="page-links">

        <SignedIn>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <UserButton />
          </div>
        </SignedIn>

        {/* Nav Links */}
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/searchfilter">
          Search Filter
        </NavLink>

        <NavLink to="/booklist">
          Book List
        </NavLink>

        <NavLink to="/library-tips">
          Library Tips
        </NavLink>

        <SignedOut>
          <SignInButton mode="modal">
            <button style={{ marginLeft: "10px" }}>Sign In</button>
          </SignInButton>

          <SignUpButton mode="modal">
          <button style={{ marginLeft: "10px" }}>Sign Up</button>
          </SignUpButton>
        </SignedOut>

      </div>
    </nav>
  );
}