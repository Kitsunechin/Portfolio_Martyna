import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Bubble from "@/components/ui/Bubble";

const NotFound = () => {
  return (
    <>
      <Header />

      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative bg-gray-900">
        <Bubble
          color="yellow"
          size="xl"
          className="absolute top-[10%] right-[5%] opacity-40"
          animation="float"
        />
        <Bubble
          color="green"
          size="lg"
          className="absolute top-[20%] left-[3%] opacity-60"
          animation="float-alt"
        />
        <Bubble
          color="yellow"
          size="md"
          className="absolute bottom-[15%] right-[12%] opacity-40"
          animation="float-alt"
        />
        <Bubble
          color="green"
          size="sm"
          className="absolute bottom-[25%] left-[8%] opacity-60"
          animation="float"
        />
        <Bubble
          color="yellow"
          size="lg"
          className="absolute top-[50%] right-[25%] opacity-40"
          animation="float-alt"
        />
        <Bubble
          color="green"
          size="md"
          className="absolute bottom-[40%] left-[20%] opacity-60"
          animation="float"
        />

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">404</h1>
        <p className="text-xl mb-8 text-center max-w-md text-white">
          Oops! The page you're looking for can't be found.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-[#9b87f5] text-black rounded-lg hover:bg-[#DDC7FF] transition-colors font-medium"
        >
          Return to Home
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
