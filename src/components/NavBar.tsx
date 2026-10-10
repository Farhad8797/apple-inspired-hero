import { navLinks } from '../constants/info';
import {
  AppleLogoSVG,
  SearchIconSVG,
  ShoppingCartSVG,
} from '../constants/svgPaths';

export default function NavBar() {
  return (
    <header className="my-6 px-4 sm:px-8 md:px-12 lg:px-16 bg-black text-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <AppleLogoSVG />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-md font-light font-inter">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a
                href={'#' + label}
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 sm:gap-6">
          <button
            type="button"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <SearchIconSVG />
          </button>
          <button
            type="button"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <ShoppingCartSVG />
          </button>
        </div>
      </nav>
    </header>
  );
}
