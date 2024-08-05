import { Project } from "../dashboard/_components/Projects";

export const WEB_APPS: Project[] = [
  {
    title: "RC-TV",
    tags: ["Typescript","NextJS", "React", "Nodejs", "PostgreSQL","Prisma","tRPC"],
    description: "Built a responsive and intuitive user interface for RCTV's streaming platform using Next.js, Tailwind CSS, and React. Developed and integrated scalable APIs with TRPC, and managed complex database operations using Prisma for seamless content delivery.",
    thumbnail: "/rctv.png",
    demo: "https://rctv.in",
    repo: "https://github.com/madhenkumar",
  },
 
  {
    title: "RC-Server",
    repo: "https://github.com/madhenkumar",
    demo: "https://rcserver.vercel.app/home",
    thumbnail: "/rcserver.png",
        description:
      "Developed a comprehensive end-to-end solution for RC-server, including a robust backend with TRPC and Prisma for scalable API communication and database management. Delivered a complete platform from frontend to backend and deployed it using Vercel for efficient and scalable hosting.",
    tags: ["Next.js", "Next Auth", "Prisma", "Docker", "Chakra UI"],
  },
  {
    title: "Lawyer App",
    repo: "https://github.com/madhenkumar",
    demo: "https://lawyerapp-azure.vercel.app/",
    thumbnail: "/lawyerapp.png",
        description:
      "Built a landing page for a soon-to-launch advocate agency, incorporating EmailJS to streamline client communications.",
    tags: ["Typescript", "React", "Redux", "Nodejs", "PostgreSQL","Prisma"],
  },
  {
    title: "SRP Tourism",
    repo: "https://github.com/madhenkumar",
    thumbnail: "/srp.png",
        description:
      "Built the backend for SRP Tourism's existing front-end-only website using Next.js, Tailwind CSS, TRPC, React, and Prisma. Enabled clients to submit and share reviews, enhancing user interaction and feedback on the platform.",
    tags: ["Typescript", "React", "Nodejs", "MongoDB", "Socket"],
  },
  ] as const;
  
  export const TOOLS = [
    {
      title: "states-nepal",
      repo: "https://github.com/adarshaacharya/states-nepal",
      external: "https://www.npmjs.com/package/states-nepal",
      description:
        "npm package to get the dataset about different administrative division of Nepal.",
      techs: ["npm-package"],
    },
    {
      title: "aaja (आज)",
      repo: "https://github.com/adarshaacharya/aaja",
      external: "https://www.npmjs.com/package/aaja",
      description:
        "Cli tool to get today's nepali date, tithi, public events and current time.",
      techs: ["npm-package"],
    },
    {
      title: "ApiHub",
      repo: "https://github.com/adarshaacharya/ApiHub",
      external:
        "https://marketplace.visualstudio.com/items?itemName=AadarshaAcharya.api-hub",
      description:
        "VS Code extension to get free third party api url on different categories.",
      techs: ["vscode-extension"],
    },
    {
      title: "shitcommits",
      repo: "https://github.com/adarshaacharya/shitcommits",
      external: "https://www.npmjs.com/package/shitcommits",
      description: "Cli tool to make git commits with not-so perfect messges.",
      techs: ["npm-package"],
    },
  ] as const;