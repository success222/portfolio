export const projects = [
  {
    id: 1,
    featured: true,
    status: "In progress",
    slug: "research-intelligence-platform",
    title: "Research Intelligence Platform",

    tagline:
      "An AI-powered research intelligence platform for collecting, organizing, and exploring information.",

    description:
      "A centralized platform that transforms fragmented information from articles, reports, research, and other sources into searchable knowledge, analytics, and AI-powered insights.",

    overview:
      "The Research Intelligence Platform is an AI-powered knowledge platform that helps users discover, organize, and analyze information from trusted sources. By transforming fragmented content into a searchable knowledge base with AI-powered search and insights, it enables faster research, deeper understanding, and more informed decision-making across domains.",  

    approach:
      "Designed and built an AI-powered platform that collects information from trusted sources, structures it into a searchable knowledge base, and lays the foundation for semantic search, analytics, and intelligent research workflows.",

    tech: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
    ],

    outcome:
      "Currently in active development. The platform includes automated content ingestion, structured data storage, and AI-ready processing pipelines, with future releases focused on semantic search, AI assistants, knowledge graphs, and advanced analytics.",
    
    github: "https://github.com/success222/research-intelligence-platform",

    demo: null,
  },

  {
    id: 2,
    featured: true,
    slug: "vehicle-health-assistant",
    title: "Vehicle Health Assistant",

    tagline:
      "An AI-powered assistant for vehicle diagnostics, maintenance, and support.",

    description:
      "An intelligent assistant that combines large language models with structured vehicle knowledge to help users diagnose issues, understand maintenance needs, and receive context-aware recommendations.",

    overview:
      "The Vehicle Health Assistant provides an interactive AI experience for vehicle owners by interpreting maintenance information, answering technical questions, and assisting with troubleshooting. It demonstrates how large language models can be combined with structured domain knowledge to improve user support.",

    approach:
      "Built a conversational AI assistant using Gemini, FastAPI, and structured vehicle knowledge to help users understand maintenance requirements, troubleshoot common issues, and receive context-aware guidance.",

    tech: [
      "Python",
      "FastAPI",
      "Gemini",
      "Pydantic",
      "Docker",
    ],

    outcome:
      "Delivered a production-ready LLM application demonstrating structured AI responses and modern backend architecture, with future plans for predictive maintenance, retrieval-augmented generation, and vehicle telemetry integration.",

    github: "https://github.com/success222/vehicle-health-assistant",

    demo: "https://vehicle-health-assistant-3z8k.onrender.com/docs",
  },

  {
    id: 3,
    featured: false,
    slug: "cardiometabolic-risk-prediction",
    title: "Cardiometabolic Risk Prediction",

    tagline:
      "A machine learning system for predicting cardiometabolic disease risk from clinical and lifestyle data.",

    description:
      "An end-to-end machine learning application that predicts cardiometabolic risk using demographic, clinical, and lifestyle indicators while providing interpretable insights into risk factors.",
    
    overview:
      "A predictive machine learning application that estimates cardiometabolic risk using engineered features and clinical measurements.",

    approach:
      "Developed an end-to-end machine learning pipeline using NHANES health data, covering preprocessing, feature engineering, model training, evaluation, and deployment through a FastAPI application.",

    tech: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Docker",
    ],

    outcome:
      "Produced a deployable prediction system that demonstrates a complete machine learning workflow, with future work focused on explainable AI, broader validation, and improved clinical performance.",

    github: "https://github.com/success222/cardiometabolic-risk-pred",

    demo: "https://cardiometabolic-risk-pred.onrender.com/",
  },

  {
    id: 4,
    featured: false,
    slug: "tb-classification",
    title: "Tuberculosis Classification Using Deep Learning",

    tagline:
      "A comparative deep learning study of convolutional neural network architectures for tuberculosis classification from chest X-ray images.",

    description:
      "A medical image classification project investigating deep learning approaches for tuberculosis screening using chest X-ray images. The project compares multiple CNN architectures to evaluate their performance in distinguishing tuberculosis-positive and normal chest X-ray images.",

    overview:
      "This project explores the application of deep learning to tuberculosis classification from chest radiographs. It involves developing and comparing five models: a baseline CNN, an optimised CNN, ResNet50, DenseNet121, and MobileNetV2.",

    approach:
      "Implemented a comparative deep learning workflow involving image preprocessing, data augmentation, model development, training, and evaluation. The study examines both custom CNN architectures and established transfer learning architectures to assess their suitability for tuberculosis classification.",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "ResNet50",
      "DenseNet121",
      "MobileNetV2",
    ],

    outcome:
      "Developed and evaluated five deep learning models for tuberculosis classification, providing a comparative assessment of different CNN architectures for medical image analysis.",

    github: "https://github.com/success222/tb-classification",

    demo: null,
  },

  {
    id: 5,
    featured: false,
    slug: "weather-app",
    title: "Weather App",
    tagline: "A full-stack application for retrieving, managing, and exploring weather information.",
    description:
      "A full-stack weather application that integrates external weather and geocoding APIs with a PostgreSQL database. Users can retrieve current weather and forecasts, save and manage weather records, export data, and discover videos related to selected locations.",
    overview:
      "The application provides weather information for searched locations and the user's current browser location. It supports multiple forecast durations, custom forecast start dates, saved weather records, and location-related video discovery.",
    approach:
      "Built with a FastAPI backend and React frontend. The backend handles weather retrieval, location processing, validation, database persistence, CRUD operations, and data exports. External APIs provide weather, geocoding, and YouTube video data.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "HTTPX",
      "Alembic",
      "Pytest",
      "Vite",
    ],
    outcome:
      "Implemented current weather retrieval, 3–10-day forecasts, browser geolocation, saved weather record management, JSON and CSV exports, and location-related YouTube video discovery. Automated tests cover reverse-geocoding behavior, and the application has undergone end-to-end manual testing.",
    github: "https://github.com/success222/weather-app",
    demo: null,
  },

  {
    id: 6,

    slug: "sleep-disorder-prediction",

    title: "Sleep Disorder Prediction System",

    tagline:
      "A deployed machine learning application for predicting sleep disorders.",

    description:
      "A machine learning application that predicts sleep disorder outcomes from lifestyle and physiological features through an interactive web application.",

    overview:
      "An end-to-end machine learning project that covers data preprocessing, feature engineering, model training, evaluation, and deployment as a Flask web application.",

    approach:
      "Built and deployed a supervised machine learning application that predicts sleep disorders from demographic, physiological, and lifestyle data through an interactive web interface.",

    tech: [
      "Python",
      "Scikit-learn",
      "Flask",
      "FastAPI",
    ],

    outcome:
      "Delivered a fully deployed end-to-end machine learning application, with future improvements focused on explainability, cloud infrastructure, and integration with wearable health data.",

    github: "https://github.com/success222/Sleep-Disorder-New",

    demo: "https://sleep-disorder-new.onrender.com/",
  },

  {
    id: 7,

    slug: "asd-screening-model",

    title: "ASD Screening Model",

    tagline:
      "A machine learning model for early autism spectrum disorder screening in children.",

    description:
      "A predictive machine learning project that compares multiple classification algorithms for autism spectrum disorder screening using child assessment data.",

    overview:
      "This project evaluates multiple supervised machine learning algorithms to support early autism screening. It focuses on model performance, healthcare applicability, and interpretability for child health contexts.",

    approach:
      "Compared multiple supervised machine learning algorithms, including Logistic Regression, Support Vector Machines, and Random Forest, to identify an effective approach for autism screening.",

    tech: [
      "Python",
      "Scikit-learn",
      "Jupyter Notebook",
    ],

    outcome:
      "Achieved approximately 98% classification accuracy with an ROC-AUC of 1.00, with future work aimed at explainable AI, external validation, and deployment.",

    github:
      "https://github.com/success222/ASD-Prediction-in-Children/tree/main",

    demo: null,
  },

  {
    id: 8,

    slug: "autism-quality-of-life-analysis",

    title: "Quality of Life in Children with Autism Spectrum Disorder Analysis",

    tagline:
      "A data analysis project exploring factors associated with quality of life among children with autism spectrum disorder.",

    description:
      "An end-to-end data analysis project involving data cleaning, exploratory analysis, visualization, and interpretation of factors influencing quality of life in children with autism spectrum disorder.",

    overview:
      "This project applies exploratory data analysis techniques to understand patterns in quality of life among children with autism spectrum disorder, providing insights into interventions and outcome measures.",

    approach:
      "Performed data cleaning, exploratory analysis, visualization, and statistical exploration to identify patterns influencing quality of life among children with autism spectrum disorder.",

    tech: [
      "Python",
      "Pandas",
      "Jupyter Notebook",
    ],

    outcome:
      "Generated actionable insights through exploratory data analysis, with opportunities for future statistical modelling, interactive dashboards, and longitudinal analysis.",

    github:
      "https://github.com/success222/QoL-Autism-Analysis",

    demo: null,
  },
];