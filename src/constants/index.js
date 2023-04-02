import {
    mobile,
    backend,
    creator,
    defaultProjectIcon,
    web,
    MMS,
    drive,
    javascript,
    typescript,
    html,
    comm,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
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
    webd, dsapython, a3d,
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
        id: "technologies",
        title: "Tech",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "training&certificate",
        title: "Training",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Web Development",
        icon: web,
    },
    {
        title: "Data Structures & Algorithms",
        icon: mobile,
    },
    {
        title: "3D Models",
        icon: backend,
    },
    {
        title: "UI/UX Designing",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
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
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
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
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Intermediate",
        company_name: "Mercy Memorial School",
        icon: MMS,
        iconBg: "#FFFFFF",
        date: "May 2009 - May 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "High School",
        company_name: "Mercy Memorial School",
        icon: MMS,
        iconBg: "#FFFFFF",
        date: "May 2019 - May 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        issuer: "IIT Kharagpur",
        course: "Communication",
        image:comm,
        link:"https://drive.google.com/file/d/1BEj-biffh7b8LKiKKpT115LE-8-wFXlx/view?usp=sharing"
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
        image: defaultProjectIcon,
    },
    {
        issuer: "Infosys",
        course: "Data Structures & Algorithms in Python",
        image: dsapython,
    },
];

const projects = [
    {
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
        source_code_link: "https://github.com/arin-paliwal/Text-Flow",
    },
    {
        name: "ChatVibe",
        description:
            "ChatVibe is a web application that allows users to interact with each other and share content. It include user profiles, messaging, commenting, liking, sharing, and creating or joining interest groups. It is using a MERN Technology with Modern UI.",
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
        source_code_link: "https://github.com/arin-paliwal/ChatVibe",
    },
    {
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
        source_code_link: "https://github.com/arin-paliwal/To-Do-List",
    },
];

export { services, technologies, experiences, testimonials, projects };