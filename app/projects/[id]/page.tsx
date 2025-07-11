"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  BookOpen,
  Brain,
  Users,
  Gamepad2,
  Smartphone,
  Target,
  Building2,
  Layers,
  FileText,
  Shield,
  BarChart2,
  Code,
  Zap,
  TrendingUp,
  Edit3,
  MessageCircle,
  Settings,
  UserCheck,
  ExternalLink,
  Database,
  TestTube,
  Activity,
  PieChart,
  Bug,
  Lock,
  AlertTriangle,
  Terminal,
  Eye,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Sample project data - in a real app, this would come from a database or API
const projectsData = [
  {
    id: "company-services",
    title: "Company Services: A Full Stack Sales Crediting Web App",
    description:
      "A full-stack enterprise platform developed in a collaborative environment for a leading pharmaceutical company. The app includes modules for Sales Crediting, Product Complaints, and Admin Tools, with features such as dynamic forms, PDF export, role-based access, and dashboard analytics. Employed RESTful APIs, Agile development practices, and production-ready deployment workflows.",
    longDescription:
      "This comprehensive enterprise platform was developed to streamline sales crediting processes for a major pharmaceutical company. The application features a modular architecture that separates concerns between Sales Crediting, Product Complaints, and Administrative Tools. The system implements role-based access control to ensure data security and proper authorization across different user types including sales representatives, managers, and administrators.\n\nThe platform includes dynamic form generation based on product categories, real-time validation, and comprehensive reporting tools. PDF export functionality allows users to generate professional reports for stakeholders. The dashboard provides analytics on sales performance, complaint resolution times, and other key metrics that help management make data-driven decisions.\n\nThe development process followed Agile methodologies with two-week sprints, regular stakeholder reviews, and continuous integration practices. The deployment workflow includes staging environments for testing and a robust production environment with monitoring and automated backup systems.",
    videoUrl: "https://youtu.be/oOecBPA6JKk",
    githubUrl: "https://github.com/josef/company-services",
    stack: ["React", "Ruby on Rails API", "MySQL", "NGINX", "Puma", "Ubuntu", "Docker", "Redis", "Sidekiq"],
    clientImage: "/images/company-services/cathay-drug-logo.jpeg",
    clientName: "The Cathay Drug Company, Inc.",
    gallery: [
      "/images/company-services/admin-dashboard.png",
      "/images/company-services/sales-memos-list.png",
      "/images/company-services/create-memo.png",
      "/images/company-services/memo-details.png",
      "/images/company-services/file-complaint.png",
      "/images/company-services/complaint-details.png",
    ],
    galleryDescriptions: [
      "Admin Dashboard - User management interface with role-based access control",
      "Sales Crediting Memos - List view showing memo status and management",
      "Create Memo - Dynamic form for creating new sales crediting memos",
      "Memo Details - Detailed view of approved sales crediting memo with financial data",
      "File Complaint - Product complaint submission form with comprehensive fields",
      "Complaint Details - Product complaint details view with PDF export functionality",
    ],
    features: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Enterprise Solution",
        description: "Built for a leading pharmaceutical company to streamline internal operations",
      },
      {
        icon: <Layers className="h-6 w-6" />,
        title: "Modular Architecture",
        description: "Includes dynamic modules for Sales Crediting, Product Complaints, and Admin Tools",
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Advanced Form Handling",
        description: "Supports dynamic form handling and PDF export for efficient data processing",
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Role-Based Access",
        description: "Implements role-based access control for secure and customized user experiences",
      },
      {
        icon: <BarChart2 className="h-6 w-6" />,
        title: "Analytics Dashboard",
        description: "Features interactive dashboards with real-time analytics and reporting",
      },
      {
        icon: <Code className="h-6 w-6" />,
        title: "Modern Development",
        description: "Developed using RESTful APIs, Agile practices, and production-ready deployment workflows",
      },
    ],
    date: "March 2025",
  },
  {
    id: "enigmatika",
    title: "Capstone Project: Enigmatika – 3D Mystery Adventure Game",
    description:
      "A 3D mystery adventure mobile game designed to practice reading comprehension through interactive puzzles, NPC interactions, and dynamic storytelling. Developed in Unity3D.",
    longDescription:
      "Enigmatika is an innovative 3D mystery adventure game designed to enhance reading comprehension skills through engaging gameplay. Players navigate through a richly detailed world, solving puzzles and interacting with NPCs to uncover the story's mysteries. The game adapts to the player's reading level, gradually increasing in complexity as they progress.\n\nThe narrative is carefully crafted to incorporate educational elements without sacrificing entertainment value. Players must read and comprehend clues, dialogue, and environmental storytelling to advance through the game. The puzzles are designed to test not just reading comprehension but also critical thinking and problem-solving skills.\n\nThe development process involved extensive collaboration with educators to ensure the game's educational value while maintaining an engaging player experience. Character models and environments were created in Blender, with animations sourced from Mixamo to create realistic character movements. The game features a dynamic soundtrack that adapts to gameplay situations, enhancing immersion.",
    researchPaperUrl:
      "https://docs.google.com/document/d/14wsxHrf9u_Rxp6c9JsdR_ZXARXoWyzFT/edit?usp=sharing&ouid=117131715797188521248&rtpof=true&sd=true",
    videoUrl: "https://youtu.be/oOecBPA6JKk",
    githubUrl: "https://github.com/jjmalupet2002/Enigmatika_Version_Control",
    stack: ["Unity3D", "C#", "Blender", "Mixamo", "Adobe Photoshop", "FMOD", "ProBuilder"],
    clientImage: "/images/enigmatika/tip-logo.jpeg",
    clientName: "Technological Institute of the Philippines",
    gallery: [
      "/images/enigmatika/npc-dialogue.png",
      "/images/enigmatika/environment-blocks.png",
      "/images/enigmatika/investigation-table.png",
      "/images/enigmatika/dungeon-gameplay.png",
      "/images/enigmatika/main-menu.png",
      "/images/enigmatika/reading-puzzle.png",
    ],
    galleryDescriptions: [
      "NPC Dialogue System - Interactive conversations with hooded figure and dialogue choices",
      "3D Environment - Stone block puzzle areas with navigation and exploration mechanics",
      "Investigation Table - Interactive objects including books, magnifying glass, and clues for mystery solving",
      "Dungeon Gameplay - Isometric view showing character movement, traps, and environmental hazards",
      "Main Menu - Detective-themed interface with Continue, New Game, and Exit options",
      "Reading Comprehension Puzzle - Educational word puzzle asking about story elements with letter tiles",
    ],
    features: [
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Reading Comprehension Enhancement",
        description: "Enhances reading comprehension through story-driven gameplay",
      },
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Interactive Puzzles",
        description: "Features interactive puzzles that reinforce critical thinking",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "NPC Interactions",
        description: "Includes NPC interactions to deepen narrative engagement",
      },
      {
        icon: <Gamepad2 className="h-6 w-6" />,
        title: "3D Mystery Adventure",
        description: "Immerses players in a 3D mystery adventure setting",
      },
      {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Mobile Optimized",
        description: "Developed in Unity3D for mobile platforms with optimized performance",
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Educational Storytelling",
        description: "Combines dynamic storytelling with educational objectives",
      },
    ],
    date: "May 2025",
    impactData: [
      {
        title: "Reading Comprehension Improvement",
        image: "/images/enigmatika/statistical-analysis.png",
        metrics: [
          "Significant improvement in pre- and post-test evaluations (p = 0.166)",
          "Enhanced detail identification and vocabulary understanding",
          "Average post-test score increased from 15.60 to 19.00",
          "Reduced score variability indicating consistent learning gains",
        ],
      },
      {
        title: "Quality Evaluation Excellence",
        image: "/images/enigmatika/iso-evaluation.png",
        metrics: [
          "Achieved 4.76/6.0 average quality score (ISO 25010 framework)",
          "High ratings across usability, reliability, and security metrics",
          "Strong approval from instructors and IT professionals",
          "Exceeded industry standards for educational software quality",
        ],
      },
      {
        title: "Student Engagement Success",
        image: "/images/enigmatika/student-testing.jpeg",
        metrics: [
          "Successfully engaged students through game-based learning",
          "Supplemented Catch-Up Friday literacy activities effectively",
          "Increased student motivation and retention rates",
          "Positive feedback from pilot test participants",
        ],
      },
      {
        title: "Educational Integration Validation",
        image: "/images/enigmatika/mobile-gameplay.png",
        metrics: [
          "Validated effectiveness with senior high school students",
          "Proven integration potential for future literacy initiatives",
          "Mobile-optimized design supports classroom and home use",
          "Scalable solution for educational technology adoption",
        ],
      },
    ],
  },
  {
    id: "repmind",
    title: "RepMind: AI-Powered Web App Workout Planner",
    description:
      "A minimalist workout web app that integrates an AI coach powered by Gemini AI to guide, adapt, and personalize your fitness journey. While it offers standard manual logging, its true strength lies in its AI-driven coaching, planning, and insights — designed especially for beginners and intermediate lifters seeking clarity, guidance, and progression without the clutter.",
    longDescription:
      "RepMind revolutionizes the fitness app landscape by leveraging AI to provide personalized workout guidance. Unlike traditional workout apps that offer generic plans, RepMind uses Gemini AI to analyze user goals, fitness levels, and progress data to create truly customized workout routines. The app learns from user feedback and adapts plans accordingly, providing an experience similar to having a personal trainer.\n\nThe interface is intentionally minimalist, focusing on usability rather than overwhelming users with unnecessary features. The AI coach provides real-time feedback on workout form (when used with camera permissions), suggests appropriate weight progressions, and adjusts routines based on user recovery and performance.\n\nThe app includes features such as workout logging, progress tracking with visual charts, and AI-generated insights that help users understand their fitness journey. The recommendation engine suggests exercises based on available equipment, fitness goals, and user preferences, making it accessible for home workouts as well as gym sessions.",
    videoUrl: "https://youtu.be/oOecBPA6JKk",
    githubUrl: "https://github.com/josef/repmind-ai",
    webAppUrl: "https://rep-mind.vercel.app/",
    stack: ["Next.js", "Tailwind", "Zustand", "Supabase", "Prisma", "NextAuth", "Gemini", "Vercel"],
    clientImage: "/placeholder.svg?height=200&width=400",
    clientName: "Personal Project",
    gallery: [
      "/images/repmind/workout-routines.png",
      "/images/repmind/dashboard-welcome.png",
      "/images/repmind/workout-timer.png",
      "/images/repmind/weekly-planner.png",
      "/images/repmind/onboarding-chat.png",
      "/images/repmind/ai-chat-assistant.png",
    ],
    galleryDescriptions: [
      "Workout Routines - Clean interface showing today's routine and workout library with search and filtering options",
      "Dashboard Welcome - Personalized dashboard with motivational insights, weekly split overview, and progress tracking",
      "Workout Timer - Minimalist set timer interface for tracking workout sessions with clear visual feedback",
      "Weekly Planner - Interactive weekly workout split planner with routine scheduling and management features",
      "Onboarding Chat - Personalized AI-powered onboarding flow that learns user goals, fitness level, and equipment preferences",
      "AI Chat Assistant - Floating Gemini AI coach providing contextual workout advice and real-time routine adjustments",
    ],
    features: [
      {
        icon: <Zap className="h-6 w-6" />,
        title: "AI-Powered Workout Generator",
        description:
          "Gemini creates personalized routines based on your goals, experience, and available equipment — no setup required.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Smart Progression Tracking",
        description:
          "The app detects plateaus and nudges users with timely workout modifications or exercise swaps to keep progress steady.",
      },
      {
        icon: <Edit3 className="h-6 w-6" />,
        title: "Minimalist Workout Logging",
        description:
          "Track sets, reps, and weights with a clean interface, enhanced by contextual AI tips and automatic workout summaries.",
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Floating Gemini Coach",
        description:
          "A non-intrusive assistant chat floats across all pages, offering contextual advice, generating plans, and adjusting routines in real time.",
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Interactive Routine Builder",
        description:
          "Users can manually build, reorder, and complete workouts — or let Gemini adapt them instantly using structured feedback.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Personalized Onboarding via Chat",
        description:
          "Gemini's initial conversation learns about your goals and limitations, then instantly delivers a starter plan tailored just for you.",
      },
    ],
    date: "Jun 2025",
  },
  {
    id: "movie-sentiment-classifier",
    title: "Movie Review Sentiment Classifier",
    description:
      "A Python-based machine learning tool to classify movie reviews into sentiments (positive or negative). The tool leverages text preprocessing, feature engineering, and supervised learning with scikit-learn classifiers. Applied Software Quality Assurance (SQA) techniques, including unit tests and system validation.",
    longDescription:
      "This machine learning project demonstrates the application of natural language processing and supervised learning techniques to classify movie reviews by sentiment. The system processes raw text data through comprehensive preprocessing pipelines, including text cleaning, tokenization, stemming, and vectorization using TF-IDF and bag-of-words approaches.\n\nThe project implements multiple classification algorithms including Naive Bayes, Support Vector Machines, and Logistic Regression, with comprehensive model evaluation using cross-validation, confusion matrices, and performance metrics. Feature engineering techniques are applied to extract meaningful patterns from text data, while hyperparameter tuning optimizes model performance.\n\nA key focus of this project was implementing Software Quality Assurance practices throughout the development lifecycle. This included comprehensive unit testing for all modules, integration testing for the complete pipeline, and system validation to ensure reliable performance. The codebase follows modular design principles with clear separation of concerns, making it maintainable and extensible for future enhancements.",
    videoUrl: "https://youtu.be/oOecBPA6JKk",
    githubUrl: "https://github.com/jjmalupet2002/movie-review-sentiment-classifier",
    stack: ["Python", "scikit-learn", "pandas", "numpy", "nltk", "matplotlib", "seaborn", "joblib", "unittest"],
    clientImage: "/images/python-logo.jpeg",
    clientName: "Academic Project",
    gallery: [
      "/images/movie-sentiment/unit-tests.png",
      "/images/movie-sentiment/naive-bayes-results.png",
      "/images/movie-sentiment/logistic-regression-results.png",
      "/images/movie-sentiment/logreg-confusion-matrix.png",
      "/images/movie-sentiment/nb-confusion-matrix.png",
      "/images/movie-sentiment/text-preprocessing.png",
    ],
    galleryDescriptions: [
      "Unit Testing Framework - Terminal output showing successful execution of preprocessing unit tests with 3 tests completed in 0.002s, demonstrating SQA implementation",
      "Naive Bayes Classification Results - Performance metrics showing 84.74% accuracy with detailed precision, recall, and F1-score breakdown for positive/negative sentiment classification",
      "Logistic Regression Performance - Superior results with 89.04% accuracy, displaying comprehensive classification report with precision, recall, and F1-score metrics for both sentiment classes",
      "Logistic Regression Confusion Matrix - Visual heatmap showing classification performance with 4351 true negatives, 4553 true positives, and minimal false classifications",
      "Naive Bayes Confusion Matrix - Heatmap visualization displaying model performance with 4183 true negatives, 4291 true positives, showing slightly higher misclassification rates",
      "Text Preprocessing Pipeline - Complete workflow showing original movie review text, cleaned version, stemmed output, and feature matrix dimensions (50000, 5000) for ML processing",
    ],
    features: [
      {
        icon: <Database className="h-6 w-6" />,
        title: "Text Preprocessing Pipeline",
        description: "Comprehensive text cleaning, stemming, and vectorization using NLTK and scikit-learn",
      },
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Multiple ML Algorithms",
        description: "Implementation of Naive Bayes, SVM, and Logistic Regression with performance comparison",
      },
      {
        icon: <TestTube className="h-6 w-6" />,
        title: "Software Quality Assurance",
        description: "Comprehensive unit testing, integration testing, and system validation practices",
      },
      {
        icon: <Activity className="h-6 w-6" />,
        title: "Model Evaluation",
        description: "Cross-validation, confusion matrices, and detailed performance metrics analysis",
      },
      {
        icon: <PieChart className="h-6 w-6" />,
        title: "Data Visualization",
        description: "Interactive charts and plots using matplotlib and seaborn for insights visualization",
      },
      {
        icon: <Code className="h-6 w-6" />,
        title: "Modular Architecture",
        description: "Clean, maintainable code structure with proper documentation and requirements management",
      },
    ],
    date: "December 2024",
  },
  {
    id: "barangay-blueteam",
    title: "Strengthening Application Security: Blue Team Mitigation Strategies for Barangay Management System",
    description:
      "A comprehensive blue team cybersecurity project focused on evaluating and improving the security posture of a Barangay Management System. Conducted vulnerability assessments, simulated attacks, and implemented defensive mitigation strategies including CSRF protection and brute force prevention mechanisms.",
    longDescription:
      "This project focused on evaluating and improving the security posture of the Barangay Management System, a web-based platform designed to streamline certificate requests and approvals between citizens, zone leaders, and barangay officials. Through simulated attacks, we identified critical vulnerabilities in the authentication and form-handling functionalities.\n\nThe project involved conducting targeted penetration testing on key features such as login authentication and dashboard modals, followed by implementing comprehensive blue team mitigation strategies. We simulated brute force attacks to evaluate login security and conducted Cross-Site Request Forgery (CSRF) assessments to test the system's resilience against unauthorized form submissions.\n\nDefensive countermeasures were then designed and implemented, including CSRF token integration for all form submissions, failed login monitoring with IP-based tracking, and session termination after consecutive failed attempts. The project concluded with thorough verification and retesting to ensure the implemented countermeasures effectively blocked unauthorized actions and improved the overall security posture of the system.",
    videoUrl: "https://youtu.be/oOecBPA6JKk",
    githubUrl: "https://github.com/josef/barangay-blueteam-security",
    stack: ["PHP", "MySQL", "JavaScript", "CSRF Tokens", "Session Management", "IP Tracking", "Security Headers"],
    clientImage: "/images/enigmatika/tip-logo.jpeg",
    clientName: "Technological Institute of the Philippines",
    gallery: [
      "/images/barangay-blueteam/login-comparison.png",
      "/images/barangay-blueteam/brute-force-mitigation.png",
      "/images/barangay-blueteam/csrf-token-generation.png",
      "/images/barangay-blueteam/dashboard-interface.png",
      "/images/barangay-blueteam/csrf-form-protection.png",
      "/images/barangay-blueteam/exponential-backoff.png",
    ],
    galleryDescriptions: [
      "System Comparison - Side-by-side view of the original vulnerable login interface versus the security-hardened version with improved authentication mechanisms",
      "Brute Force Protection Implementation - PHP code showing IP address tracking and lockout logic that automatically blocks users after multiple failed login attempts",
      "CSRF Token Generation - Server-side PHP implementation of CSRF protection using secure random token generation with bin2hex(random_bytes(32)) for form validation",
      "Barangay Management Dashboard - Secure dashboard interface displaying resident records with proper access controls and session management protections",
      "CSRF Form Integration - HTML form structure and PHP validation code showing hidden CSRF token fields and server-side validation logic for preventing unauthorized requests",
      "Exponential Backoff Implementation - Advanced brute force mitigation using exponential delay mechanisms that increase wait times based on the number of failed login attempts",
    ],
    features: [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Vulnerability Assessment & Exploitation Simulation",
        description:
          "Conducted targeted penetration testing on login authentication and dashboard modals to identify security weaknesses",
      },
      {
        icon: <AlertTriangle className="h-6 w-6" />,
        title: "Brute Force Attack Simulation",
        description:
          "Simulated repeated password guessing attempts to evaluate login security and identify authentication vulnerabilities",
      },
      {
        icon: <Bug className="h-6 w-6" />,
        title: "Cross-Site Request Forgery (CSRF) Testing",
        description:
          "Assessed system resilience against unauthorized form submissions by authenticated users through CSRF attack simulation",
      },
      {
        icon: <Lock className="h-6 w-6" />,
        title: "CSRF Token Protection Implementation",
        description:
          "Integrated secure CSRF tokens in all form submissions to validate legitimate requests and prevent unauthorized actions",
      },
      {
        icon: <Eye className="h-6 w-6" />,
        title: "Failed Login Monitoring System",
        description:
          "Implemented IP-based tracking and session management to monitor and respond to suspicious login activities",
      },
      {
        icon: <Terminal className="h-6 w-6" />,
        title: "Session Termination & Exponential Backoff",
        description:
          "Configured automatic session termination after 5 failed attempts with exponential delay mechanisms for enhanced security",
      },
    ],
    date: "November 2023",
  },
  {
    id: "healhub-pentest",
    title: "Exploiting Insecure Input Handling: Shell Upload & Stored XSS Attacks on HealHub",
    description:
      "A comprehensive penetration testing project demonstrating practical exploitation of web application vulnerabilities through Shell Upload and Stored Cross-Site Scripting (XSS) attacks. Exposed critical security flaws in input validation and file upload mechanisms, highlighting the importance of secure coding practices.",
    longDescription:
      "This penetration testing project demonstrates practical exploitation of web application vulnerabilities through Shell Upload and Stored Cross-Site Scripting (XSS) attacks. The target system was a website named HealHub, hosted on InfinityFree. The attacks focused on the Contact Form and Admin Page, exposing the risks of improper input validation and insecure file upload mechanisms.\n\nThe project involved multiple attack vectors including reverse shell upload through vulnerable file upload functionality, remote command execution on the target server, and stored XSS attacks to steal administrative session cookies. Through careful reconnaissance and exploitation, the project demonstrated how attackers can gain unauthorized access to sensitive administrative functions.\n\nThis ethical hacking exercise highlighted the critical importance of secure coding practices, proper input sanitization, and robust access controls to protect web applications from common but severe security threats. The findings provide valuable insights for developers and security professionals on implementing effective security measures.",
    videoUrl: "https://youtu.be/hDw7Zkefdpw",
    githubUrl:
      "https://www.canva.com/design/DAGYlrvMgWk/5XCjkijwl3ogWKq2z1BLug/view?utm_content=DAGYlrvMgWk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he1e108254f",
    stack: ["PHP", "JavaScript", "Netcat", "Kali Linux", "Reverse Shells", "XSS", "InfinityFree", "revshells.com"],
    clientImage: "/images/enigmatika/tip-logo.jpeg",
    clientName: "Technological Institute of the Philippines",
    gallery: [
      "/images/healhub-pentest/reverse-shell-generator.png",
      "/images/healhub-pentest/vulnerable-contact-form.png",
      "/images/healhub-pentest/admin-dashboard-access.png",
      "/images/healhub-pentest/reverse-shell-access.png",
      "/images/healhub-pentest/netcat-cookie-capture.png",
      "/images/healhub-pentest/cookie-stealing-xss.png",
      "/images/healhub-pentest/healhub-contact-interface.png",
      "/images/healhub-pentest/shell-directory-listing.png",
    ],
    galleryDescriptions: [
      "Reverse Shell Generator - Using revshells.com to generate PHP reverse shell payload with custom IP and port configuration for remote access",
      "Vulnerable Contact Form - HealHub contact form showing file upload functionality without proper validation, allowing malicious file uploads",
      "Admin Dashboard Access - Successful unauthorized access to HealHub admin panel showing 'MANAGE UNREAD QUERIES' interface after cookie theft",
      "Remote Command Execution - Web-based shell interface showing successful file directory listing and remote command execution capabilities",
      "Cookie Capture via Netcat - Terminal showing netcat listener capturing stolen session cookies through XSS payload execution",
      "XSS Cookie Stealing - Browser developer tools displaying stolen PHPSESSID cookie captured through malicious JavaScript payload",
      "HealHub Target Interface - Clean contact form interface of the target application showing the attack surface for exploitation",
      "Shell File Listing - Directory listing showing uploaded shell files and other PHP scripts demonstrating successful file upload exploitation",
    ],
    features: [
      {
        icon: <Upload className="h-6 w-6" />,
        title: "Reverse Shell Upload Exploit",
        description:
          "Generated PHP reverse shell using revshells.com and uploaded via vulnerable contact form without validation",
      },
      {
        icon: <Terminal className="h-6 w-6" />,
        title: "Remote Command Execution",
        description: "Executed system commands remotely including file listing, system info, and process management",
      },
      {
        icon: <Bug className="h-6 w-6" />,
        title: "Stored XSS Attack",
        description: "Crafted malicious JavaScript payload to steal session cookies via contact form submission",
      },
      {
        icon: <Eye className="h-6 w-6" />,
        title: "Cookie Theft & Capture",
        description: "Used netcat listener to capture admin cookies and demonstrate session hijacking techniques",
      },
      {
        icon: <Lock className="h-6 w-6" />,
        title: "Authentication Bypass",
        description: "Gained unauthorized admin access using stolen cookies without legitimate authentication",
      },
      {
        icon: <AlertTriangle className="h-6 w-6" />,
        title: "Security Vulnerability Assessment",
        description: "Comprehensive analysis of input validation flaws and insecure file upload mechanisms",
      },
    ],
    date: "September 2024",
  },
]

// Gallery Carousel Component
function GalleryCarousel({ images, descriptions }: { images: string[]; descriptions: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-400">Project Gallery</h2>

      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden">
        {/* Main Image Display */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-800/50">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={descriptions[currentIndex] || `Project screenshot ${currentIndex + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-contain transition-opacity duration-300"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 backdrop-blur-sm text-purple-400 p-2 rounded-full hover:bg-gray-800/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 backdrop-blur-sm text-purple-400 p-2 rounded-full hover:bg-gray-800/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Image Description */}
        <div className="p-4 bg-gray-800/30 border-b border-gray-700/50">
          <p className="text-gray-300 text-sm">{descriptions[currentIndex]}</p>
        </div>

        {/* Slider Indicators */}
        <div className="p-4 bg-gray-800/30">
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-purple-400 scale-110" : "bg-gray-600 hover:bg-gray-500",
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Features Component
function FeaturesSection({ features }: { features: any[] }) {
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-purple-400">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)] transition-all duration-300"
          >
            <div className="text-purple-400 mt-1">{feature.icon}</div>
            <div>
              <h3 className="font-medium text-gray-200 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Output and Impact Carousel Component
function OutputImpactCarousel({ impactData }: { impactData: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % impactData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + impactData.length) % impactData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          💥 Output & Impact
        </h2>
        <p className="text-gray-400">Measurable outcomes and educational impact</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-200 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden">
        {/* Main Carousel Display */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {impactData.map((impact, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  {/* Image Section - 50% width on desktop */}
                  <div className="lg:w-1/2 relative overflow-hidden bg-gray-800/50">
                    <Image
                      src={impact.image || "/placeholder.svg"}
                      alt={impact.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
                  </div>

                  {/* Content Section - 50% width on desktop */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div
                      className="transform transition-all duration-500"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {/* Accent Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-200 mb-4 rounded-full"></div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-200 mb-6 leading-tight">{impact.title}</h3>

                      {/* Metrics */}
                      <div className="space-y-4">
                        {impact.metrics.map((metric: string, metricIndex: number) => (
                          <div
                            key={metricIndex}
                            className={cn(
                              "flex items-start gap-3 transform transition-all duration-300",
                              isHovered && `translate-x-2 transition-delay-${metricIndex * 100}`,
                            )}
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-gray-300 text-lg leading-relaxed">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 backdrop-blur-sm text-purple-400 p-3 rounded-full hover:bg-gray-800/70 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous impact"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 backdrop-blur-sm text-purple-400 p-3 rounded-full hover:bg-gray-800/70 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next impact"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="p-6 bg-gray-800/30 border-t border-gray-700/50">
          <div className="flex justify-center space-x-3">
            {impactData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-4 h-4 rounded-full transition-all duration-300 hover:scale-110",
                  currentIndex === index
                    ? "bg-purple-400 scale-110 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    : "bg-gray-600 hover:bg-gray-500",
                )}
                aria-label={`Go to impact ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    // Find the project data based on the ID
    const foundProject = projectsData.find((p) => p.id === params.id)
    setProject(foundProject)
  }, [params.id])

  if (!mounted || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Button
          variant="ghost"
          className="mb-8 text-purple-400 hover:text-purple-300 hover:bg-gray-800/50"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        <div className="space-y-12">
          {/* Project Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              {project.title}
            </h1>
            <p className="text-gray-400">{project.date}</p>
          </div>

          {/* Video Section */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoUrl.split("youtu.be/")[1]}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Project Overview</h2>
            <div className="text-gray-300 space-y-4">
              {project.longDescription.split("\n\n").map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Links Section */}
            <div className="mt-6 pt-4 border-t border-gray-800/50 flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
              {project.webAppUrl && (
                <a
                  href={project.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Web App Link</span>
                </a>
              )}
            </div>
          </div>

          {/* Research Paper Link */}
          {project.id === "enigmatika" && project.researchPaperUrl && (
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Research Paper</h2>
              <p className="text-gray-300 mb-4">
                For detailed methodology, analysis, and findings, please refer to our comprehensive research paper.
              </p>
              <a
                href={project.researchPaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-400 text-gray-900 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                <span>View Research Paper</span>
              </a>
            </div>
          )}

          {/* Features Section */}
          {project.features && <FeaturesSection features={project.features} />}

          {/* Client Section */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Client</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-white p-4 rounded-lg border border-gray-800/50">
                  <Image
                    src={project.clientImage || "/placeholder.svg"}
                    alt={project.clientName}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-medium text-gray-200">{project.clientName}</h3>
                <p className="text-gray-400 mt-2">
                  {project.id === "enigmatika"
                    ? "This capstone project was developed as part of the academic curriculum at the Technological Institute of the Philippines, showcasing the integration of educational technology with interactive gaming to enhance learning outcomes in reading comprehension."
                    : project.id === "company-services"
                      ? "This enterprise platform was developed for The Cathay Drug Company, Inc., a leading pharmaceutical company in the Philippines. The project showcases our ability to deliver high-quality, scalable solutions tailored to complex business requirements in the healthcare industry."
                      : project.id === "movie-sentiment-classifier"
                        ? "This machine learning project was developed as part of academic coursework, demonstrating proficiency in natural language processing, supervised learning, and software quality assurance practices. The project showcases the application of industry-standard ML techniques to real-world text classification problems."
                        : project.id === "healhub-pentest"
                          ? "This ethical hacking project was conducted as part of cybersecurity coursework, demonstrating practical penetration testing skills and vulnerability assessment techniques. The project showcases responsible disclosure practices and the importance of secure coding in web application development."
                          : `This project was developed for ${project.clientName}, showcasing our ability to deliver high-quality solutions tailored to specific client needs.`}
                </p>
              </div>
            </div>
          </div>

          {/* Project Stack */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Project Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800/70 text-gray-300 px-3 py-2 rounded-lg border border-gray-700/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Carousel Section */}
          <GalleryCarousel images={project.gallery} descriptions={project.galleryDescriptions || []} />

          {/* Output and Impact Section */}
          {project.id === "enigmatika" && project.impactData && (
            <OutputImpactCarousel impactData={project.impactData} />
          )}

          {/* Call to Action */}
          <div className="flex justify-center pt-8">
            <Button
              className="bg-gradient-to-r from-purple-500 to-purple-400 text-gray-900 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
