/**
 * Developer Portfolio Configuration
 * Edit this file to customize your portfolio without touching the main HTML
 */

const portfolioConfig = {
  // Personal Information
  personalInfo: {
    name: "Ahmed Abdul Ameer",
    title: "Software Developer",
    tagline: "I build things for the web",
    email: "ahmed68257@gmail.com",
    phone: "+964 7717047900",
    location: "Baghdad, Iraq",
    resumeLink: "resume.pdf",
    welcomeText: "👋 Welcome to my portfolio",
    profileImage: "./5193088002212098170_121.jpg"
  },
  
  // Social Media Links
  socialMedia: {
    github: "https://github.com/ahme73",
    linkedin: "https://www.linkedin.com/in/ahmed-abdul-amir-a641a3229/",
    twitter: "https://x.com/ah7_3",
    instagram: "https://www.instagram.com/ah7.3/"
  },
  
  // Theme Colors
  colors: {
    primary: {
      DEFAULT: '#111111',
      light: '#333333',
    },
    secondary: {
      DEFAULT: '#FF6B00',
      light: '#FF8A3D',
      dark: '#E95800',
    }
  },
  
  // Light/Dark Mode Colors
  lightMode: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f5f5f5',
    bgAccent: '#FF6B00',
    textPrimary: '#111111',
    textSecondary: '#333333',
    textAccent: '#FF6B00',
    bgCard: '#ffffff',
    bgGradientFrom: '#111111',
    bgGradientTo: '#FF6B00',
    border: '#e5e7eb',
    button: '#FF6B00',
    buttonHover: '#FF8A3D',
  },
  
  darkMode: {
    bgPrimary: '#111111',
    bgSecondary: '#1e1e1e',
    bgAccent: '#FF6B00',
    textPrimary: '#f9fafb',
    textSecondary: '#e5e7eb',
    textAccent: '#FF8A3D',
    bgCard: '#1a1a1a',
    bgGradientFrom: '#000000',
    bgGradientTo: '#FF6B00',
    border: '#2e2e2e',
    button: '#FF6B00',
    buttonHover: '#E95800',
  },
  
  // About Section
  about: {
    description: [
      "Hello, I'm Ahmed. I'm passionate about technology and programming, especially in the field of automation. I aspire to become a DevOps programmer. I enjoy self-learning and am currently working on developing my skills in various fields, including:",
      "C++ and JavaScript programming, backend development using Node.js, interface design using HTML and CSS, electronic control using Arduino, and networking and servers as part of the CCNA track.",
      "I'm passionate about crafting clean, maintainable code that solves real-world problems. With a focus on user experience and performance, I aim to create applications that are both functional and beautiful.",
    ],
    experienceYears: "3+",
    education: {
      degree: "Computer Science",
      university: "University Of Technology"
    },
    coreTechnologies: [
      "Python",
      "JavaScript",
      "Node.js",
      "HTML & CSS"
    ]
  },
  
  // Projects
  projects: [
    {
      title: "Project One",
      description: "An Arduino-powered smart parking system with ultrasonic sensors for slot detection, an LCD for live status display, RFID-based access control, and an automated gate using a servo motor. Designed for efficient vehicle management and real-time monitoring.",
      image: "./ccef3fb5-07db-4a43-a402-4e7951c0ef6a.png",
      tags: ["Arduino", "C++"],
      links: {
        demo: "https://project-one-demo.example.com",
        code: "https://github.com/yourusername/project-one"
      },
      featured: true
    },
    {
      title: "Project Two",
      description: "A smart home system powered by Arduino, featuring sensor integration, automated lighting, fingerprint access, and environmental monitoring. Built using Arduino and compatible modules.",
      image: "./2c4d6dc5-ad70-4138-91b1-439be7a51db9.png",
      tags: ["Raspberry Pi"],
      links: {
        demo: "https://project-two-demo.example.com",
        code: "https://github.com/yourusername/project-two"
      },
      featured: false
    },
    {
      title: "Project Three",
      tags: ["HTML", "Tailwind CSS", "SQL Light"],
      description: "A data visualization dashboard for monitoring real-time metrics. Features interactive charts and customizable widgets. Built with HTML, Tailwind and SQL Light.",
      image: "./ccef3fb5-07db-4a43-a402-4e7951c0ef6aFAW.png",
      tags: ["HTML", "Tailwind CSS", "DP SQL Light"],
      links: {
        demo: "https://project-three-demo.example.com",
        code: "https://github.com/yourusername/project-three"
      },
      featured: false
    }
  ],
  
  // Skills
  skills: {
    categories: [
      {
        name: "Frontend",
        icon: "fas fa-code",
        iconColor: "blue",
        skills: [
          { name: "HTML/CSS", level: 95 },
          { name: "JavaScript", level: 90 },
          { name: "React", level: 85 }
        ]
      },
      {
        name: "Backend",
        icon: "fas fa-server",
        iconColor: "green",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "Express", level: 80 },
          { name: "Databases", level: 75 }
        ]
      },
      {
        name: "Tools & Others",
        icon: "fas fa-toolbox",
        iconColor: "purple",
        skills: [
          { name: "Git/GitHub", level: 65 },
          { name: "UI/UX Design", level: 30 },
          { name: "DevOps", level: 30 }
        ]
      }
    ],
    technologies: [
      { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
      { name: "React", icon: "fab fa-react", color: "text-blue-400" },
      { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
      { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
      { name: "Sass", icon: "fab fa-sass", color: "text-pink-500" }
    ]
  },
};

// Export the configuration
window.portfolioConfig = portfolioConfig; 