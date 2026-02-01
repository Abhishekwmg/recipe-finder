import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-800 text-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[75px]">
            {/* Logo */}
            <Link to="/" className="text-xl font-semibold tracking-wide">
              Logo
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Navigation (ONE TIME ONLY) */}
            <nav
              className={`
              absolute left-0 top-[75px] w-full bg-slate-800
              md:static md:w-auto
              ${menuOpen ? "block" : "hidden"}
              md:block
            `}
            >
              <ul
                className="
                flex flex-col gap-4 px-6 py-6
                md:flex-row md:gap-10 md:p-0
                text-sm font-medium
              "
              >
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="recipe" onClick={() => setMenuOpen(false)}>
                    Recipe
                  </Link>
                </li>
                <li>
                  <Link to="contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li className="md:ml-6">
                  <Link to="login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="signup"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 border border-slate-500 rounded-md hover:bg-amber-50 hover:text-black"
                  >
                    Signup
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
