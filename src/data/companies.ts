
export interface Company {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  logoSrc: string;
  users?: string;
}

const companies = [
  {
    id: "jobtalent",
    name: "Job&Talent",
    description: "A fast-growing unicorn startup providing a marketplace to find, manage, and pay essential workers",
    longDescription: "Job&Talent is a digital workforce marketplace that connects temporary workers with companies in need of qualified staff. Operating in 9 countries, it supports companies like DHL, UPS, and Carrefour, managing over 350,000 workers globally.",
    logoSrc: "https://placehold.co/400x200/white/gray?text=Job%26Talent",
    users: "Temporary workers seeking job opportunities and companies needing flexible workforce solutions"
  },
  {
    id: "prograils",
    name: "Prograils",
    description: "A software company with an incredible culture—more like a group of friends constantly learning and growing together",
    longDescription: "Prograils is a great software company with an incredible culture—more like a group of friends constantly learning and growing together. I started as an intern and later transitioned into a junior designer role, shaping my skills in a truly supportive environment.",
    logoSrc: "/lovable-uploads/93167ed5-28ea-4a63-a5d6-22d83545c60b.png",
    users: "Small business owners and managers who operate without a full HR department"
  }
];

export default companies;
