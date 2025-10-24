
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-black text-white py-6 px-6 md:px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-medium">Contact</span>
          <a href="mailto:martyna.bulska@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/martynabulska" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/martynabulska" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
        <button 
          onClick={scrollToTop}
          className="p-2 rounded-full bg-bubble-green hover:bg-opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-black" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
