import { Github, Linkedin, Mail } from "lucide-react";
import profilePic from "../assets/foto-crop.jpg"; 
import project1 from "../assets/werrecooked.png";
import project2 from "../assets/footbal-analysis.jpg";
import project3 from "../assets/student-depression.jpg";
import project4 from "../assets/movie.jpg";
import project5 from "../assets/celebrity-face.jpg";
import project6 from "../assets/wine-quality.jpg";

export const DATA = {
  profile: {
    name: "Radithya Fawwaz Aydin",
    heroName: "Radith",
    role: "Information Technology Student",
    avatar: profilePic,
    resume: "/cv.pdf",
    
    roles: ["Data Scientist", "Machine Learning Engineer", "AI Enthusiast"],

    status: {
      isAvailable: true,
      availableText: "Available for hire",
      unavailableText: "Busy working",
    },

    // Untuk Hero Section
    description: "Final-year Information Technology student combining technical expertise in data analysis and machine learning with proven experience in project management and organizational leadership.",
    
    // Untuk About Section
    about: "I am deeply passionate about transforming raw data into meaningful insights. My journey involves not just building models but understanding the business context behind them. I thrive in environments where I can apply machine learning techniques to solve real-world problems, from predictive analytics to optimizing operational workflows. Beyond code, I enjoy leading teams and fostering collaboration to achieve strategic goals."
  },

  socials: [
    { icon: Github, link: "https://github.com/wingscode123", label: "Github" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/radithya-fawwaz-/", label: "LinkedIn" },
    { icon: Mail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=radith.fa@gmail.com", label: "Email" },
  ],

  
 skills: [
    // --- Data Science & ML Core ---
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    
    // --- Tools & Analysis ---
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" },
    { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
    { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
    { name: "Data Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Looker Studio", icon: "https://cdn.simpleicons.org/looker/4285F4" },

    // --- Web Development ---
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

    // --- DevOps & Tools ---
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Business Dev", icon: "https://cdn.simpleicons.org/trello/0079BF" },
  ],

  workExperiences: [
    {
      id: 1,
      role: "IT Project Manager",
      company: "PT. FSCM MANUFACTURING INDONESIA",
      period: "Feb 2025 - Aug 2025",
      description: "Designed, developed, and launched a centralized warehouse booking system using Google Apps Script to optimize manual workflows and improve procurement efficiency.",
    },
    {
      id: 2,
      role: "Machine Learning Engineer Cohort",
      company: "DBS FOUNDATION CODING CAMP",
      period: "Feb 2025 - Jul 2025",
      description: "Completed a structured curriculum covering Python and machine learning, contributing to the 'We're Cooked' capstone project (recipe recommendation system) using Hugging Face API.",
    },
    {
      id: 3,
      role: "Data Scientist Intern",
      company: "ID/X PARTNERS X RAKAMIN ACADEMY",
      period: "Jan 2025 - Feb 2025",
      description: "Analyzed large datasets to identify behavioral trends and developed deep learning models for predictive analysis to support data-driven decision making.",
    },
  ],

  organizationExperiences: [
    {
      id: 1,
      role: "Ministry of Creative Economic",
      company: "BEM FILKOM UB",
      period: "Jan 2024 - Dec 2024",
      description: "Managed the entrepreneurship program lifecycle (FILKOMPRENEUR), led a cross-functional team, and built collaborations with external partners for student business training.",
    },
    {
      id: 2,
      role: "Staff of Creative Economic Ministry",
      company: "BEM FILKOM UB",
      period: "Mar 2023 - Nov 2023",
      description: "Established collaborations with companies for academic initiatives, oversaw merchandise sales, and managed partnerships from outreach to transaction handling.",
    },
    {
      id: 3,
      role: "Vice Head Division of Finance and Sponsorship",
      company: "Brawijaya Film Festival",
      period: "April 2023 - Oct 2023",
      description: "Work in the sponsorship department, collaborate to create sponsorship proposals. Distribute and invite companies to become sponsors for our event.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "We're Cooked",
      description: "Smart recipe recommendation web app utilizing Hybrid Filtering (TensorFlow & Scikit-Learn) to suggest meals based on available ingredients and reduce food waste.",
      tech: ["TensorFlow", "Hugging Face", "React JS"],
      link: "http://werecooked.my.id/",
      github: "https://github.com/werecooked2025",
      image: project1
    },
    {
      id: 2,
      title: "Football Analysis & AI Summary",
      description: "Analyzed 2024-2025 European football match data and integrated IBM Granite LLM via Replicate API to generate automated AI summaries of team performance and trends.",
      tech: ["IBM Granite", "LLM", "Pandas", "Replicate API"],
      link: "",
      github: "https://github.com/wingscode123/ibm-skillsbuild-football-analysis-2024-2025",
      image: project2
    },
    {
      id: 3,
      title: "Student Depression Prediction",
      description: "Binary classification model to detect early depression risk in students using Logistic Regression. Achieved 89% Recall and 0.92 AUC-ROC after applying PCA and feature scaling.",
      tech: ["Python", "Scikit-Learn", "Machine Learning"],
      link: "",
      github: "https://github.com/wingscode123/studepression_predictive-analytic",
      image: project3
    },
    {
      id: 4,
      title: "Movie RecSys (TMDB 5000)",
      description: "Content-Based Filtering recommendation system utilizing Cosine Similarity and TF-IDF to solve the 'cold-start' problem for new users, achieving ~80% precision.",
      tech: ["Python", "NLP", "Cosine Similarity"],
      link: "",
      github: "https://github.com/wingscode123/movies_recsys_tmdb5000",
      image: project4
    },
    {
      id: 5,
      title: "Celebrity Face Recognition",
      description: "End-to-end image classification system to recognize celebrity faces using Scikit-learn and OpenCV, integrated into a Python Flask web interface.",
      tech: ["OpenCV", "Flask", "Scikit-Learn"],
      link: "",
      github: "https://github.com/wingscode123/CelebrityFaceRecognition_DS",
      image: project5
    },
    {
      id: 6,
      title: "Wine Quality Prediction",
      description: "Predictive model utilizing XGBoost and Scikit-Learn to assess wine quality based on physicochemical properties, optimized for high accuracy.",
      tech: ["XGBoost", "Pandas", "Matplotlib"],
      link: "",
      github: "https://github.com/wingscode123/Wine-Quality-Prediction-Machine-Learning",
      image: project6
    },
  ]
};