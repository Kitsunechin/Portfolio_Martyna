
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
    <footer className="w-full backdrop-blur-xl bg-white/10 border-t border-white/20 text-white py-6 px-6 md:px-10 relative z-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-medium text-white">Contact</span>
          <a href="mailto:martyna.bulska@gmail.com" aria-label="Email" className="text-white hover:text-[#DDC7FF] transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/martynabulska" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white hover:text-[#DDC7FF] transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/martynabulska" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white hover:text-[#DDC7FF] transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-[#DDC7FF] hover:bg-[#DDC7FF]/90 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-black" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
