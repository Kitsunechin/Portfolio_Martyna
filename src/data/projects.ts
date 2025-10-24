
export interface Project {
  id: string;
  title: string;
  company: "jobtalent" | "prograils";
  slug: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  images?: string[];
  imageCaptions?: string[];
  role?: string;
  team?: string;
  timeline?: string;
  tags: string[];
  featured: boolean;
  challenge: string;
  solution: string;
  keyImprovements?: string[];
  custom?: {
    title: string;
    description: string;
  }[];
  impact?: string;
  learnings: {
    title: string;
    description: string;
  }[];
  kpis?: {
    metric: string;
    percentage: number;
    description: string;
  }[];
  myRole: string;
  videoEmbedUrl?: string;
  prototypeUrl?: string;
}


const projects: Project[] = [
  {
    id: "humandroid",
    title: "Revamping internal managment system",
    company: "prograils",
    slug: "humadroid",
    shortDescription: "Prioritizing user needs and uncovering the hidden potential of the internal web app.",
    fullDescription: "Educating new jobbers and introducing the onboarding video for users",
    imageSrc: "/lovable-uploads/humandroid.png",
    images: [
      "/lovable-uploads/human1.png",
      "/lovable-uploads/human2.png",
      "/lovable-uploads/human3.png",
    ],
    imageCaptions: [
      "Wireframes for the new design",
      "Design system specifications",
      "Final design for the Humadroid web app"
    ],
    role: "Product Designer",
    team: "Senior Product Designer",
    timeline: "Nov 2021 - Jan 2022",
    tags: ["UI/UX design", "user research", "IA", "design thinking"],
    featured: true,
    challenge: "At Prograils, the employee internal management system, crafted solely by developers, presented several challenges. The system lacked visual consistency, leading to a disjointed user experience. Navigation was cumbersome, and crucial features were missing, compelling stakeholders to resort to spreadsheets for supplementary record-keeping. The existing system failed to deliver the user-friendly interface and functionality required for efficient employee management.",
    myRole: "Collaborated with a Senior Designer to shape the vision for an improved employee management system. I conducted user research with internal stakeholders to identify pain points and missing features. I also benchmarked industry standards through research on similar web apps. Based on these insights, I created wireframes, developed a simple design system, and produced high-fidelity designs for UX/UI improvements.",
    solution: "Our vision for the internal management system addressed the core issues hindering usability and functionality. The redesigned interface boosted enhanced visual coherence, ensuring a seamless and intuitive user experience. We prioritized navigation simplicity, streamlining the user journey and reducing friction points.",
    impact: "The onboarding tour led to a 35% decrease in user churn within the first week of app usage. 80% of users interacted with the onboarding tour.",
    learnings: [
      {
        title: "Understanding the problem",
        description: "Gained a deep understanding of the current design and its challenges."
      },
      {
        title: "User research is the key",
        description: "Conducted user interviews to identify key pain points and opportunities for task automation within the app."
      },
      {
        title: "Visual coherence",
        description: "Collaborated closely with a senior UI designer to ensure stylistic coherence and develop a basic design system for visual consistency."
      }
    ],
    videoEmbedUrl: "https://youtu.be/FbQneVDhevk"
  },
  {
    id: "fill-rate",
    title: "Productivity and fill rate",
    company: "jobtalent",
    slug: "productivity-fill-rate",
    shortDescription: "Providing clients with clearer workforce performance insights.",
    fullDescription: "Providing clients with clearer workforce performance insights.",
    imageSrc: "/lovable-uploads/productivity2.png",
    images: [
      "/lovable-uploads/fillrate1.png",
      "/lovable-uploads/fillrate2.png",
      "/lovable-uploads/productivityv3.png"
    ],
    imageCaptions: [
      "Design explorations and future iterations",
      "Fill rate final design",
      "Productivity final design"
    ],
    role: "Product Designer",
    team: "Product Manager, 6 Mobile App Engineers, 3 Backend Engineer",
    timeline: "Aug 2025 - Oct 2025",
    tags: ["UI/UX design", "user research", "data driven design", "problem solving, wireframing"],
    featured: false,
    challenge: "Enterprise clients rely on Job&Talent not only for staffing but also to understand how effectively their workforce is performing. However, two critical gaps weakened our value proposition: outdated attendance metrics that didn’t fully reflect client needs, and a lack of visibility into productivity data to demonstrate ROI. Clients needed clearer, more accurate performance indicators to make operational and strategic decisions.",
    solution: "We combined two initiatives into a comprehensive data solution for clients: Fill Rate Metric: Shifted from the traditional Attendance Rate (assigned vs. attended workers) to Fill Rate (required vs. attending workers). This gave clients a single, clear KPI that aligned with their staffing needs. The interface was redesigned for accuracy, flexibility, and intuitive management, supporting scenarios like overbooking and dynamic workplace changes. Productivity Dashboards: Introduced in-platform visibility into client productivity metrics. We modeled key support drivers, created ingestion processes for daily/weekly data, and designed dashboards to visualize trends by workplace. The dashboards were tailored for multiple audiences: operational managers tracking daily performance, HR planners correlating engagement with output, and executives needing ROI evidence. Together, these features provided a holistic view of workforce performance — from ensuring roles were filled to proving productivity outcomes.",
    myRole: "As the lead designer, I was responsible for defining and shaping the client-facing data experience. I collaborated with product, engineering, and operations teams to redesign the attendance KPI into a more meaningful Fill Rate metric and to introduce productivity dashboards that visualize team output and key support metrics over time. My focus was on clarity, usability, and ensuring these tools provided immediate business value to different client personas.",
    impact: "The redesigned KPI improved accuracy and client trust by reducing discrepancies between required and assigned workers. It also simplified the user experience and increased adoption of the attendance product. Productivity dashboards closed a major gap in our SaaS value proposition by allowing clients to measure ROI directly in the platform. Within 90 days, we targeted 30% of workplaces uploading productivity data weekly, laying the groundwork for broader adoption and stronger client relationships.",
    learnings: [
      {
        title: "Clarity builds trust:",
        description: "Replacing dual metrics with a single, meaningful KPI increased confidence and usage among enterprise clients."
      },
      {
        title: "One size doesn’t fit all",
        description: "Different audiences — operations managers, HR, and executives — required tailored data views to extract value."
      },
      {
        title: "Accuracy and flexibility go hand in hand",
        description: "Reliable metrics needed to adapt dynamically to real-world changes like overbooking and shifting requirements."
      },
      {
        title: "Value must be visible",
        description: "Embedding productivity data directly in the platform strengthened Job&Talent’s SaaS positioning and helped clients see ROI without external tools."
      },
    ],
    videoEmbedUrl: "https://youtube.com/shorts/rvLfgLTKgKQ?feature=share"
  },
  {
    id: "ai",
    title: "Introducing AI recruiter Clara",
    company: "jobtalent",
    slug: "ai-recruiter",
    shortDescription: "Accelerating and scaling the recruitment process.",
    fullDescription: "Enabling users to easily find jobs with the best transport accessibility",
    imageSrc: "/lovable-uploads/AI-2.png",
    images: [
      "/lovable-uploads/clara1.png",
      "/lovable-uploads/clara2.png",
      "/lovable-uploads/clara3.png",
      "/lovable-uploads/clara4.png"
    ],
    imageCaptions: [
      "Clara introduction bottom sheet",
      "Clara hiring workflow",
      "Clara final design"
    ],
    role: "Product Designer",
    team: "Product Manager, 6 Mobile Engineers, 3 Backend Engineers",
    timeline: "Feb 2024 - June 2024",
    tags: ["UI/UX design", "mobile design", "stakeholders management", "wireframing", "user reaserch", "AI"],
    featured: false,
    challenge: "Job&Talent needed to unify its job application experience across existing markets and introduce an AI-led recruitment process for new and existing markets. The recruitment workflow was heavily human-dependent, inconsistent across regions, and disconnected from the worker app that jobseekers ultimately used to manage shifts and clock in/out. Early engagement with the app was low, delaying activation and impacting retention. Operational costs and time-to-hire were also high due to manual suitability checks.",
    solution: "We designed Clara, an AI-powered recruitment assistant built with HappyRobot. Clara autonomously engages jobseekers via phone interviews, assessing suitability for roles based on predefined criteria. The outcome of each call is surfaced in the recruiter admin tool, where human recruiters make final hiring decisions. The solution included creating a unified job application flow across markets to ensure consistent steps and expectations for users, designing AI-led interviews that felt personal and trustworthy, integrating early app engagement by prompting jobseekers to download and use the worker app during recruitment, enhancing user control over personal information through contact detail verification, and focusing on operational efficiency by balancing call time with quality assessments.",
    myRole: "I served as the main designer on this project, leading the effort to unify the job application experience and integrate Clara — an AI-driven virtual recruitment assistant. I was responsible for designing an experience consistent across markets, integrating AI-led interviews to reduce human effort, ensuring a seamless transition from jobseeker to active worker within the same platform, and collaborating closely with product, engineering, and operations to balance efficiency, compliance, and user trust.",
    impact: "The project reduced recruiter workload by automating suitability checks, lowered cost-to-serve through AI calls priced at $0.20 per minute plus a fixed $2,000 monthly fee, and decreased average time-to-hire, enabling quicker worker activation. It also encouraged jobseekers to adopt the worker app sooner, improving activation speed and long-term retention, and established a recruitment model that could scale across new markets without proportional increases in staff.",
    learnings: [
      {
        title: "Trust is critical",
        description: "Users are more likely to engage with AI when the experience is transparent, respectful, and provides clear next steps."
      },
      {
        title: "Balance automation and human oversight",
        description: "Fully replacing human recruiters wasn't feasible — the hybrid model increased confidence and mitigated risk."
      },
      {
        title: "Design for both operational and user goals",
        description: "Reducing costs means little if user adoption suffers; aligning both was key to success."
      },
      {
        title: "Scalability from the start",
        description: " Designing for multiple markets required anticipating future localization, regulatory, and user behavior differences early in the process."
      }
    ],
    kpis: [
      {
        metric: "ES fullfillment rate",
        percentage: 60,
        description: "Vacancies fullfilled by Clara"
      },
      {
        metric: "THG client: Yoy of new starters",
        percentage: 68,
        description: "New starters over a 4-week peak bild"
      }
    ],
    prototypeUrl: "https://v0.app/chat/ai-recruiter-prototype-jnlJpE94VgB?f=1&b=b_EJBOnob652q"
  },
  {
    id: "guided-tour",
    title: "Guided tour",
    company: "jobtalent",
    slug: "guided-tour",
    shortDescription: "Educating new jobbers and introducing the onboarding video for users",
    fullDescription: "Educating new jobbers and introducing the onboarding video for users",
    imageSrc: "/lovable-uploads/guided.png",
    images: [
      "/lovable-uploads/guided1.png",
      "/lovable-uploads/guided2.png",
      "/lovable-uploads/guided3.png"
    ],
    imageCaptions: [
      "Guided tours competitive analysis",
      "Popover element for design system",
      "Guided tour final design"
    ],
    role: "Product Designer",
    team: "Product Manager, UX/UI, App, 6 Mobile App engineers, 3 backend engineer",
    timeline: "Sept 2023 - Nov 2024",
    tags: ["UI/UX design", "user research", "IA", "design thinking"],
    featured: true,
    challenge: "The J&T app faced significant challenges with onboarding workers. Designed to help workers organize their work schedules and track work time, the app heavily relied on off-app onboarding conducted by J&T representatives (on-site managers). However, as the app was introduced to more locations, we noticed a substantial drop in our engagement metrics. Specifically, sites with J&T support had 83% of workers responding to their shifts, compared to only 73% at sites without support. This disparity highlighted the need for an effective in-app onboarding solution to ensure consistent user engagement and successful app adoption.",
    myRole: "I led the work on designing the onboarding flow and improving user engagement. I've carried out analysis of other apps and the possible solutions for implementing the guided tour for our product as well as carrie d out the audit of unused onboarding elements currently/inconsistently implemented on the app that were used to explain some of the app's features. The aim was to provide the logic behind the guided's tour component and the component's documentation for the design system, so that other designers working on different parts of the app could easily implement it. ",
    solution: "I proposed introducing contextual tooltips that are triggered when users open specific tabs. These tooltips explain the app’s value proposition, focusing on enhancing the worker’s experience in managing their shifts and clocking in on time. This approach aimed to highlight the positive implications on the worker's metrics, ensuring users understand the benefits and importance of these features right from the start.",
    impact: "Following the launch of the guided tour for workers, we observed a remarkable improvement in conversion rates, rising from approximately 60% to 90% compared to the previous single-feature tour. Furthermore, for sites lacking J&T support, the response rate to assigned shifts increased from 73% to a steady 80%. This demonstrates the effectiveness of the new guided tour in enhancing user engagement and operational efficiency.",
    custom: [
      {
        title:"Component Definition",
        description:"I began by defining the anatomy of the popover within the design system. This included the trigger element, the popover container, header, content area, navigation controls, and the arrow pointer."
      },
      {
        title:"Animation Integration",
        description:"To make that the user experience was more engaging, I incorporated subtle animations. For this I used Jitter to create basic interactions with different components and exported them as Lottie files for development."
      },
      {
        title:"Testing and Optimization",
        description:"The component was tested for responsiveness and accessibility. I ensured that the popover functioned correctly on various devices and screen sizes."
      }

    ],
    learnings: [
      {
        title: "User education drives behavior change",
        description: "Tailored, team-specific guided tours helped workers better understand key features like shift management and clock-ins—boosting engagement by aligning onboarding with real-world workflows."
      },
      {
        title: "Consistency strengthens cross-team collaboration",
        description: "Clearly defined UI components and interaction patterns ensured alignment with the design system, reducing friction and promoting reuse across distributed product teams."
      },
      {
        title: "Data should guide product decisions",
        description: "Introducing new features based on user behavior—like the role of onsite managers in promoting app usage—led to more relevant, effective solutions."
      },
      {
        title: "Ground-level impact can influence top-down priorities",
        description: "Sites with strong onsite support consistently outperformed others, offering proof that user-facing improvements deserve space on a roadmap traditionally driven by business goals."
      }
    ],
    kpis: [
      {
        metric: "Conversion rate",
        percentage: 90,
        description: "90% of new and existing users engaged with the onboarding tour"
      },
      {
        metric: "Tour completion rate",
        percentage: 80,
        description: "the response rate to assigned shifts increased from 73% to a steady 80%."
      }
    ],
    videoEmbedUrl: "https://youtube.com/shorts/DWWtBRe7qiE?feature=share"
  },
  {
    id: "shift-satisfaction",
    title: "Shift satisfaction",
    company: "jobtalent",
    slug: "shift-satisfaction",
    shortDescription: "Giving Workers a Voice: Turning Shifts Into a Better Experience",
    fullDescription: "Giving Workers a Voice: Turning Shifts Into a Better Experience",
    imageSrc: "/lovable-uploads/satisfaction.png",
    images: [
      "/lovable-uploads/satisfaction1.png",
      "/lovable-uploads/satisfaction2.png",
      "/lovable-uploads/satisfaction3.png"
    ],
    imageCaptions: [
      "User interview output",
      "Final design for user rating",
      "Final design for shift ratings"
    ],
    role: "Product Designer",
    team: "Product Manager, 6 Mobile App engineers, 3 backend engineer",
    timeline: "Apr 2023 - May 2023",
    tags: ["UI/UX design", "user research", "B2C", "iterative design"],
    featured: true,
    challenge: "Supervisors had no clear way to understand how workers felt about their shifts, making it difficult to measure worker sentiment and introduce any improvements. At the same time, workers lacked a way to share their experiences. This created an imbalance—workers felt unheard, and supervisors missed valuable insights that could improve the overall work environment. While workers were already asked to provide a simple satisfaction score after their shifts, the lack of qualitative feedback meant there was no actionable data to drive improvements. A more structured feedback system was needed to foster transparency and trust while ensuring that both workers and supervisors had a meaningful way to contribute to workplace improvement",
    solution: "To keep things fast and frustration-free, I designed a smiley-based rating system that let workers share their shift experience in seconds. Here's how it worked: Right after clocking out, workers could quickly select a happy, neutral, or sad face to rate their shift. If they chose neutral or sad, they could add a short comment explaining what went wrong. They could also leave feedback later through the shift details page if they needed more time to think about it. To make sure their voices led to real change, I worked with the B2B sister app team to add a worker rating feature for supervisors. This created a two-way feedback system—workers could rate their shifts, and supervisors could improve based on real insights.",
    myRole: "I led the design and research efforts to create a structured yet effortless feedback system that would empower workers while providing supervisors with actionable insights. To achieve this, I conducted user research through surveys to understand worker preferences for giving feedback and explored best practices for in-app feedback mechanisms. I then designed a seamless shift satisfaction feature that fit naturally into the worker’s journey, ensuring it was intuitive and easy to use. Throughout the process, I collaborated with cross-functional teams, including developers and the B2B sister app designer, to maintain consistency across platforms. By taking a research-driven and user-centered approach, I was able to create a feedback experience that balanced simplicity with meaningful insights.",
    impact: "The new feedback system immediately made a difference: 40% of workers now leave shift feedback as soon as they clock out. 10% more provide feedback later through shift details. Supervisors now have real-time data on workplace issues, helping them fix problems faster and improve conditions for future shifts. Workers finally have a say, making them feel valued and heard.",
    learnings: [
      {
        title: "Timing is everything in feedback collection",
        description: "Prompting users for feedback immediately after a shift led to significantly higher response rates, showing that relevance and timing are key to capturing authentic insights."
      },
      {
        title: "Cross-team alignment enhances the end-to-end experience",
        description: "Collaborating closely with B2B team designers ensured consistency and cohesion across worker and supervisor interfaces, creating a unified, seamless experience."
      },
       {
        title: "Micro-interactions can guide and delight",
        description: "Designing custom Lottie animations in Jitter made complex flows more engaging and intuitive—turning utility into a moment of clarity and delight."
      }
    ],
    kpis: [
      {
        metric: "Feature adoption on clock out",
        percentage: 40,
        description: "40% of workers now leave shift feedback as soon as they clock out."
      },
      {
        metric: "Feature adoption after returning to the app",
        percentage: 10,
        description: "10% more provide feedback later through shift details."
      }
    ],
    videoEmbedUrl: "https://youtube.com/shorts/2nPhMaB7JwA?feature=share"
  },
  {
    id: "time-off",
    title: "Requesting time off",
    company: "jobtalent",
    slug: "time-off",
    shortDescription: "Providing transparency for workers and supervisors in shift schedules",
    fullDescription: "Providing transparency for workers and supervisors in shift schedules",
    imageSrc: "/lovable-uploads/time off.png",
    images: [
      "/lovable-uploads/timeoff1.png",
      "/lovable-uploads/timeoff2.png"
    ],
    imageCaptions: [
      "Time off user flows",
      "Time off final design"
    ],
    role: "Product Designer",
    team: "Product, 6 Mobile App engineers, 3 backend engineer",
    timeline: "Jun 2024 - Aug 2024",
    tags: ["UI/UX design", "design thinking", "B2C", "mobile design"],
    featured: true,
    challenge: "Workers had no structured way to report their availability, leading to scheduling conflicts and unfair penalties. The existing system was fragmented—workers who couldn’t attend a shift were penalized, even if their absence was justified. Meanwhile, in some markets like Spain, a legacy leave request system required workers to submit documents to get paid, but this process wasn’t reflected in shift scheduling in the supervisor app. The result was missed shifts, frustrated workers, and operational inefficiencies. To solve this, we needed a clear, fair, and connected absence reporting system that would allow workers to proactively report time off, ensure shifts weren’t assigned when they weren’t available, and create transparency for both workers and supervisors",
    solution: "The new absence reporting system allowed workers to proactively report time off and have it reflected in their calendars and shift assignments. To ensure fairness, I also linked the system to attendance metrics, ensuring that workers weren't penalized for justified absences.",
    keyImprovements: [
      "A redesigned absence reporting flow, allowing workers to submit time off in advance.",
      "Integration with worker calendars, so reported absences were visible and accounted for in shift scheduling.",
      "A refined cannot attend flow, ensuring it was used only for last-minute emergencies while proactive absences were managed separately.",
      "Connection between absence reporting and legacy systems, so workers in markets like Spain could still submit necessary documentation without disrupting their workflow."
    ],
    myRole: "I led the design of a seamless absence reporting system that balanced the needs of workers, operations teams, and supervisors while aligning legacy systems with a streamlined approach. After analyzing the existing process, I identified key gaps in tracking and communication, particularly in Spain, where legacy leave requests were essential. To avoid confusion, I introduced two distinct flows: Time off for blocking calendars and Time off documents for submitting leave paperwork. This allowed legacy users to continue their process while ensuring new users had a simplified experience. By integrating the system into both the Workers and Supervisors apps, we created a transparent, closed-loop system where workers could manage availability, and supervisors could make informed scheduling decisions.",
    impact: "The feature was well-received, with 71% adoption in markets without a legacy system and 61% adoption in legacy markets. This improvement significantly reduced scheduling conflicts and unfair penalties, making shift assignment more efficient for supervisors and more predictable for workers. Supervisors now had full visibility into worker availability, ensuring they only assigned shifts to available workers. Meanwhile, workers no longer faced unjust penalties for taking justified time off, leading to a fairer and more transparent system.",
    learnings: [
      {
        title: "Balancing new feature with existing flows.",
        description: "carefully structuring the transition, we avoided disrupting users who depended on legacy processes while introducing a scalable, fair system for absence reporting."
      },
      {
        title: "Clear terminology is crucial",
        description: "Distinguishing between time off and documentation prevented confusion in markets with legacy systems."
      },
      {
        title: "Aligning cross-functional teams is essential",
        description: "Ensuring consistency across the Workers app, Supervisors app, and different country regulations required extensive coordination."
      },
      {
        title: "Fairness drives adoption ",
        description: "Workers were more willing to engage with the feature once they saw it helped prevent unfair shift assignments and penalties."
      }
    ],
    kpis: [
      {
        metric: "Time-off submission increase",
        percentage: 50,
        description: "Time-off submissions increased by 50% after redesign."
      },
      {
        metric: "Approval time decrease",
        percentage: 40,
        description: "Supervisor approval time decreased by 40%."
      }
    ],
    videoEmbedUrl: "https://youtube.com/shorts/caxKrSkh37Q?feature=share"
  },
  {
    id: "web-redesign",
    title: "Web redesign",
    company: "jobtalent",
    slug: "web-redesign",
    shortDescription: "Enabling users to seamlessly transition from web to mobile while uplisting",
    fullDescription: "Enabling users to seamlessly transition from web to mobile while uplisting",
    imageSrc: "/lovable-uploads/webred.png",
    images: [
      "/lovable-uploads/redesign1.png",
      "/lovable-uploads/redesign2.png",
      "/lovable-uploads/redesign3.png"
    ],
    imageCaptions: [
      "Current design analysis",
      "Design explorations",
      "The final design"
    ],
    role: "Product Designer",
    team: "Product Manager, 6 Mobile App engineers, 1 Web engineer",
    timeline: "Oct 2023 - Dec 2023",
    tags: ["web design", "responsive design", "cross-platform", "user flows"],
    featured: false,
    challenge: "The design challenge was that the website's job listings didn't accurately reflect the available vacancies on the app, creating a disconnect between the two platforms. This mismatch was problematic, as 25% of product traffic comes from the web, leading to a subpar experience for job seekers.",
    solution: "To enhance the website's effectiveness as a traffic driver for our app, I synchronized the job listings across both platforms and aligned the visual language for consistency. I redesigned the website's UI to reflect the app's design, creating reusable components. Additionally, I introduced QR codes to allow users to easily download the app, enabling a seamless transition from browsing job offers on the website to applying for them within the app.",
    myRole: "I led the redesign of the website's UI, removing unnecessary registration walls and outdated application forms that duplicated steps users had to complete in the app. To streamline the process, I introduced QR codes and deep linking, allowing users to quickly navigate to the relevant job application within the app. I also prioritized a mobile-first approach, addressing the lack of mobile-friendly features like filtering, as the majority of our traffic came from mobile devices.",
    impact: "The 2023 web update led to an increase in job applications, rising from 12.3% the previous year to 14.6%. This 2.3% year-over-year growth demonstrates the positive impact of the update, especially notable during a traditionally low season.",
    learnings: [
      {
        title: "Understanding website usage data and traffic sources was crucial.",
        description: "While the website had potential to drive more users to the app, most traffic came from mobile users, making it essential to prioritize accessibility for this group."
      },
      {
        title: "Close collaboration with the front-end developer",
        description: "Collaboration was necessary to ensure that the new components and their functionality aligned with the mobile app, as the current version lacked a defined design system and had outdated styles."
      }
    ],
    kpis: [
      {
        metric: "Cross-platform usage",
        percentage: 40,
        description: "Cross-platform usage increased by 40% due to the redesign."
      },
      {
        metric: "Increase in job applications",
        percentage: 14.6,
        description: "Job applications rose from 12.3% the previous year to 14.6%."
      }
    ],
    videoEmbedUrl: "https://youtu.be/U7qgSy5kQuU"
  },
  
];

export default projects;
