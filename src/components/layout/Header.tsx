
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="py-6 px-6 md:px-10 w-full flex justify-between items-center bg-gray-900">
      <Link to="/" className="font-medium text-lg text-white">Martyna Bulska</Link>
      <nav className="flex items-center gap-6">
        <Link 
          to="/work" 
          className={`${
            location.pathname === '/work' || location.pathname.includes('/project') 
              ? 'bg-[#DDC7FF] text-black' 
              : 'text-white hover:bg-[#DDC7FF] hover:text-black'
          } px-4 py-1.5 rounded-lg transition-colors`}
        >
          Work
        </Link>
        <Link 
          to="/about" 
          className={`${
            location.pathname === '/about' 
              ? 'bg-[#DDC7FF] text-black' 
              : 'text-white hover:bg-[#DDC7FF] hover:text-black'
          } px-4 py-1.5 rounded-lg transition-colors`}
        >
          About
        </Link>
        <Link 
          to="/cv" 
          className={`${
            location.pathname === '/cv' 
              ? 'bg-[#DDC7FF] text-black' 
              : 'text-white hover:bg-[#DDC7FF] hover:text-black'
          } px-4 py-1.5 rounded-lg transition-colors`}
        >
          CV
        </Link>
      </nav>
    </header>
  );
};

export default Header;
