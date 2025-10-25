import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";
import companies from "@/data/companies";
import ShaderBackground from "@/components/ui/ShaderBackground";
import { ChevronDown } from "lucide-react";
import { StackingCards, StackingCardItem } from "@/components/ui/stacking-cards-framer";

type CompanyFilter = "all" | "jobtalent" | "prograils";

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<CompanyFilter>(() => {
    const companyParam = searchParams.get('company');
    return (companyParam === 'jobtalent' || companyParam === 'prograils')
      ? companyParam
      : 'all';
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter !== 'all') {
      setSearchParams({ company: filter });
    } else {
      setSearchParams({});
    }
  }, [filter, setSearchParams]);

  return (
    <>
      <Header />
      <ShaderBackground />

      <main className="min-h-screen relative">
        {/* Hero section */}
        <section className="py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              Work
            </h1>
            
            <p className="text-xl max-w-2xl mb-8 animate-fade-in-delayed text-white">
              A collection of projects where I've designed solutions to improve user experience and business metrics.
            </p>
            
            <div className="flex space-x-4 animate-fade-in-delayed">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-4 py-2 rounded-full transition-colors ${filter === "all" ? "bg-[#DDC7FF] text-black" : "bg-black text-white hover:bg-[#DDC7FF] hover:text-black"}`}
            >
              All projects
            </button>
            <button 
              onClick={() => setFilter("jobtalent")} 
              className={`px-4 py-2 rounded-full transition-colors ${filter === "jobtalent" ? "bg-[#DDC7FF] text-black" : "bg-black text-white hover:bg-[#DDC7FF] hover:text-black"}`}
            >
              Job&Talent
            </button>
            <button 
              onClick={() => setFilter("prograils")} 
              className={`px-4 py-2 rounded-full transition-colors ${filter === "prograils" ? "bg-[#DDC7FF] text-black" : "bg-black text-white hover:bg-[#DDC7FF] hover:text-black"}`}
            >
              Prograils
            </button>
            </div>
          </div>
        </section>

        {/* Always show Job&Talent section when filter is all or jobtalent */}
        {(filter === "all" || filter === "jobtalent") && (
          <section className="py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
              {/* Header card for Job&Talent */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 mb-10 p-6 sm:p-8 lg:p-10" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                <div className="text-center">
                  <span className="text-sm font-medium text-[#DDC7FF] uppercase tracking-wider">UX/UI DESIGN</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Job&Talent</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {companies.find(c => c.id === "jobtalent")?.longDescription}
                  </p>
                </div>
              </div>

              {/* Stacking list of Job&Talent projects */}
              <div className="h-[800px] overflow-auto">
                <StackingCards
                  totalCards={projects.filter(project => project.company === "jobtalent").length}
                  scaleMultiplier={0.04}
                >
                  {projects
                    .filter(project => project.company === "jobtalent")
                    .map((project, index) => (
                      <StackingCardItem key={project.id} index={index} className="h-[800px] w-full">
                        <div className="w-full min-w-0">
                          <div className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl overflow-hidden hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] p-6 sm:p-8 lg:p-10" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                              <div className="w-full min-w-[300px]">
                                <a href={`/project/${project.slug}`} className="block aspect-video bg-gray-800 rounded-2xl overflow-hidden group min-h-[200px] cursor-pointer">
                                  <img
                                    src={project.imageSrc}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </a>
                              </div>
                              <div className="w-full min-w-[300px] flex flex-col justify-start">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">{project.title}</h3>
                                <p className="text-lg text-white mb-6 leading-relaxed">{project.shortDescription}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="px-3 py-1 backdrop-blur-xl bg-white/15 border border-white/20 text-white rounded-full text-sm transition-colors duration-300 hover:bg-white/25 whitespace-nowrap"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <a
                                  href={`/project/${project.slug}`}
                                  className="inline-flex items-center text-[#DDC7FF] font-semibold hover:underline transition-all duration-300 hover:text-white text-base"
                                >
                                  Case study →
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </StackingCardItem>
                    ))}
                </StackingCards>
              </div>
            </div>
          </section>
        )}

        {/* Show divider only when showing all projects */}
        {filter === "all" && (
          <div className="px-4 sm:px-6 md:px-10">
            <div className="h-px bg-gray-800 w-full" />
          </div>
        )}

        {/* Always show Prograils section when filter is all or prograils */}
        {(filter === "all" || filter === "prograils") && (
          <section className="py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
              {/* Header card for Prograils */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 mb-10 p-6 sm:p-8 lg:p-10" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                <div className="text-center">
                  <span className="text-sm font-medium text-[#DDC7FF] uppercase tracking-wider">UX/UI DESIGN</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Prograils</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {companies.find(c => c.id === "prograils")?.longDescription}
                  </p>
                </div>
              </div>

              {/* Stacking list of Prograils projects */}
              <div className="h-[800px] overflow-auto">
                <StackingCards
                  totalCards={projects.filter(project => project.company === "prograils").length}
                  scaleMultiplier={0.04}
                >
                  {projects
                    .filter(project => project.company === "prograils")
                    .map((project, index) => (
                      <StackingCardItem key={project.id} index={index} className="h-[800px] w-full">
                        <div className="w-full min-w-0">
                          <div className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl overflow-hidden hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] p-6 sm:p-8 lg:p-10" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                              <div className="w-full min-w-[300px]">
                                <a href={`/project/${project.slug}`} className="block aspect-video bg-gray-800 rounded-2xl overflow-hidden group min-h-[200px] cursor-pointer">
                                  <img
                                    src={project.imageSrc}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </a>
                              </div>
                              <div className="w-full min-w-[300px] flex flex-col justify-start">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">{project.title}</h3>
                                <p className="text-lg text-white mb-6 leading-relaxed">{project.shortDescription}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="px-3 py-1 backdrop-blur-xl bg-white/15 border border-white/20 text-white rounded-full text-sm transition-colors duration-300 hover:bg-white/25 whitespace-nowrap"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <a
                                  href={`/project/${project.slug}`}
                                  className="inline-flex items-center text-[#DDC7FF] font-semibold hover:underline transition-all duration-300 hover:text-white text-base"
                                >
                                  Case study →
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </StackingCardItem>
                    ))}
                </StackingCards>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default Work;
