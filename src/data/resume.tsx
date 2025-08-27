import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileDown } from "lucide-react";

export const DATA = {
  name: "Boldchingis Portfolio ",
  initials: "BB",
  url: "https://github.com/Boldchingis",
  location: "Mongolia",
  locationLink: "https://www.google.com/maps/place/mongolia",
  description:
    " I love building things from scratch. Very active on Github.",
  summary:
    "I'm a full-stack developer with a focus on front-end development. I care about building smooth, user-friendly interfaces that are easy to navigate. I enjoy working with modern front-end frameworks to bring ideas to life quickly and effectively.",
  avatarUrl: "/profile.png",
  skills: [
    "Linux",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Monorepo",
    "Node.js",
    "Express.js",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Prisma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Boldchingis-resume.pdf", icon: FileDown, label: "Resume" },
  ],
  contact: {
    email: "bboldchingis@gmail.com",
    tel: "+97699498619",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Boldchingis",
        icon: Icons.github,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/boldchingis_/",
        icon: Icons.instagram,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/ObludaRaikou",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bboldchingis@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zevtab LLC",
      href: "#",
      badges: [],
      location: "Mongolia",
      title: "Frontend Developer",
      logoUrl: "/zevtabs.svg",
      start: "2025 (May)",
      end: "2025 (June)",
      description:
        "Worked around 70 hours as a frontend developer on an office rental website. Developed user-friendly interfaces using React.js, JavaScript, REST API integration, and Tailwind CSS to create smooth and responsive web applications.",
    },
    {
      company: "Pinecone Studio",
      badges: [],
      href: "https://pinecone-studio.github.io/",
      location: "Mongolia",
      title: "Software Engineering Intern",
      logoUrl: "/pinecone.png",
      start: "2025 (April)",
      end: "2025 (June)",
      description:
        "Completed a 2-month internship focused on learning monorepo architecture and practicing testing methodologies. Gained experience with ESLint, unit testing, Cypress, and Jest while working on restaurant website projects using modern technologies like TypeScript, Next.js, GraphQL, and MongoDB.",
    },
  ],
  education: [
    {
      school: "Pinecone Academy",
      href: "https://pinecone.mn/",
      degree: "Full-Stack Web Development",
      logoUrl: "/pinecone.png",
      start: "2024 (September)",
      end: "2025 (April)",
    },
  ],
  projects: [
    {
      title: "Rently | Office Rental Website",
      href: "http://zevtabs.mn:3001/",
      dates: "2024",
      active: true,
      description:
        "I worked around 70 hours as a frontend developer for Zevtab LLC on this office rental website. Built responsive and user-friendly interfaces with smooth navigation.",
      technologies: [
        "React.js",
        "JavaScript",
        "REST API",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "http://zevtabs.mn:3001/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Restaurant Website (Pinecone Intern)",
      href: "https://restaurant-frontend-blond.vercel.app",
      dates: "2023 (2-month internship)",
      active: true,
      description:
        "Built during a 2-month internship at Pinecone. I learned monorepo architecture and practiced testing with ESLint, unit tests, Cypress, and Jest.",
      technologies: [
        "Monorepo",
        "ESLint",
        "Unit Testing",
        "Cypress",
        "Jest",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://restaurant-frontend-blond.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pinecone-studio/pinecone-intern-monorepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "E-commerce Website",
      href: "https://pineshop.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A modern e-commerce site with smooth UI/UX, responsive design, and real money payment integration. Features advanced animations and search functionality.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "Algolia",
        "MongoDB",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://pineshop.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pinecone-2a/blackArch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Buy Me a Coffee Clone",
      href: "https://team-ctrl-z-frontend.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "My first team project—a clone of 'Buy Me a Coffee' without real payment integration. Built with modern web technologies and collaborative development practices.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion",
        "SQL",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://team-ctrl-z-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pinecone-2a/team-ctrlZ-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Movie App",
      href: "https://movie-app-three-opal-51.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A movie app with search, filters, and detailed info. Features a clean, modern design with API integration for movie data.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "API Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://movie-app-three-opal-51.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Boldchingis/movie-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Weather App",
      href: "https://weather-app-steel-five-77.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A real-time weather app showing current conditions, forecasts, and location-based data with a clean and intuitive interface.",
      technologies: [
        "React",
        "JavaScript",
        "Weather API",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-app-steel-five-77.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Boldchingis/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
  ],
  hackathons: [],
} as const;
