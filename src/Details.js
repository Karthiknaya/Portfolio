// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import C from "./assets/techstack/C.png";
import Linux from "./assets/techstack/Linux.png";
import Ubuntu from "./assets/techstack/ubuntu.png";
import Workbench from "./assets/techstack/Workbench.png";
import MUI from "./assets/techstack/MUI.png";
import Node from "./assets/techstack/Node.png";
import Express from "./assets/techstack/Express.png";
import EJS from "./assets/techstack/EJS.png";
import Spring from "./assets/techstack/Spring.png";
import Data from "./assets/techstack/Data.png";
import Object from "./assets/techstack/Object.jpg";
import CPP from "./assets/techstack/C++.png";
import Python from "./assets/techstack/Python.png";
import SQL from "./assets/techstack/SQL.png";
import MySQL from "./assets/techstack/MYSQL.png";
import MongoDB from "./assets/techstack/MongoDB.png";
import java from "./assets/techstack/java-logo-1.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/EasyShare.jpg";
import projectImage2 from "./assets/projects/weather.png";
import projectImage3 from "./assets/projects/Youtube.jpg";
import projectImage4 from "./assets/projects/atm.jpg";
import projectImage5 from "./assets/projects/BookBazaar.jpg";
import projectImage6 from "./assets/projects/simon game.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Karthik Nayak",
  Edu:"BE Electronics & Communications Engineering Graduate,",
  tagline: "Full Stack Developer & Competitive Programmer.",
  img: profile,
  about: `I am a 2023 BE-Electronics & Communication Engineering Graduate with an aggregate of 8.8 CGPA, Proficient in algorithmic problem solving using Java,C,C++, MERN stack developer,Strong DSA,OOPs,OS,CCN,DBMS,JavaScript knowledge,Solved 1000+ problems on Leetcode+GFG, Completed 2 months of Full stack developer internship at Accelerlab Solutions Pvt Ltd.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/karthik-nayak-756556222/",
  github: "https://github.com/Karthiknaya",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Web Developer Intern",
    Company: `Accelerlab Solutions Pvt Ltd`,
    Location: "Mangalore Karnataka",
    Type: "Internship",
    Duration: "Feb 2023 - March 2023",
  },
  {
    Position: "Technical Apprenticeship",
    Company: `Apna College`,
    Location: "Remote",
    Type: "Apprenticeship",
    Duration: "June 2023 - Feb 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelors in Electronics & Communication - 8.8 CGPA",
    Company: `Mangalore Institute of Technology & Engineering`,
    Location: "Mangalore",
    Type: "Full Time",
    Duration: "August 2019 - May 2023",
  },
  {
    Position: "12th PCMB - 87%",
    Company: "Karnataka Public School Muniyal Udupi",
    Location: "Karkala",
    Type: "Full Time",
    Duration: "June 2017 - March 2019",
  },
  {
    Position: "SSLC - 92.16%",
    Company: "Govt HighSchool Koodabettu Mala",
    Location: "Karkala",
    Type: "Full Time",
    Duration: "June 2014 - April 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  C:C,
  Data: Data,
  Object: Object,
  CPP: CPP,
  EJS: EJS,
  Workbench: Workbench,
  Linux: Linux,
  Ubuntu: Ubuntu,
  Spring: Spring,
  Node: Node,
  Express: Express,
  MUI: MUI,
  Python: Python,
  SQL:SQL,
  MongoDB:MongoDB,
  MySQL:MySQL,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  java: java,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "EASYSHARE",
    image: projectImage1,
    description: `Developed a file-sharing web application to 
    simplify sharing images, PDFs, files, PowerPoint 
    presentations, and documents. Users can 
    upload their files and generate secure links for 
    easy sharing.The application supports various file formats and 
    ensures data privacy with encrypted transfers. It 
    offers a user-friendly interface for seamless 
    navigation and efficient file management. `,
    techstack: "React.js, Node.js, Express.js, MongoDB",
    previewLink: "",
    githubLink: "https://github.com",
  },
  {
    title: "BookBazaar",
    image: projectImage5,
    description: `Developed a full-stack Book Bazaar app using the MERN stack to manage free and paid books.
Implemented user authentication, book listings, and transaction handling through a RESTful API.
Created a responsive, dynamic front-end with React for seamless user interaction.
Ensured data security and efficient storage with MongoDB, handling user data effectively.`,
    techstack: "MongoDB, Express.js, React.js, Node.js",
    previewLink: "",
    githubLink: "https://github.com",
  },
  {
    title: "ATM Operations Management",
    image: projectImage4,
    description: ` Developed a secure ATM Management System 
with robust architecture, enabling account 
creation, transactions, and ensuring data integrity. 
Implemented essential features like cash deposit, 
fast withdrawal, balance inquiry, mini statements, 
and PIN change for comprehensive ATM 
operations. Enhanced user experience through 
intuitive interface design and efficient 
functionality.Focused on security measures to protect user 
data and maintain system reliability. Achieved 
seamless, user-friendly ATM services, prioritizing 
both functionality and security.`,
    techstack: "Core Java, Swing+Awt,MySQL",
    previewLink: "",
    githubLink: "https://github.com/Karthiknaya/ATM-Operations-Management",
  },
  {
    title: "TrendTube",
    image: projectImage3,
    description: `Developed a YouTube clone featuring real-time 
video fetching and display. The application 
includes robust search functionality, allowing 
users to find videos quickly.It also boasts a responsive design, ensuring a 
seamless experience across various devices. `,
    techstack: "React.js, Tailwind CSS, Rapid API",
    previewLink: "https://trendtube-app.netlify.app/",
    githubLink: "https://github.com/Karthiknaya/trendtube",
  },
  {
    title: "WeatherWave",
    image: projectImage2,
    description: ` Developed a real-time weather web application 
    that provides up-to-date weather information. 
    Users can access current weather conditions, 
    forecasts, and other meteorological data 
    instantly.The application features a user-friendly 
    interface and ensures accurate and timely 
    updates from reliable weather sources. `,
    techstack: "React.js, OpenWeatherAPI, GeoDB API",
    previewLink: "https://weatherwavewebapp.netlify.app/",
    githubLink: "https://github.com/Karthiknaya/Weather_wave-App",
  },
  {
    title: "Simon Game",
    image: projectImage6,
    description: `Developed an interactive Simon game using HTML for structure, CSS for styling, and JavaScript for game logic and user interaction.
Implemented game features such as color sequence generation, user input validation, and score tracking.
Enhanced user experience with responsive design and smooth animations using CSS transitions and JavaScript event handling.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://karthiknaya.github.io/Simon_Game/simon.html",
    githubLink: "https://github.com/Karthiknaya/Simon_Game",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nayakkarthik13149@gmail.com",
  phone: "+91 12345 67890",
};
