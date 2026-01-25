import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectSection from "@/components/projects/ProjectSection";
import ImageShowcase from "@/components/projects/ImageShowcase";
import PasswordProtect from "@/components/ui/PasswordProtect";
import ShaderBackground from "@/components/ui/ShaderBackground";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import projects, { Project } from "@/data/projects";
import { checkAuthState, storeAuthState } from "@/utils/auth";
import { Button } from "@/components/ui/button";

// Animated KPI Component
const AnimatedKPI = ({ kpi, index, projectSlug }: { kpi: { metric: string; percentage: number; description: string }; index: number; projectSlug: string }) => {
  const [isInView, setIsInView] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const kpiRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Reset animation when project changes
  useEffect(() => {
    setIsInView(false);
    setAnimatedPercentage(0);
  }, [projectSlug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset when out of view so it can animate again if scrolled back
          setIsInView(false);
          setAnimatedPercentage(0);
        }
      },
      { threshold: 0.2 }
    );

    if (kpiRef.current) {
      observer.observe(kpiRef.current);
    }

    return () => {
      if (kpiRef.current) {
        observer.unobserve(kpiRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const duration = 3000;
    const staggerDelay = index * 200; // 200ms delay between each KPI
    let startTime: number | null = null;
    let delayComplete = false;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      // Handle stagger delay
      if (!delayComplete) {
        if (elapsed < staggerDelay) {
          setAnimatedPercentage(0); // Keep at 0 during delay
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
        delayComplete = true;
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smoother easing function (easeOutCubic for more gentle deceleration)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentPercentage = kpi.percentage * easeOutCubic;

      setAnimatedPercentage(currentPercentage);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setAnimatedPercentage(kpi.percentage);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isInView, kpi.percentage, index]);

  return (
    <div ref={kpiRef}>
      <p className="font-medium text-white">{kpi.metric}</p>
      <div className="h-4 bg-gray-700 rounded-full mt-2 overflow-hidden">
        <div
          className="h-4 bg-[#DDC7FF] rounded-full"
          style={{
            width: `${animatedPercentage}%`
          }}
        />
      </div>
      <div className="flex justify-between text-sm mt-1 text-gray-300">
        <span>0%</span>
        <span>{Math.round(animatedPercentage)}%</span>
      </div>
      <p className="text-sm text-gray-300 mt-1">{kpi.description}</p>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    // Reset loading state when slug changes
    setIsLoaded(false);

    const foundProject = projects.find(p => p.slug === slug);

    if (!foundProject) {
      navigate("/work");
      return;
    }

    setProject(foundProject);
    setIsAuthenticated(checkAuthState());

    // Add a small delay to ensure background is rendered
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug, navigate]);

  const handleUnlock = () => {
    setIsAuthenticated(true);
    storeAuthState();
  };

  if (!project) return null;

  return (
    <>
      <Header />
      <ShaderBackground />

      <main className={`min-h-screen relative transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ProjectHeader
          title={project.title}
          description={project.fullDescription}
          role={project.role}
          team={project.team}
          timeline={project.timeline}
        />

        {!isAuthenticated ? (
          <div className="max-w-3xl mx-auto mt-12 mb-24">
            <PasswordProtect
              correctPassword="Kitsune25"
              onUnlock={handleUnlock}
            />
          </div>
        ) : (
          <>
            <ProjectSection title="The challenge">
              <div className="max-w-3xl">
                <p className="text-lg mb-6 text-white">{project.challenge}</p>
                <ImageShowcase
                  images={project.images && project.images[0] ?
                    [{ src: project.images[0], alt: `${project.title} challenge visualization` }] :
                    [{ src: project.imageSrc, alt: `${project.title} challenge visualization` }]
                  }
                  caption={project.imageCaptions?.[0] || "Exploration of the current and competitive analysis"}
                  variant="dark"
                />
              </div>
            </ProjectSection>

            <ProjectSection title="My role" variant="dark">
              <div className="max-w-3xl">
                <p className="text-lg mb-6 text-white">{project.myRole}</p>
                <ImageShowcase
                  images={project.images && project.images[1] ?
                    [{ src: project.images[1], alt: `${project.title} design process` }] :
                    [{ src: project.imageSrc, alt: `${project.title} design process` }]
                  }
                  caption={project.imageCaptions?.[1] || "Exploration of the design process"}
                  variant="dark"
                />
              </div>
            </ProjectSection>

            <ProjectSection title="Solution">
              <div className="max-w-3xl">
                <p className="text-lg mb-6 text-white">{project.solution}</p>

                {project.keyImprovements && (
                  <div className="mb-6">
                    <p className="text-lg text-white mb-3">Key improvements:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      {project.keyImprovements.map((improvement, index) => (
                        <li key={index} className="text-lg text-gray-300">{improvement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.images && project.images[2]) || (!project.images) ? (
                  <ImageShowcase
                    images={project.images && project.images[2] ?
                      [{ src: project.images[2], alt: `${project.title} solution` }] :
                      [{ src: project.imageSrc, alt: `${project.title} solution` }]
                    }
                    caption={project.imageCaptions?.[2] || "Final design"}
                  />
                ) : null}
              </div>
            </ProjectSection>

            <ProjectSection title="Impact" variant="dark">
              <div className="max-w-3xl">
                <p className="text-lg mb-6 text-white">{project.impact}</p>

{project.kpis && project.slug !== 'productivity-fill-rate' && (
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-lg shadow-2xl" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                    <h3 className="font-medium mb-4 text-white">Key performance indicators</h3>
                    <div className="space-y-4">
                      {project.kpis.map((kpi, index) => (
                        <AnimatedKPI key={index} kpi={kpi} index={index} projectSlug={project.slug} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ProjectSection>

            <ProjectSection title="Learnings">
              <div className="max-w-3xl">
                <ul className="list-disc pl-6 space-y-4">
                  {project.learnings?.map((learning, index) => (
                    <li key={index}>
                      <p className="font-medium text-white">{learning.title}</p>
                      <p className="text-gray-300">{learning.description}</p>
                    </li>
                  ))}
                </ul>

                {project.videoEmbedUrl && (
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4 text-white">Watch the project in action</h3>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <iframe
                        src={project.videoEmbedUrl
                          .replace('youtube.com/shorts/', 'youtube.com/embed/')
                          .replace('youtu.be/', 'youtube.com/embed/')
                          .replace('?feature=share', '')
                          .replace('youtube.com/watch?v=', 'youtube.com/embed/')}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {project.prototypeUrl && (
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4 text-white">View interactive prototype</h3>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-lg flex items-center justify-between shadow-2xl" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                      <div>
                        <p className="text-white mb-2 font-medium">Explore the design prototype</p>
                        <p className="text-gray-300 text-sm">Interact with the live prototype to see the design in action</p>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-[#DDC7FF] hover:bg-[#DDC7FF]/90 text-[#090A0B] border-[#DDC7FF] hover:text-[#090A0B]"
                        onClick={() => window.open(project.prototypeUrl, '_blank')}
                      >
                        View prototype <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ProjectSection>
          </>
        )}

        <section className="py-10 px-6 md:px-10 flex justify-between">
          <div>
            {prevProject && (
              <Link
                to={`/project/${prevProject.slug}`}
                className="flex items-center group text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                <span>Prev project</span>
              </Link>
            )}
          </div>
          <div>
            {nextProject && (
              <Link
                to={`/project/${nextProject.slug}`}
                className="flex items-center group text-white"
              >
                <span>Next project</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-[4px] transition-transform" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;
