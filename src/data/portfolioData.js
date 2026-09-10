export const portfolioData = {
  personal: {
    name: "Piyush Singh",
    role: "AI/ML Engineer\nMachine Learning Developer",
    description: "I build and deploy intelligent systems — from machine learning\nand computer-vision models to full-stack products that put them to work.",
    resumeUrl: "/Piyush_Singh_Resume.pdf",
  },
  socials: {
    github: "https://github.com/PiyushKumarSingh-90",
    linkedin: "https://www.linkedin.com/in/piyush-kumar-singh-2a45132a3/",
    email: "mailto:2023.piyushs@isu.ac.in",
    leetcode: "https://leetcode.com/u/kumarpiyush_01/",
    codechef: "https://www.codechef.com/users/the_joyboy",
  },
  about: {
    title: "ABOUT THE WIZARD",
    profile: "I'm a B.Tech Computer Science student and AI/ML engineer with hands-on experience across Python, machine learning, deep learning, computer vision and full-stack development. I've built and evaluated AI/ML systems with TensorFlow, Keras, PyTorch, Scikit-learn and OpenCV, and shipped them through FastAPI services backed by MongoDB web apps.",
    focus: "AI, Machine Learning, Deep Learning, and Full Stack Development.",
    education: "B.Tech Computer Science at ITM Skills University (CGPA: 8.6)",
    interests: "Solving DSA (500+ problems), CodeChef (3★), Generative AI.",
    location: "Navi Mumbai, India",
  },
  projects: [
    {
      id: "fraud-detection",
      index: "01",
      name: "Fraud & Risk Detection System",
      category: "Machine Learning / FastAPI",
      filterCategory: "Machine Learning",
      description: "End-to-end ML pipeline for real-time fraud and high-risk transaction detection.\n\nAchieved 87% F1-score and 91% fraud recall on the test set.\n\nIncludes web interface, real-time predictions, and prediction history.",
      shortDescription: "End-to-end ML pipeline for real-time fraud & high-risk transaction detection.",
      githubLink: "https://github.com/PiyushKumarSingh-90/Fraud-Detection-System",
      liveDemo: "",
      problem: "Financial platforms must catch fraudulent and high-risk transactions in real time without disrupting legitimate users.",
      solution: "An end-to-end ML pipeline with preprocessing and feature engineering, served through a FastAPI microservice with a MongoDB-backed web app for live predictions and history.",
      techStack: ["Python", "Scikit-learn", "FastAPI", "MongoDB"],
      features: [
        "Preprocessing & feature-engineering pipelines",
        "Multiple classification models trained & evaluated",
        "FastAPI inference endpoint with MongoDB storage",
        "Web UI for input, real-time predictions & prediction history",
      ],
      architecture: ["Transaction Data", "Preprocess & Features", "ML Model", "FastAPI Service", "Web UI + History"],
      results: ["87% F1-score on test set", "91% fraud recall", "Real-time predictions with saved history"]
    },
    {
      id: "defect-detection",
      index: "02",
      name: "Defect Detection System",
      category: "Deep Learning / Computer Vision",
      filterCategory: "Deep Learning",
      description: "CNN-based manufacturing defect classifier with transfer learning across 15 defect categories.\n\nReached 91.17% test accuracy and 89.37% balanced accuracy.\n\nIntegrated Grad-CAM visualizations for model interpretability.",
      shortDescription: "CNN defect classifier over 15 defect categories with Grad-CAM visualizations.",
      githubLink: "https://github.com/PiyushKumarSingh-90/Defect-Detection-System",
      liveDemo: "",
      problem: "Manual visual inspection across many defect types is slow, inconsistent and hard to audit on a production line.",
      solution: "A CNN classifier using transfer learning across 15 defect categories, trained on 5,354 augmented images, with Grad-CAM heatmaps so operators can see why a part was flagged.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Grad-CAM"],
      features: [
        "Transfer-learning CNN across 15 defect categories",
        "Preprocessing for 5,354 images (resize / normalize / augment)",
        "Grad-CAM interpretability overlays",
        "Accuracy & balanced-accuracy evaluation",
      ],
      architecture: ["Image Input", "Preprocess & Augment", "CNN + Transfer Learning", "15-Class Classifier", "Grad-CAM Overlay"],
      results: ["91.17% test accuracy", "89.37% balanced accuracy", "Interpretable defect heatmaps"]
    },
    {
      id: "job-portal",
      index: "03",
      name: "Job Portal Application",
      category: "Full Stack / MERN",
      filterCategory: "Full Stack",
      description: "Full-stack MERN job portal with authentication, job posting, search and filtering.\n\nSupports applications, recruiter-side management, and resume uploads.\n\nBuilt with responsive React interfaces and REST-based backend workflows.",
      shortDescription: "Full-stack MERN job portal with authentication and recruiter workflows.",
      githubLink: "https://github.com/PiyushKumarSingh-90/Job-Portal-",
      liveDemo: "",
      problem: "Job seekers and recruiters need a single, fast place to post, discover and manage opportunities.",
      solution: "A full-stack MERN portal with authentication, job posting, search & filtering, applications and resume uploads, powered by REST APIs and responsive React interfaces.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Authentication for seekers & recruiters",
        "Job posting, search & filtering",
        "Applications & resume uploads",
        "Recruiter & applicant dashboards",
      ],
      architecture: ["React Client", "Express REST API", "Auth Layer", "MongoDB", "Dashboards"],
      results: ["Complete seeker ↔ recruiter workflow", "Resume upload & application tracking", "Responsive, component-driven UI"]
    },
  ],
  skills: {
    categories: [
      {
        name: "PROGRAMMING",
        items: ["Python", "C++", "JavaScript", "SQL"]
      },
      {
        name: "AI / ML",
        items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "OpenCV"]
      },
      {
        name: "WEB DEV",
        items: ["React.js", "Next.js", "Node.js", "FastAPI"]
      },
      {
        name: "TOOLS",
        items: ["Git", "GitHub", "Docker", "Pandas", "NumPy"]
      }
    ]
  },
  experience: [
    {
      id: 1,
      company: "OpenPaymnt",
      role: "Software Development Intern",
      dates: "Jul 2025 – Dec 2025",
      description: "Built responsive frontend features with React.js & Next.js — API integration, debugging and UI performance improvements. Supported backend development with MongoDB and AI/ML workflows.",
      technologies: ["React.js", "Next.js", "MongoDB", "Git"],
      achievements: []
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech, Computer Science",
      university: "ITM Skills University, Navi Mumbai",
      years: "2023 – 2027",
      cgpa: "8.6",
      location: "India"
    }
  ],
  certifications: [
    {
      id: 'cisco-ds',
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      category: "data-science",
      categoryLabel: "Data Science",
      brand: "cisco",
      image: "/certificates/cisco-data-science.jpg",
      pdf: "/certificates/Cisco_Introduction_to_Data_Science.pdf",
      date: "Jul 2026"
    },
    {
      id: 'deloitte-da',
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      category: "data-science",
      categoryLabel: "Data Science",
      brand: "deloitte",
      image: "/certificates/deloitte-data-analytics.jpg",
      pdf: "/certificates/Deloitte_Data_Analytics_Job_Simulation.pdf",
      date: "Jun 2026"
    },
    {
      id: 'infosys-ai',
      title: "AI Foundation",
      issuer: "Infosys",
      category: "ai-ml",
      categoryLabel: "AI / ML",
      brand: "infosys",
      image: "/certificates/infosys-ai-foundation.jpg",
      date: "2025"
    },
    {
      id: 'ibm-genai',
      title: "Getting Started with Generative AI",
      issuer: "IBM",
      category: "ai-ml",
      categoryLabel: "AI / ML",
      brand: "ibm",
      image: "/certificates/ibm-generative-ai.jpg",
      link: "https://www.credly.com/go/foh1k0UM",
      date: "2025"
    },
    {
      id: 'ibm-agentic',
      title: "Make Agentic AI",
      issuer: "IBM",
      category: "ai-ml",
      categoryLabel: "AI / ML",
      brand: "ibm",
      image: "/certificates/ibm-agentic-ai.jpg",
      link: "https://www.credly.com/go/zxiaELTj",
      date: "2025"
    },
    {
      id: 'techfest-java',
      title: "Java Workshop",
      issuer: "Techfest, IIT Bombay",
      category: "programming",
      categoryLabel: "Programming",
      brand: "techfest",
      image: "/certificates/techfest-java.jpg",
      date: "2023"
    },
    {
      id: 'hackerrank-js',
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      category: "programming",
      categoryLabel: "Programming",
      brand: "hackerrank",
      image: "/certificates/hackerrank-javascript.jpg",
      pdf: "/certificates/HackerRank_JavaScript_Intermediate.pdf",
      link: "https://www.hackerrank.com/certificates/5167A3584846",
      date: "2024"
    },
    {
      id: 'hackerrank-py',
      title: "Python (Basic)",
      issuer: "HackerRank",
      category: "programming",
      categoryLabel: "Programming",
      brand: "hackerrank",
      image: "/certificates/hackerrank-python.jpg",
      pdf: "/certificates/HackerRank_Python_Basic.pdf",
      link: "https://www.hackerrank.com/certificates/5DE0DB33DC8B",
      date: "2024"
    },
    {
      id: 'hackerrank-react',
      title: "React (Basic)",
      issuer: "HackerRank",
      category: "programming",
      categoryLabel: "Programming",
      brand: "hackerrank",
      image: "/certificates/hackerrank-react.jpg",
      link: "https://www.hackerrank.com/certificates/5167A3584846",
      date: "2024"
    }
  ],
  achievements: [
    {
      id: 'leetcode-500',
      title: "500+ Problems Solved",
      issuer: "LeetCode",
      category: "achievements",
      categoryLabel: "Achievement",
      brand: "leetcode",
      link: "https://leetcode.com/",
      highlight: "Data Structures & Algorithms"
    },
    {
      id: 'codechef-3star',
      title: "3-Star Rating",
      issuer: "CodeChef",
      category: "achievements",
      categoryLabel: "Achievement",
      brand: "codechef",
      link: "https://www.codechef.com/",
      highlight: "Competitive Programming"
    }
  ],
  contact: {
    heading: "SEND AN\nOWL."
  }
};
