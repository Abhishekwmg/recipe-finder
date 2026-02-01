// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="w-full flex items-center justify-between min-h-[75px] bg-gray-800">
//       <div>Logo</div>
//       <nav>
//         <ul className="flex gap-20 center">
//           <li className="border-solid border-[1px] border-amber-50 text-white">
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="about">About</Link>
//           </li>
//           <li>
//             <Link to="recipe">Recipe</Link>
//           </li>
//           <li>
//             <Link to="contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <nav>
//         <ul>
//           <li>Login</li>
//           <li>Signup</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
// export default Header;

// import { Link } from "react-router-dom";
// import { Menu } from "lucide-react";
// import { useState } from "react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-slate-800 text-slate-100">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between h-[75px]">
//           {/* Logo */}
//           <div className="text-xl font-semibold tracking-wide">
//             <Link to="/">Logo</Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-12">
//             <ul className="flex gap-10 text-sm font-medium">
//               <li>
//                 <Link className="hover:text-slate-300 transition" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-slate-300 transition" to="about">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-slate-300 transition" to="recipe">
//                   Recipe
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-slate-300 transition" to="contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             <ul className="flex gap-4 text-sm">
//               <li>
//                 <Link className="hover:text-slate-300 transition" to="login">
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="px-4 py-2 border border-slate-500 rounded-md hover:bg-slate-700 transition"
//                   to="signup"
//                 >
//                   Signup
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-slate-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <Menu />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <nav className="md:hidden pb-6">
//             <ul className="flex flex-col gap-4 text-sm font-medium">
//               <li>
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="about" onClick={() => setMenuOpen(false)}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="recipe" onClick={() => setMenuOpen(false)}>
//                   Recipe
//                 </Link>
//               </li>
//               <li>
//                 <Link to="contact" onClick={() => setMenuOpen(false)}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             <div className="mt-6 flex gap-4">
//               <Link to="login">Login</Link>
//               <Link
//                 className="px-4 py-2 border border-slate-500 rounded-md"
//                 to="signup"
//               >
//                 Signup
//               </Link>
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-wide">
            Logo
          </Link>

          {/* Hamburger (mobile only) */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
                  className="px-4 py-2 border border-slate-500 rounded-md"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
