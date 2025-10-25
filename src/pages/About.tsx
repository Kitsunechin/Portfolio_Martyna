import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShaderBackground from "@/components/ui/ShaderBackground";

const About = () => {
  return (
    <>
      <Header />
      <ShaderBackground />

      <main className="min-h-screen text-white relative">
        <section className="py-20 px-6 md:px-10 flex flex-col md:flex-row gap-[100px] items-center justify-center max-w-7xl mx-auto relative">
          <div className="relative flex justify-center z-20">
            <div className="rounded-full overflow-hidden aspect-square w-72 md:w-96 relative animate-float">
              <img
                src="/lovable-uploads/Profile-4.png"
                alt="Martyna Bulska"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 relative flex-1 max-w-2xl z-20">
            
            <h1 className="text-3xl md:text-4xl font-bold text-white">About me</h1>

            <p className="text-lg text-white">
              As a <span className="text-bubble-purple font-semibold">UX/UI designer</span>, my passion lies in crafting intuitive and streamlined user experiences. I believe in the power of simplicity to enhance usability and delight users.
            </p>

            <p className="text-lg text-white">
              Beyond design, I'm passionate about trail running, hiking, and traveling—exploring new places and navigating unfamiliar paths. I bring that same sense of curiosity and discovery to UX/UI design, crafting intuitive experiences that guide users effortlessly.
            </p>

            <p className="text-lg text-white">
              Just as a well-marked trail makes a journey smoother, great design should feel natural, clear, and engaging. With a focus on simplicity and problem-solving, I create elegant interfaces that enhance usability and delight users, ensuring every interaction is seamless and meaningful.
            </p>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-10 relative">
          <h2 className="text-3xl font-semibold mb-8 text-white relative z-20 max-w-7xl mx-auto">My approach to design</h2>

          <div className="grid md:grid-cols-3 gap-8 relative z-20 max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
              <h3 className="text-xl font-medium mb-4 text-white">Research-driven</h3>
              <p className="text-white/70">
                I ground my designs in thorough research and data analysis, ensuring solutions that address real user needs and business goals.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
              <h3 className="text-xl font-medium mb-4 text-white">User-centered</h3>
              <p className="text-white/70">
                Users are at the heart of my design process. I constantly test, iterate, and refine based on user feedback and behavior.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
              <h3 className="text-xl font-medium mb-4 text-white">Business-aligned</h3>
              <p className="text-white/70">
                Great design should drive business results. I focus on creating experiences that not only delight users but also achieve measurable outcomes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-10 relative">
          <h2 className="text-3xl font-semibold mb-8 text-white relative z-20 max-w-7xl mx-auto">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 relative z-20 max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
              <h3 className="text-xl font-medium mb-4 text-white">Design Skills</h3>
              <ul className="space-y-2 text-white/80">
                <li>User interface design</li>
                <li>User experience design</li>
                <li>Information architecture</li>
                <li>Wireframing & prototyping</li>
                <li>Visual design</li>
                <li>Design systems</li>
                <li>User research & testing</li>
                <li>Design thinking</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
              <h3 className="text-xl font-medium mb-4 text-white">Tools & Technologies</h3>
              <ul className="space-y-2 text-white/80">
                <li>Figma</li>
                <li>Sketch</li>
                <li>Adobe Creative Suite</li>
                <li>HTML/CSS</li>
                <li>Prototyping tools</li>
                <li>User testing platforms</li>
                <li>Analytics tools</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
