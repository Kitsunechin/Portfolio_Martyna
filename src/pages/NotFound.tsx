import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShaderBackground from "@/components/ui/ShaderBackground";

const NotFound = () => {
  return (
    <>
      <Header />
      <ShaderBackground />

      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative z-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-12 text-center" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">404</h1>
          <p className="text-xl mb-8 text-center max-w-md text-white">
            Oops! The page you're looking for can't be found.
          </p>

          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#DDC7FF] text-black rounded-lg hover:bg-[#DDC7FF]/90 transition-colors font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
