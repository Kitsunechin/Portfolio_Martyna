import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowDown } from "lucide-react";
import projects from "@/data/projects";
import { SplashCursor } from "@/components/ui/splash-cursor";

// Custom hook for counting animation
const useCountAnimation = (end: number, duration: number = 2000, isInView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;

      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
};

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

// Achievement Card Component
const AchievementCard = ({
  metric,
  title,
  description,
  icon,
  delay,
  projectSlug
}: {
  metric: string;
  title: string;
  description: string;
  icon: string;
  delay: number;
  projectSlug?: string;
}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [animatedMetric, setAnimatedMetric] = useState(metric);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Extract all numbers from the metric string
    const numberMatches = metric.match(/\d+\.?\d*/g);
    if (!numberMatches) return;

    const numbers = numberMatches.map(n => parseFloat(n));
    const duration = 3000; // Increased from 2000ms to 3000ms for slower animation
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smoother easing function (easeOutCubic for more gentle deceleration)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      let result = metric;
      numberMatches.forEach((numStr, index) => {
        const targetNum = numbers[index];
        const currentNum = targetNum * easeOutCubic;

        // Preserve decimal places if original had them
        const hasDecimal = numStr.includes('.');
        const formattedNum = hasDecimal ? currentNum.toFixed(1) : Math.floor(currentNum).toString();

        // Replace this occurrence
        result = result.replace(numStr, formattedNum);
      });

      setAnimatedMetric(result);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedMetric(metric);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, metric]);

  const cardContent = (
    <>
      <div className="text-5xl md:text-6xl font-bold text-[#DDC7FF] mb-4">
        {animatedMetric}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-base text-white/70 leading-relaxed">{description}</p>
    </>
  );

  if (projectSlug) {
    return (
      <Link
        to={`/project/${projectSlug}`}
        ref={cardRef}
        className="block backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-95 cursor-pointer group"
        style={{
          boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)'
        }}
      >
        {cardContent}
        <div className="absolute top-4 right-4 text-white/40 group-hover:text-white/70 transition-colors">
          →
        </div>
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 relative overflow-hidden"
      style={{
        boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)'
      }}
    >
      {cardContent}
    </div>
  );
};

// Achievement data
const achievements = [
  {
    metric: "+19%",
    icon: "✦",
    title: "Shift Response Rate",
    description: "Created a guided tour which boosted shift response rates",
    projectSlug: "guided-tour"
  },
  {
    metric: "60%",
    icon: "✦",
    title: "Fullfillment Rate",
    description: "Optimized job applications with AI Clara recruiter",
    projectSlug: "ai-recruiter"
  },
  {
    metric: "30%",
    icon: "✦",
    title: "Productivity rollout",
    description: "Successfully rolled out productivity features across markets",
    projectSlug: "productivity-fill-rate"
  },
  {
    metric: "40%",
    icon: "✦",
    title: "Completion Rate",
    description: "Implemented shift ratings driving data-informed improvements",
    projectSlug: "shift-satisfaction"
  },
  {
    metric: "71% & 61%",
    icon: "✦",
    title: "Market Adoption",
    description: "Launched time-off system with high adoption in new and legacy markets",
    projectSlug: "time-off"
  },
  {
    metric: "+14%",
    icon: "✦",
    title: "Job Applications",
    description: "Led to rise in job applications by aligning web and mobile experiences",
    projectSlug: "web-redesign"
  }
];

// ===================== SHADER BACKGROUND =====================
function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Simplified fragment shader with animated gradient
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;

        // Create animated waves
        float wave1 = sin(uv.x * 3.0 + time * 0.5) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 4.0 + time * 0.3) * 0.5 + 0.5;
        float wave3 = sin((uv.x + uv.y) * 2.0 + time * 0.4) * 0.5 + 0.5;

        // Mix colors
        vec3 color1 = vec3(0.2, 0.1, 0.4); // Dark purple
        vec3 color2 = vec3(0.1, 0.3, 0.5); // Dark blue
        vec3 color3 = vec3(0.3, 0.2, 0.5); // Purple-blue

        vec3 finalColor = mix(color1, color2, wave1);
        finalColor = mix(finalColor, color3, wave2 * wave3);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Compile shaders
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const time = (Date.now() - startTime) * 0.001;
      gl.uniform1f(timeLocation, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>
  );
}

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
      <SplashCursor />
      <Header />
      <ShaderBackground />

      <main className="min-h-screen text-white relative">
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 overflow-hidden">

          <div className="flex flex-col items-center text-center relative" style={{ zIndex: 10 }}>
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
          <div className="flex flex-col items-center mt-20 relative" style={{ zIndex: 10 }}>
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

        <section ref={mainRef} className="py-24 px-6 md:px-10 text-white relative">
          <h2 className="text-3xl font-bold mb-6 relative z-20">
            Impactful projects
          </h2>

          <div className="relative z-20">
            <p className="text-lg max-w-3xl mb-12 text-white/80">
              As a product designer, I enhance user experiences to drive engagement and simplify job applications. Using data-driven design, I optimize features for efficiency, interaction, and measurable impact, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  metric={achievement.metric}
                  title={achievement.title}
                  description={achievement.description}
                  icon={achievement.icon}
                  delay={index * 100}
                  projectSlug={achievement.projectSlug}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 relative">
          <h2 className="text-3xl font-bold mb-12 relative inline-block z-20">
            Where I've worked
          </h2>

          <div className="grid md:grid-cols-2 gap-10 relative z-20">
            <Link
              to="/work?company=jobtalent"
              className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-[0_8px_32px_0_rgba(221,199,255,0.37)] hover:bg-white/15 transition-all duration-300 relative overflow-hidden group"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Job&Talent</h3>
                <div className="aspect-video bg-white/5 backdrop-blur-sm rounded-lg mb-6 overflow-hidden border border-white/10">
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
            </Link>

            <Link
              to="/work?company=prograils"
              className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-[0_8px_32px_0_rgba(221,199,255,0.37)] hover:bg-white/15 transition-all duration-300 relative overflow-hidden group"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Prograils</h3>
                <div className="aspect-video bg-white/5 backdrop-blur-sm rounded-lg mb-6 overflow-hidden border border-white/10">
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
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
