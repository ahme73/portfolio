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
    email: "hello@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    resumeLink: "resume.pdf",
    welcomeText: "👋 Welcome to my portfolio",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  
  // Social Media Links
  socialMedia: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
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
      "Hello! I'm a passionate software developer with experience in building web applications. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.",
      "I'm passionate about crafting clean, maintainable code that solves real-world problems. With a focus on user experience and performance, I aim to create applications that are both functional and beautiful."
    ],
    experienceYears: "5+",
    education: {
      degree: "Computer Science",
      university: "University Of Technology"
    },
    coreTechnologies: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML & CSS"
    ]
  },
  
  // Projects
  projects: [
    {
      title: "Project One",
      description: "A full-stack web application with user authentication, real-time updates, and a responsive design. Built with React and Node.js.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        demo: "https://project-one-demo.example.com",
        code: "https://github.com/yourusername/project-one"
      },
      featured: true
    },
    {
      title: "Project Two",
      description: "A mobile-first e-commerce platform with a custom shopping cart implementation and secure payment processing. Uses Vue.js and Firebase.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Vue.js", "Firebase", "Stripe"],
      links: {
        demo: "https://project-two-demo.example.com",
        code: "https://github.com/yourusername/project-two"
      },
      featured: false
    },
    {
      title: "Project Three",
      description: "A data visualization dashboard for monitoring real-time metrics. Features interactive charts and customizable widgets. Built with Angular and D3.js.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Angular", "D3.js", "MongoDB"],
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
          { name: "Git/GitHub", level: 90 },
          { name: "UI/UX Design", level: 70 },
          { name: "DevOps", level: 65 }
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