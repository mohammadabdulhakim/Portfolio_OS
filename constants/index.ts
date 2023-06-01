

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
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
  {
    name: "Articles",
  },
  {
    name: "Skills",
  },
];

const contextMenuItems = ({setIconSize,openProgram}:any) => [
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

const projects:ProjectI[] = [
    {
      title: "co-student",
      hasDomain: true,
      desc: "is an educational app that combines social media and e-learning to help students learn faster and easier. With features like tests, courses, lessons, homework, and feeds, this app makes it easy to connect with teachers and classmates, access educational resources and measure tests hardness. visit Co-Student.com today and start your learning or teaching journey!",
      imgs: [
        {
          src: "1.png",
          title: "Grade Feed"
        },
        {
          src: "2.png",
          title: "Sign up"
        },
        {
          src: "3.png",
          title: "Sign in"
        },
        {
          src: "4.png",
          title: "Profile"
        },
        {
          src: "5.png",
          title: "My tests"
        },
        {
          src: "6.png",
          title: "My mistakes"
        },
        {
          src: "7.png",
          title: "Course"
        },
        {
          src: "8.png",
          title: "Home work"
        },
        {
          src: "9.png",
          title: "Course feed"
        },
        {
          src: "10.png",
          title: "Lesson video"
        },
        {
          src: "11.png",
          title: "Lesson explanation"
        },
        {
          src: "12.png",
          title: "Students H.W degrees"
        },
      ],
      demo: "https://www.co-student.com",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "pomatrix",
      hasDomain: true,
      desc: "is the ultimate productivity app that combines the Pomodoro technique and the Eisenhower matrix. With drag and drop task management, completed task tracking, and a clock-dependent Pomodoro timer, PoMatrix is perfect for boosting your productivity. Try it today and start working smarter, not harder.",
      imgs: [
        {
          src: "1.png",
          title: "Pomodoro timer"
        },
        {
          src: "2.png",
          title: "Eisenhower matrix"
        },
        {
          src: "3.png",
          title: "Drag & Drop"
        },
        {
          src: "4.png",
          title: "New task"
        },
        {
          src: "5.png",
          title: "Pages"
        },
        {
          src: "6.png",
          title: "Languages"
        },
        {
          src: "7.png",
          title: "Edit timer"
        },
        {
          src: "8.png",
          title: "Confetti when finished"
        },
        {
          src: "9.png",
          title: "Completed tasks"
        },
      ],
      demo: "https://pomatrix.com",
      tags: [
        {
          name: "nextjs",
          color: "orange-text-gradient",
        },
        {
          name: "ts",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "agere",
      desc: "is an exceptional npm package that can assist you in numerous ways.\n   It boasts a range of awesome tools, such as randArr() which randomizes array elements,\n   and gPss() which generates strong passwords or IDs based on your preferences, among others.",
      imgs: [
        {
          src: "1.png",
          title: "Installation"
        },
        {
          src: "2.png",
          title: "Randomize array elements"
        },
        {
          src: "3.png",
          title: "Generate a password"
        },
        {
          src: "4.png",
          title: "More utils"
        },
      ],
      demo: "https://www.npmjs.com/package/agere",
      github:"https://github.com/abomisr/agere",
      tags: [
        {
          name: "js",
          color: "yellow_gradient",
        },
        {
          name: "ts",
          color: "blue-text-gradient",
        },
      ],
    },
    {
      title: "os",
      desc: "Explore my website that looks and feels just like Windows 11! Built with Next.js and TypeScript, it offers an immersive experience complete with popular applications like Google Chrome, Edge, and Visual Studio Code. With the ability to customize the background, turn the site on and off, and even restart it, this website is unlike anything you've ever seen before. Discover it now!",
      imgs: [
        {
          src: "1.png",
          title: "Home"
        },
        {
          src: "2.png",
          title: "Startup"
        },
        {
          src: "3.png",
          title: "Desktop"
        },
        {
          src: "4.png",
          title: "Start menu"
        },
        {
          src: "5.png",
          title: "Vscode"
        },
        {
          src: "6.png",
          title: "Appearance"
        },
      ],
      demo:"/",
      tags: [
        {
          name: "nextjs",
          color: "orange-text-gradient",
        },
        {
          name: "ts",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "portfolio",
      desc: "My portfolio is a collection of my work, skills, and projects. It's designed for anyone interested in learning more about my experiences and expertise. With sections dedicated to articles, skills, resume, contact, and projects, you can easily navigate and explore what I have to offer. Whether you're a potential employer, collaborator, or just curious, I invite you to take a look and see what I can bring to the table.",
      imgs: [
        {
          src: "1.png",
          title: "Home"
        },
        {
          src: "2.png",
          title: "Skills"
        },
        {
          src: "3.png",
          title: "Projects"
        },
        {
          src: "4.png",
          title: "Articles"
        },
        {
          src: "5.png",
          title: "Resume"
        },
        {
          src: "6.png",
          title: "Contact"
        },
      ],
      demo:"/portfolio",
      tags: [
        {
          name: "nextjs",
          color: "orange-text-gradient",
        },
        {
          name: "ts",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "much more",
      desc: "You, can discover it from my repos on github, NextPrompt (Next.js), TouchShare (React, Sanity), Dashboard (React), Another Dashboard (HTML, CSS, JS), Typing speed test (HTML, CSS, JS), Coffee shop (HTML, CSS), CRUDs (HTML, CSS, JS).",
      imgs: [
        {
          src: "1.png",
          title: "NextPrompt"
        },
        {
          src: "2.png",
          title: "TouchShare"
        },
        {
          src: "3.png",
          title: "Dashboard"
        },
        {
          src: "4.png",
          title: "Another Dashboard"
        },
        {
          src: "5.png",
          title: "Typing speed test"
        },
        {
          src: "6.png",
          title: "Coffee Shop"
        },
        {
          src: "7.png",
          title: "CRUDs"
        },
      ],
      github:"https://github.com/abomisr?tab=repositories",
      tags: [
        {
          name: "variety",
          color: "blue-text-gradient",
        },
      ],
    }
]


export { mainColor, osBgSrcs, navLinks, desktopPrograms,contextMenuItems, socialLinks,startMenuPrograms,projects };
