
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShaderBackground from "@/components/ui/ShaderBackground";

const CV = () => {
  return (
    <>
      <Header />
      <ShaderBackground />

      <main className="min-h-screen py-16 px-6 md:px-10 max-w-5xl mx-auto relative">
        <h1 className="text-4xl font-bold mb-8 text-white">Martyna Bulska</h1>
        <h2 className="text-2xl font-medium text-gray-300 mb-6">Product Designer</h2>

        <p className="text-lg mb-10 text-white">
          Product Designer with extensive experience in web and mobile design for fast-growth companies and agencies. My research background and analytical mindset drive data-driven solutions, while my creative approach ensures user-centric, engaging experiences. This blend of logic and design thinking makes me a valuable asset to any product team. I work closely with developers, content teams, and stakeholders to create effective, feasible designs, while contributing to design systems that enhance efficiency.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Experience</h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-white">Job&Talent, Madrid - Spain</h4>
                      <p className="text-gray-300">
                        Job&Talent is a fast-growing unicorn startup providing a marketplace to find, manage, and pay essential workers. Operating in 9 countries, it supports companies like DHL, UPS, and Cabify, managing over 350,669 workers globally.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <h5 className="font-semibold text-white">Product Designer</h5>
                      <span className="text-gray-300">Sept 2024 - Present</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <h5 className="font-semibold text-white">Junior Product Designer</h5>
                      <span className="text-gray-300">June 2022 - Sept 2024</span>
                    </div>
                    <p className="mb-3 text-white">
                      I'm a designer on the worker app, contributing to the company's transition from an operations-led to a product-led company. I have worked across all stages of the product lifecycle, including job applications, global onboarding, shift management, and worker engagement and retention.
                    </p>
                    
                    <div className="mb-6">
                      <h6 className="font-semibold mb-2 text-white">Impactful projects:</h6>
                      <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Designed gamification solutions to encourage key worker actions, such as responding to shifts and clocking in on time. This led to a 35% global increase in clocking rates within six months. Conducted user interviews and competitive analysis to refine the gamification strategy.</li>
                        <li>Increased shift acceptance rates by 19% by introducing a guided feature tour, boosting user adoption and mobile app adoption.</li>
                        <li>Scaled design solutions by integrating the feature tour into the design system in Figma, enabling other designers to work more efficiently.</li>
                        <li>Increased job applications by 12% by redesigning the job search experience. Applied information architecture principles to improve filters and job categories, making the search process more intuitive.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-white">Prograils, Poland - Poznan</h4>
                      <p className="text-gray-300">
                        Prograils is a tech consulting specializing in mobile apps, websites, and SaaS platforms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-semibold text-white">UI/UX Intern</h5>
                      <span className="text-gray-300">Nov 2021 - Dec 2021</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <h5 className="font-semibold text-white">Junior UI/UX Designer</h5>
                      <span className="text-gray-300">Jan 2022 - May 2022</span>
                    </div>
                    <p className="mb-3 text-white">
                      As a designer, I led end-to-end design projects for a real estate website, an HR management platform, and an employee management web application.
                    </p>

                    <div>
                      <h6 className="font-semibold mb-2 text-white">Impactful projects:</h6>
                      <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Enhanced the home search process and data management across multiple platforms by applying UX methodologies. Designed wireframes, prototypes, and mockups that were developed into functional, user-friendly solutions.</li>
                        <li>Defined the design vision for an internal employee management web application. Conducted stakeholder interviews, performed competitive analysis, and aligned user needs with business objectives.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-white">KennedyFitch, Switzerland - Zurich</h4>
                      <p className="text-gray-300">
                        KennedyFitch is an HR consulting firm specializing in executive search for innovation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-semibold text-white">Research Manager</h5>
                      <span className="text-gray-300">Sept 2017 - June 2021</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                      <li>Led a team to identify and secure top executive talent, providing market insights and high-quality reporting to support clients' leadership needs.</li>
                      <li>Specialized in sourcing and attracting senior executives to meet organizations' strategic leadership goals.</li>
                      <li>Drove efficiencies in company trends, market trends, and talent data.</li>
                      <li>Managed a team, played intelligence and talent mapping, ensuring clients received high-quality reporting and access to the best executive candidates.</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-white">McKinsey, United Kingdom - London</h4>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-semibold text-white">Junior Talent Research Analyst</h5>
                      <span className="text-gray-300">Sept 2014 - July 2017</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                      <li>Conducted in-depth research and analysis to identify potential executive candidates across various industries and disciplines.</li>
                      <li>Provided operational candidate support to streamline team processes and enhance talent acquisition strategies.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div>
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white">Collegium Da Vinci</h4>
                  <p className="text-white">Post graduate studies in Design for Mobile Apps | 2017</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Poznan University of Economics</h4>
                  <p className="text-white">MA - English Development | 2015</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Adam Mickiewicz University</h4>
                  <p className="text-white">MA - English Studies | 2012</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Skills</h3>

              <ul className="space-y-1 text-white">
                <li>User interface design</li>
                <li>Journey mapping</li>
                <li>Design thinking</li>
                <li>User-centered design</li>
                <li>Prototyping</li>
                <li>Wireframes</li>
                <li>Usability solutions</li>
                <li>User flows</li>
                <li>Usability testing</li>
                <li>User research</li>
                <li>Competitor analysis</li>
                <li>Problem solving</li>
                <li>HTML, CSS</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 text-white">Software and applications</h3>

              <ul className="space-y-1 text-white">
                <li>Sketch</li>
                <li>Figma</li>
                <li>Framer</li>
                <li>Photoshop</li>
              </ul>
            </section>
          </div>
        </div>
        
        <div className="mt-10 flex justify-between items-center">
          <div>
            <p className="text-gray-300">martyna.bulska@gmail.com • +48-555-1234567</p>
          </div>
          <div className="text-right">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.716 0 0 6.716 0 15C0 23.284 6.716 30 15 30C23.284 30 30 23.284 30 15C30 6.716 23.284 0 15 0Z" fill="#9b87f5"/>
              <path d="M15 8C13.9391 8 13.2822 8.5 12.5 9C11.7178 9.5 10 12 10 12V19.5C10 19.7761 10.2239 20 10.5 20H12C12.2761 20 12.5 19.7761 12.5 19.5V12.5C12.5 12.5 13.5 11.5 14 11.5C14.5 11.5 15.5 12.5 15.5 12.5V19.5C15.5 19.7761 15.7239 20 16 20H17.5C17.7761 20 18 19.7761 18 19.5V12.5C18 12.5 19 11.5 19.5 11.5C20 11.5 21 12.5 21 12.5V19.5C21 19.7761 21.2239 20 21.5 20H23C23.2761 20 23.5 19.7761 23.5 19.5V12C23.5 12 21.7822 9.5 21 9C20.2178 8.5 19.5609 8 18.5 8C17.5 8 16.7289 9 16 9C15.2711 9 16 8 15 8Z" fill="white"/>
            </svg>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CV;
