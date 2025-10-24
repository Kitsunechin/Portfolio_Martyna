import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Bubble from "@/components/ui/Bubble";
import { ArrowDown, Star, Sparkles } from "lucide-react";
import projects from "@/data/projects";
import ParallaxSection from "@/components/ui/ParallaxSection";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="text-white text-7xl md:text-9xl">{text}</span>
  );
};

const AnimatedSubtitle = () => {
  const words = ["simplifying", "streamlining", "enhancing", "optimizing"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative font-semibold">
      <span className="invisible" style={{ width: '95px' }}>streamlining</span>
      <span className="absolute left-0 top-0">
        {words.map((word, index) => (
          <span
            key={word}
            className={`absolute left-0 top-0 text-[#DDC7FF] transition-all duration-500 ${index === currentWordIndex
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
};

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    if (mainRef.current) {
      const yOffset = -100;
      const y = mainRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-item');

      elements.forEach((element) => {
        const elem = element as HTMLElement;
        const speed = parseFloat(elem.dataset.speed || "0.15");
        elem.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    document.body.classList.add('dark');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-900 text-white">
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 overflow-visible bg-gray-900">
          <Bubble
            color="green"
            size="xl"
            className="top-[25%] right-[8%] opacity-60"
            animation="float-alt"
          />

          <Bubble
            color="yellow"
            size="lg"
            animation="float"
            className="left-[5%] top-[35%] opacity-40"
          />

          <Bubble
            color="green"
            size="md"
            animation="float-alt"
            className="top-[65%] left-[25%] opacity-60"
          />

          <Bubble
            color="yellow"
            size="xl"
            animation="float"
            className="bottom-[15%] right-[25%] opacity-40"
          />

          <Bubble
            color="green"
            size="sm"
            animation="float"
            className="top-[15%] left-[15%] opacity-60"
          />

          <Bubble
            color="yellow"
            size="md"
            animation="float-alt"
            className="bottom-[25%] left-[2%] opacity-40"
          />

          <Bubble
            color="yellow"
            size="sm"
            animation="float-alt"
            className="top-[10%] right-[45%] opacity-40"
          />

          <Bubble
            color="green"
            size="md"
            animation="float"
            className="bottom-[5%] left-[40%] opacity-60"
          />

          <ParallaxSection speed={0.1} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
              <Sparkles className="h-8 w-8 text-bubble-yellow opacity-70" />
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <Star className="h-6 w-6 text-bubble-green opacity-70" />
            </div>
          </ParallaxSection>

          <div className="flex flex-col items-center text-center relative z-20">
            {/* Container around the title section */}
            <div className="relative inline-block">
              {/* Align this span directly with the "M" of Martyna */}
              <span className="absolute -top-8 left-0 font-handwriting text-2xl text-white text-left">
                Product Designer
              </span>

              {/* This block defines the alignment baseline */}
              <h1 className="text-6xl md:text-8xl font-bold mb-6 inline-block">
                <AnimatedText text="Martyna" />
              </h1>
            </div>

            {/* Subtitle paragraph with centered AnimatedSubtitle */}
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-center">
              A product designer with a passion for{" "}
              <span className="inline-block" >
                <AnimatedSubtitle />
              </span>{" "}
              <br /> user experience, one pixel at a time.
            </p>
          </div>
          <div className="flex flex-col items-center mt-20 relative z-20">
            <div className="group mx-auto flex flex-col items-center gap-6">
              <Link to="/work" className="text-lg hover:text-[#DDC7FF] transition-colors">
                See my projects
              </Link>
              <button
                onClick={scrollToProjects}
                className="border border-current rounded-full p-2 group-hover:bg-[#DDC7FF] group-hover:text-black transition-colors"
                aria-label="Scroll to impactful projects"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>

        </section>

        <section ref={mainRef} className="py-24 px-6 md:px-10 bg-gray-900 text-white relative">
          <h2 className="text-3xl font-bold mb-10 relative z-20">
            Impactful projects
          </h2>

          <Bubble
            color="yellow"
            size="lg"
            className="absolute top-[140%] right-[5%] opacity-40"
            animation="float-alt"
          />
          <Bubble
            color="green"
            size="md"
            className="absolute top-[125%] right-[25%] opacity-60"
            animation="float-alt"
          />
          <Bubble
            color="yellow"
            size="sm"
            className="absolute top-[15%] right-[35%] opacity-40"
            animation="float-alt"
          />
          <Bubble
            color="yellow"
            size="md"
            className="absolute top-[115%] left-[35%] opacity-40"
            animation="float-alt"
          />
          <Bubble
            color="green"
            size="sm"
            className="absolute top-[50%] left-[5%] opacity-60"
            animation="float"
          />
          <Bubble
            color="yellow"
            size="lg"
            className="absolute top-[80%] right-[15%] opacity-40"
            animation="float-alt"
          />

          <div className="space-y-6 relative z-20">
            <p className="text-lg max-w-3xl">
              As a marketplace product designer, I enhance user experiences to drive engagement and simplify job applications. Using data-driven design, I optimize features for efficiency, interaction, and measurable impact, including:
            </p>

            <ul className="space-y-4 max-w-3xl list-none pl-0 text-lg">
              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Created a guided tour which boosted <strong className="text-bubble-green opacity-80">shift response rates by 19%.</strong></span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Optimized job search with a radius filter, boosting application success from <strong className="text-bubble-green opacity-80">20% to 32.9%.</strong></span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Introduced a commute-based selection map feature which <strong className="text-bubble-green opacity-80">cut application time by 25%.</strong></span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Designed badge system which drove <strong className="text-bubble-green opacity-80">16.5% more engagement</strong> with key features.</span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Implemented shift ratings with a <strong className="text-bubble-green opacity-80">40% completion rate</strong>, driving data-informed product improvements.</span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Launched a time-off system with <strong className="text-bubble-green opacity-80">71% adoption in new markets and 61% in legacy markets</strong> improving scheduling efficiency.</span>
              </li>

              <li className="flex gap-3 items-baseline">
                <Sparkles className="h-5 w-5 white flex-shrink-0" />
                <span>Led to a <strong className="text-bubble-green opacity-80">14% rise in job applications</strong> by aligning web and mobile experiences.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 bg-gray-800 relative">
          <Bubble
            color="green"
            size="md"
            className="absolute top-20 left-[20%] opacity-60"
            animation="float"
          />

          <Bubble
            color="yellow"
            size="sm"
            className="absolute bottom-10 left-[28%] opacity-40"
            animation="float-alt"
          />

          <Bubble
            color="yellow"
            size="md"
            className="absolute bottom-20 right-[20%] opacity-40"
            animation="float"
          />

          <Bubble
            color="green"
            size="sm"
            className="absolute top-60 left-[10%] opacity-60"
            animation="float-alt"
          />

          <Bubble
            color="yellow"
            size="lg"
            className="absolute bottom-32 right-[45%] opacity-40"
            animation="float"
          />

          <h2 className="text-3xl font-bold mb-12 relative inline-block z-20">
            Where I've worked
          </h2>

          <div className="grid md:grid-cols-2 gap-10 relative z-20">
            <Link
              to="/work?company=jobtalent"
              className="bg-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"

            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Job&Talent</h3>
                <div className="aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/lovable-uploads/Job.png"
                    alt="Job&Talent Workspace"
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mb-6 text-gray-200">
                  Job&Talent is a digital workforce marketplace that connects temporary workers with companies in need of qualified staff. Operating in 9 countries, it supports companies like DHL, UPS, and Carrefour.
                </p>

                <span className="text-[#DDC7FF] font-medium flex items-center hover:underline">
                  See my projects <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                </span>
              </div>

              <Bubble
                color="yellow"
                size="lg"
                className="top-[-40px] right-[-40px] opacity-20 -z-0"
              />
            </Link>

            <Link
              to="/work?company=prograils"
              className="bg-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Prograils</h3>
                <div className="aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/lovable-uploads/Prograils-7.png"
                    alt="Prograils Workspace"
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mb-6 text-gray-200">
                  Prograils is a software company with an incredible culture—more like a group of friends constantly learning and growing together. I worked on Humadroid, an internal web app for HR management.
                </p>

                <span className="text-[#DDC7FF] font-medium flex items-center hover:underline">
                  See my projects <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                </span>
              </div>

              <Bubble
                color="green"
                size="lg"
                className="top-[-40px] right-[-40px] opacity-20 -z-0"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
