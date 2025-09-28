// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import college from './assets/education_logo/college.jpg';
import school from './assets/education_logo/school.jpg';


import explorinlogo from './assets/experience/explorin.png';

// Project Section Logo's
import pixieTalk from './assets/work_logo/pixieTalk.png';
import chatApp from './assets/work_logo/chatApp.png';
import bookNbuy from './assets/work_logo/bookNbuy.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: explorinlogo,
      role: "Explorin Web-D Placement Summer Camp",
      company: "explorin.io",
      date: "July 2024 - August 2024",
      desc: "I was trained in the Explorin Web Development program, where I gained comprehensive knowledge and hands-on experience in various aspects of web development. The program covered essential skills such as HTML, CSS, JavaScript, TypeScript, Node.js, and Next.js, among others. This intensive training equipped me with the tools and expertise needed to excel in creating and managing modern web applications and infrastructure.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "MongoDB",
        "Git/Github",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: college,
      school: "Moradabad Institute Of Technology, Moradabad",
      date: "Sept 2021 - July 2025",
      grade: "8.27 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Moradabad Institute Of Technology, Moradabad. During my time at MIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Moradabad Institute Of Technology has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: school,
      school: "St. Mary's Convent School, Gajraula",
      date: "Apr 2020 - March 2021",
      grade: "83.2%",
      desc: "I completed my class 12 education from St. Mary's Convent School, Gajraula, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: school,
      school: "St. Mary's Convent School, Gajraula",
      date: "Apr 2018 - March 2019",
      grade: "81.9%",
      desc: "I completed my class 10 education from St. Mary's Convent School, Gajraula, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Pixie Talk - AI-Powered Content Creation",
      description:
        "Pixie Talk is an AI-powered interactive storytelling platform that transforms your ideas into animated stories. It integrates story generation, voice narration, image creation, and video animation into one seamless pipeline.",
      image: pixieTalk,
      tags: ["React JS", "Python", "MongoDB", "Gemini", "ElevenLabs", "AI Video API"],
      github: "https://github.com/Shivi-5871/Pixie-Talk",
      webapp: "https://pixie-talk.vercel.app/",
    },
    {
      id: 1,
      title: "💬 Chat Application",
      description:
        "A real-time Chat Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with Cloudinary integration for profile picture uploads. This app allows users to sign up, log in, create groups, search users, and chat in real time.",
      image: chatApp,
      tags: ["React JS", "Node JS", "Express", "MongoDB", "Socket.io", "Cloudinary"],
      github: "https://github.com/Shivi-5871/Chat-Application",
      webapp: "https://chat-application-reactproject.vercel.app/",
    },
    {
      id: 2,
      title: "Book N Buy - An Online Book Store",
      description:
        "Book N Buy is a simple online bookstore project built using HTML, CSS, and JavaScript. It provides a smooth shopping experience with features like book browsing, offers, blogs, cart management, and a user-friendly login system.",
      image: bookNbuy,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shivi-5871/Book-N-Buy",
      webapp: "https://book-n-buy.vercel.app",
    },
    // {
    //   id: 3,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   // image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "",
    //   webapp: "",
    // },
    // {
    //   id: 4,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   // image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "",
    //   webapp: "",
    // },
  ];  