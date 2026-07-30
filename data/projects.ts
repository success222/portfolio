export const projects = [
  {
    id: 1,
    featured: true,
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
    title: "TB Classification",

    tagline:
      "A deep learning computer vision model for tuberculosis detection from chest X-ray images.",

    description:
      "A computer vision project that applies deep learning techniques to classify chest X-ray images for tuberculosis screening.",

    overview:
      "This project investigates the application of convolutional neural networks to assist in tuberculosis screening using chest radiographs. It demonstrates the complete deep learning workflow from data preparation and model training to evaluation and performance analysis.",

    approach:
      "Developed and evaluated convolutional neural network models for tuberculosis screening from chest X-ray images, including preprocessing, augmentation, training, and performance evaluation.",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
    ],

    outcome:
      "Built a complete deep learning pipeline for medical image classification, providing a foundation for future explainable AI, larger-scale validation, and deployment.",

    github: "https://github.com/success222/tb-classification",

    demo: null,
  },

  {
    id: 5,

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
    id: 6,

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
    id: 7,

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