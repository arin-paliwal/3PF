import {
    mobile,
    backend,
    office,
    open,
    blockchain,
    cpp,
    creator,
    defaultProjectIcon,
    web,
    MMS,
    drive,
    javascript,
    typescript,
    html,
    dsajava,
    comm,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java, python, webdevel, coding, uiux, a3dmodel,
    figma,
    docker,
    meta,
    starbucks,
    psitlogo,
    tesla,
    todolist,
    shopify,
    carrent,
    jobit,
    tripguide,
    cinematic,
    webd, dsapython, dsa, a3d,
    textflow,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "trainings",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
  {
    title: "Full Stack Development",
    icon: webdevel,
  },
  {
    title: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    title: "Machine Learning",
    icon: coding,
  },
  {
    title: "UI/UX Designing",
    icon: uiux,
  },
  {
    title: "Blockchain Development",
    icon: blockchain,
  },
  {
    title: "Open-Source Contributions",
    icon: open,
  },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Office",
        icon: office,
    },
    {
        name: "python",
        icon: python
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },



];

const experiences = [
    {
        title: "Bachelor of Technology",
        company_name: "Pranveer Singh Institute of Technology",
        icon: psitlogo,
        iconBg: "#FFFFFF",
        date: "May 2021 - Current",
        points: [
            "Persuing Engineering in Computer Science with specialization in Artificial Intelligence & Machine Learning.",
            "Qualified for special trainings in the college.",
            "Actively participating in extracurricular activities related to computer science, such as hackathons, coding competitions, or technology clubs.",
            "I'm excited about the possibilities and opportunities that a career in computer science engineering can offer, and eager to continue learning and growing in this field."
            ,
        ],
    },
    {
        title: "Intermediate",
        company_name: "Mercy Memorial School",
        icon: MMS,
        iconBg: "#FFFFFF",
        date: "May 2019 - May 2021",
        points: [
            "Improved my knowledge about Computer Science & Programming.",
            "Learned to be more independent and responsible, as you had to manage your own time and prioritize your studies and activities.",
            "Gained confidence in your abilities and strengths, and developed a strong foundation for further academic and personal growth",
        ],
    },
    {
        title: "High School",
        company_name: "Mercy Memorial School",
        icon: MMS,
        iconBg: "#FFFFFF",
        date: "May 2009 - May 2019 ",
        points: [
            "Enriched my knowledge of Java Programming Language & Computer System.",
            "Developed a passion for a Comuter Science and Software Development, and started exploring different career options or higher education opportunities.",
            "Implemented various basic HTML CSS JS sites and various basic algorithms",
        ],
    },
];

const testimonials = [
    {
        issuer: "IIT Kharagpur",
        course: "Communication",
        image: comm,
        link: "https://drive.google.com/file/d/1BEj-biffh7b8LKiKKpT115LE-8-wFXlx/view?usp=sharing"
    },
    {
        issuer: "Udemy",
        course: "Full Stack Web Development",
        image: webd,
    },
    {
        issuer: "LinkedIn",
        course: "3D Models",
        image: a3d,
    },
    {
        issuer: "LinkedIn",
        course: "Data Structures & Algorithms in Java",
        image: dsajava,
    },
    
    {
        issuer: "Infosys",
        course: "Data Structures & Algorithms in Python",
        image: dsapython,
    },
];

const projects = [
    {
        id:'project-1',
        name: "Text Flow",
        description:
            "Text Flow application is a real-time messaging application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to send and receive messages in a chat interface. It has minimalistic User Interface and uses websockets for real-time communication between users.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "socket.io",
                color: "pink-text-gradient",
            },
            {
                name: "express-js",
                color: "pink-text-gradient",
            },
        ],
        image: textflow,
        repo: "https://github.com/arin-paliwal/Text-Flow",
        demo:"",
    },
    {
        id:'project-2',
        name: "ChatVibe",
        description:
            "ChatVibe is a web application that allows users to interact with each other and share content. It include user profiles, messaging, commenting, liking, sharing, and creating or joining interest groups. It is using a MERN Technology with Modern User Interface.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: defaultProjectIcon,
        repo: "https://github.com/arin-paliwal/ChatVibe",
        demo:"",
    },
    {
        id:'project-3',
        name: "To-Do App",
        description:
            "An Web Application that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. It offers CRUD operations & is styled by Material-UI",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "crud",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        repo: "https://github.com/arin-paliwal/To-Do-List",
        demo:"",
    },
    {
        id:'project-4',
        name: "wealthie",
        description:
            "The finance dashboard project is a web-based platform that provides a user-friendly interface for visualizing financial data. The finance dashboard helps businesses make informed decisions by providing real-time financial insights and forecasting capabilities.",
        tags: [
            {
                name: "vite",
                color: "blue-text-gradient",
            },
            {
                name: "machine-learning",
                color: "green-text-gradient",
            },
            {
                name: "express-js",
                color: "pink-text-gradient",
            },
            {
                name: "charts",
                color: "pink-text-gradient",
            },
        ],
        image: defaultProjectIcon,
        repo: "https://github.com/arin-paliwal/Wealthie",
        demo:"",
    },
    {
        id: 'project-5',
        name: "Cinematic",
        description:
            "Cinematic is an open-source video-sharing platform, similar to YouTube. I have enhanced core functionalities like video playback controls, recommendations, subscriptions, and comments.",
        tags: [
            {
                name: "vite",
                color: "blue-text-gradient",
            },
            {
                name: "rapid-api",
                color: "green-text-gradient",
            },
            {
                name: "material-ui",
                color: "pink-text-gradient",
            },
            {
                name: "vercel",
                color: "pink-text-gradient",
            },
        ],
        image: cinematic,
        repo: "https://github.com/arin-paliwal/Cinematic",
        demo: "https://cinematicplayer.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };