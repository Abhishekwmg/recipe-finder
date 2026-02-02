import { Link } from "react-router-dom";
import { useState } from "react";
import { Utensils } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <header className="bg-slate-800 text-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[75px]">
            <Link to="/" className="text-xl font-semibold tracking-wide">
              Logo
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

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
      </header> */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-semibold tracking-wide text-slate-100"
            >
              <Utensils size={30} />
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-slate-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Navigation */}
            <nav
              className={`
          absolute left-0 top-[88px] w-full
          md:static md:w-auto md:bg-transparent md:backdrop-blur-0
          ${menuOpen ? "block" : "hidden"}
          md:block
        `}
            >
              <ul
                className="
            flex flex-col gap-4 px-6 py-6
            md:flex-row md:items-center md:gap-10 md:p-0
            text-sm font-medium text-slate-200
          "
              >
                <li>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="recipe"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition"
                  >
                    Recipe
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>

                <li className="md:ml-6">
                  <Link
                    to="login"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="signup"
                    onClick={() => setMenuOpen(false)}
                    className="
                px-4 py-2 rounded-lg text-sm font-semibold
                bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400
                text-white
                hover:from-amber-400 hover:via-orange-500 hover:to-rose-500
                transition-all shadow-sm
              "
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
