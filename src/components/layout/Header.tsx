import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show glassmorphism after scrolling 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`py-6 px-6 md:px-10 w-full flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "backdrop-blur-xl bg-white/10 border-b border-white/20" : ""
    }`}>
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
