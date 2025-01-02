import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

// export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
//   {
//     index: 0,
//     title: "Json Tree",
//     href: "/projects",
//     tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
//     image: {
//       LIGHT: "/images/projects/jsontreeLight.webp",
//       DARK: "/images/projects/jsontreeDark.webp",
//     },
//   },
//   {
//     index: 1,
//     title: "Many Games",
//     href: "/projects",
//     tags: [
//       "Reactjs",
//       "Tailwindcss",
//       "Scss",
//       "Vite",
//       "React-router-dom",
//       "Redux",
//       "Vercel",
//     ],
//     image: {
//       LIGHT: "/images/projects/manyGamesLight.webp",
//       DARK: "/images/projects/manyGamesDark.webp",
//     },
//   },
//   {
//     index: 2,
//     title: "Kanban",
//     href: "/projects",
//     tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
//     image: {
//       LIGHT: "/images/projects/kanbanLight.webp",
//       DARK: "/images/projects/kanbanDark.webp",
//     },
//   },
// ];

// export const PROJECTS_CARD: ProjectCardProps[] = [
//   {
//     name: "Json tree",
//     favicon: "/images/projects/logos/jsontree.ico",
//     imageUrl: [
//       "/images/projects/jsontreeLight.webp",
//       "/images/projects/jsontreeDark.webp",
//     ],
//     description:
//       "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
//     sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
//     liveWebsiteHref: "https://jsontree.vercel.app",
//   },
//   {
//     name: "Kanban app",
//     favicon: "/images/projects/logos/kanban.ico",
//     imageUrl: [
//       "/images/projects/kanbanLight.webp",
//       "/images/projects/kanbanDark.webp",
//       "/images/projects/kanbanCardLight.webp",
//     ],
//     description:
//       "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
//     sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
//     liveWebsiteHref: "https://kannban-board.vercel.app",
//   },
//   {
//     name: "Many Games",
//     favicon: "/images/projects/logos/manygames.ico",
//     imageUrl: [
//       "/images/projects/manyGamesDark.webp",
//       "/images/projects/manyGamesLight.webp",
//       "/images/projects/manyGames2048.webp",
//       "/images/projects/manyGamesPuzzle.webp",
//       "/images/projects/manyGamesWordle.webp",
//     ],
//     description:
//       "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
//     sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
//     liveWebsiteHref: "https://manygames.vercel.app",
//   },
//   {
//     name: "My portfolio",
//     favicon: "/favicon.ico",
//     imageUrl: [
//       "/images/projects/portfolioDark.webp",
//       "/images/projects/portfolioLight.webp",
//     ],
//     description:
//       "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
//     sourceCodeHref: "https://github.com/SaurabhKumar171/saurabhkumar-v2",
//     liveWebsiteHref: siteMetadata.siteUrl,
//   },
//   {
//     name: "Covid Tracker",
//     favicon: "/images/projects/logos/covidtracker.ico",
//     imageUrl: [
//       "/images/projects/covidTracker.webp",
//       "/images/projects/covidTrackerMap.webp",
//       "/images/projects/covidTrackerTable.webp",
//     ],
//     description:
//       "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
//     sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
//     liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
//   },
//   {
//     name: "Stock predictor",
//     favicon: "/images/projects/logos/stockpredictor.ico",
//     imageUrl: [
//       "/images/projects/stockPredictor.webp",
//       "/images/projects/stockPredictorCandleChart.webp",
//       "/images/projects/stockPredictorCompareChart.webp",
//       "/images/projects/stockPredictorLineChart.webp",
//     ],
//     description:
//       "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
//     sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
//   },
// ];

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "StudyNotion",
    href: "/projects",
    tags: ["MERN Stack", "Redux", "TailwindCSS", "MongoDB", "NodeJS", "Vercel"],
    image: {
      LIGHT: "/images/projects/studynotionLight.webp",
      DARK: "/images/projects/studynotionDark.webp",
    },
  },
  {
    index: 1,
    title: "Store It",
    href: "/projects",
    tags: ["ReactJS", "Firebase", "TailwindCSS", "Material UI", "Vercel"],
    image: {
      LIGHT: "/images/projects/storeItLight.webp",
      DARK: "/images/projects/storeItDark.webp",
    },
  },
  {
    index: 2,
    title: "Portfolio",
    href: "/projects",
    tags: ["NextJS", "TailwindCSS", "Framer Motion", "Vercel"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "StudyNotion",
    favicon: "/images/projects/logos/studynotion.ico",
    imageUrl: [
      "/images/projects/studynotionLight.webp",
      "/images/projects/studynotionDark.webp",
    ],
    description:
      "An advanced Ed-Tech platform built with the MERN stack. It facilitates the creation, consumption, and rating of educational content, supporting thousands of concurrent users. Features include content management, user ratings, and global accessibility for learners and instructors.",
    sourceCodeHref: "https://github.com/SaurabhKumar171/studyNotion",
    liveWebsiteHref: "https://study-notion-next-gen-edtech.vercel.app/",
  },
  {
    name: "Store It",
    favicon: "/images/projects/logos/storeit.ico",
    imageUrl: [
      "/images/projects/storeItLight.webp",
      "/images/projects/storeItDark.webp",
    ],
    description:
      "A storage management application built with ReactJS and Firebase. Users can securely store, retrieve, and manage their digital assets. Includes real-time synchronization, intuitive UI, and robust security features.",
    sourceCodeHref: "https://github.com/SaurabhKumar171/store-it",
    liveWebsiteHref: "https://store-it-secure-eight.vercel.app/sign-in",
  },
  {
    name: "Portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description:
      "My personal portfolio website built with NextJS, TailwindCSS, and Framer Motion. It showcases my projects, skills, and professional journey in a sleek and responsive design.",
    sourceCodeHref: "https://github.com/SaurabhKumar171/saurabhkumar-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
