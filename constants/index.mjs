

const mainColor = "#1e0c79";

const osBgSrcs = [
  "/assets/os/bg_1.png",
  "/assets/os/bg_3.png",
  "/assets/os/bg_4.png",
  "https://images.unsplash.com/photo-1570026517541-258404ea3bfc",
  "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39",
  "https://images.unsplash.com/photo-1663004536868-1658c44ffb12",
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e",
]; // "https://images.unsplash.com/photo-1622737133809-d95047b9e673"

const socialLinks = {
  githubLink:"https://github.com/abomisr",
  linkedinLink:"https://www.linkedin.com/in/abomisr",
  mediumLink:"https://www.medium.com/@abomisr",
  devToLink:"https://dev.to/abomisr"

}

const navLinks = [
  {
    img: "github",
    link: socialLinks.githubLink,
  },
  {
    img: "linkedin",
    link: socialLinks.linkedinLink,
  },
  {
    img: "Medium",
    link: socialLinks.mediumLink,
  },
  {
    img: "DevTo",
    link: socialLinks.devToLink,
  },
];

const desktopPrograms = [
  {
    name: "VScode",
  },
  {
    name: "Chrome",
  },
  {
    name: "Edge",
  },
  {
    name: "Appearance",
  },
];

const contextMenuItems = ({setIconSize,openProgram}) => [
  {
    title: "View",
    icon: "uil-apps",
    subMenu: [
      {
        title: "Large",
        icon: "uil-anchor",
        action: () => {
          setIconSize("40px");
        },
      },
      {
        title: "Medium",
        icon: "uil-balance-scale",
        action: () => {
          setIconSize("30px");
        },
      },
      {
        title: "Small",
        icon: "uil-compress-alt",
        action: () => {
          setIconSize("20px");
        },
      },
    ],
  },
  {
    title: "Refresh",
    icon: "uil-sync",
    subMenu: null,
    action: () => {},
  },
  {
    title: "Links",
    icon: "uil-link",
    subMenu: [
      {
        title: "Github",
        icon: "uil-github",
        action: () => {
          window.open(socialLinks.githubLink, "_blank");
        },
      },
      {
        title: "Linkedin",
        icon: "uil-linkedin",
        action: () => {
          window.open(socialLinks.linkedinLink, "_blank");
        },
      },
      {
        title: "DevTo",
        icon: "uil-brackets-curly",
        action: () => {
          window.open(socialLinks.devToLink, "_blank");
        },
      },
    ],
    dividerBefore:true,
  },
  {
    title:"Appearance",
    icon:"uil-eye",
    dividerBefore:true,
    action:()=>openProgram("Appearance")
  }
];

const startMenuPrograms = [
  { name: "Word", icon: "https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png", usage: 90 },
  { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/826px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png", usage: 85 },
  { name: "PowerPoint", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png?20210821050414", usage: 80 },
  { name: "VScode", icon: "https://code.visualstudio.com/favicon.ico", usage: 75 },
  { name: "Photoshop", icon: "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg", usage: 70 },
  { name: "Zoom", icon: "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/Zoom-icon.png", usage: 65 },
  { name: "Teams", icon: "https://cdn-icons-png.flaticon.com/512/906/906349.png", usage: 60 },
  { name: "Slack", icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png", usage: 55 },
  { name: "Discord", icon: "https://static-00.iconduck.com/assets.00/discord-icon-256x256-sp1mmakp.png", usage: 50 },
  { name: "Illustrator", icon: "https://www.iconarchive.com/download/i98176/dakirby309/simply-styled/Adobe-Illustrator.ico", usage: 45 },
  { name: "FileZilla", icon: "https://cdn2.iconfinder.com/data/icons/pack2-baco-flurry-icons-style/512/Filezilla2.png", usage: 40 },
  { name: "Notepad++", icon: "https://notepad-plus-plus.org/favicon.ico", usage: 35 },
  { name: "WinRAR", icon: "https://www.win-rar.com/favicon.ico", usage: 30 },
  { name: "VLC", icon: "https://www.videolan.org/favicon.ico", usage: 25 }
];


export { mainColor, osBgSrcs, navLinks, desktopPrograms,contextMenuItems, socialLinks,startMenuPrograms };

// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets";
// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
