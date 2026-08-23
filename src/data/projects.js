const projects = [
  {
    id: 1,

    featured: true,

    title: "PhishGuard AI",

    subtitle: "AI-Powered Phishing Detection & Threat Intelligence Platform",

    category: "Cyber Security",

    description:
      "A security-focused web application that analyzes suspicious URLs using Machine Learning, rule-based risk analysis and external threat intelligence to identify potentially malicious websites.",

    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Random Forest",
      "SQLite",
      "VirusTotal API",
      "Bootstrap",
      "ReportLab"
    ],

    features: [
      "Machine Learning URL Detection",
      "Rule-Based Risk Analysis",
      "VirusTotal Threat Intelligence",
      "Domain Intelligence",
      "IOC Summary",
      "MITRE ATT&CK Mapping",
      "Threat Dashboard",
      "Scan History",
      "PDF & CSV Reports"
    ],

    impact:
      "Designed to help security analysts quickly investigate suspicious URLs and combine multiple security signals into a single analysis.",

    github: "#",

    demo: "#",

    image: "/projects/phishgaurd.png.jpeg"
  },


  {
    id: 2,

    featured: false,

    title: "House-Price Prediction using ML",

    subtitle: "ML House-price Prediction Assistant",

    category: "Machine Learning",

    description:
      "The House-Price Prediction that uses Machine Learning techniques to predict house prices based on user-provided inputs.",

    technologies: [
      "Python",
      "Flask",
      "NumPy",
      "Pandas",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
      "ML-Powered Responses",
      "House Price Prediction Assistant",
      "Interactive Prediction Interface",
      "Flask Backend",
      "XGBoost Integration"
    ],

    impact:
      "Provides House Buyers with a interface for Predicting House-related information more efficiently.",

    github: "#",

    demo: "#",

    image: "/projects/chatbot.png.jpeg"
  },


  {
    id: 3,

    featured: false,

    title: "SOC Login Monitoring",

    subtitle: "Security Monitoring & Brute-Force Detection",

    category: "SOC",

    description:
      "A security monitoring project demonstrating authentication logging, failed-login detection and brute-force monitoring concepts for a Security Operations Center environment.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Wazuh",
      "SIEM",
      "Security Monitoring"
    ],

    features: [
      "Login Activity Monitoring",
      "Failed Login Detection",
      "Brute-Force Detection",
      "Security Event Logging",
      "SIEM Integration Concept",
      "SOC Alert Monitoring"
    ],

    impact:
      "Demonstrates how authentication events can be monitored and converted into actionable security alerts for SOC analysts.",

    github: "#",

    demo: "#",

    image: "/projects/soc.png.jpeg"
  }
];

export default projects;