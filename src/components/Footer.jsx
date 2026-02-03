import { Utensils, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
          {/* Brand */}
          <div className="flex items-center gap-2 text-neutral-900">
            <Utensils className="h-6 w-6" />
            <span className="text-lg font-semibold tracking-tight">Findr</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
            <Link to="/" className="transition hover:text-neutral-900">
              Home
            </Link>
            <Link to="about" className="transition hover:text-neutral-900">
              About
            </Link>
            <Link to="contact" className="transition hover:text-neutral-900">
              Contact
            </Link>
            <Link to="login" className="transition hover:text-neutral-900">
              Login
            </Link>
            <Link
              to="signup"
              className="rounded-full bg-neutral-900 px-4 py-1.5 text-white transition hover:bg-neutral-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-neutral-500">
            <Link to="/" className="transition hover:text-neutral-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to="/" className="transition hover:text-neutral-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="/" className="transition hover:text-neutral-900">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="/" className="transition hover:text-neutral-900">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 text-center text-xs text-neutral-500">
          © 2026 Findr, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
