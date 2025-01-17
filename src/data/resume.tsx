import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ijon Kushta",
  initials: "IK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack Developer. I love building things that help people. Aquired my skillset just from YouTube and doing projects by myself.",
  summary:
    "I am a high school student by day and a full stack engineer by night. 3 years ago I discovered coding and the endless possibilities it has to offer. Last year after starting high school I went all in into programming and haven't stopped since. I am now a full stack web developer. By working on projects non-stop I learned how to be very proficient at web developement and also landed an internship during the summer, which is still ongoing.",
  avatarUrl: "https://avatars.githubusercontent.com/u/87646169?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Nest.js",
    "Postgres",
    "Supabase",
    "Framer Motion",
    "MongoDB",
    "TailwindCSS",
    "Prisma",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jon.kushta@gmail.com",
    tel: "+355688265034",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/codify4",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/k_ijon4/",
        icon: Icons.instagram,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ijon-kushta-320b6831b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ijon_k4",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jon.kushta@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hello Albania",
      href: "https://www.linkedin.com/company/helloalbania/",
      badges: [],
      location: "Remote",
      title: "Intern Frontend Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGm1JDuFrwvXA/company-logo_200_200/company-logo_200_200/0/1673136222435/helloalbania_logo?e=1740614400&v=beta&t=INfIw_IQeZ6EHpo_KwQvsvCIjyimEa0WqBBXJTPntEM",
      start: "June 2024",
      end: "Ongoing",
      description:
        "I work as a frontend developer implementing UI components and features for booking trips by boat or by car. Helping to build a seamless user experience for travelers.",
    },
  ],
  education: [
    {
      school: "Herman Gmeiner High School",
      href: "https://www.instagram.com/shkolla_hermann_gmeiner/?hl=en",
      degree: "Currently Second Year",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59mGjXsQqlYQO-FIYIcN1hlZIYLeEJy3Utw&s",
      start: "2023",
      end: "Ongoing",
    },
  ],
  projects: [
    {
      title: "Trackr.gl",
      href: "https://trackr-gl.framer.website/",
      dates: "July 2024",
      active: true,
      description:
        "Track your habits easily with Trackr.gl. Create a habit and track your progress with the seemless integration of dayly squares that you have to check everyday you complete that habit.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Neon Serverless",
        "DrizzleORM",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trackr-gl.framer.website/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/habit.png",
      video:
        "",
    },
    {
      title: "Foundr",
      href: "https://foundr.vercel.app/",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Create a highly customizable single-page website to share your journey as a foundr.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleORM",
        "Neon Serverless",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://foundr.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/foundr.png",
      video: "",
    },
    {
      title: "Flow",
      href: "https://flow-study.vercel.app/",
      dates: "November 2024 - Present",
      active: true,
      description:
        "Create structured notes, master your materials, and achieve better results faster with Flow, your AI-powered study companion. (Work in progress)",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Supabase",
        "LemonSqueezy",
        "MistralAI"      
      ],
      links: [
        {
          type: "Website",
          href: "https://flow-study.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/flow.png",
      video: "",
    },
    {
      title: "Portfolio 1.0",
      href: "https://ijon-kushta.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
        "A personal portfolio I made when I was first getting started to test out my skills. This is one of the first projects I made public.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "AcenernityUI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://ijon-kushta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfol.png",
      video: "",
    },
  ],
  hackathons: [
    
  ],
} as const;
