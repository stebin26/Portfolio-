/**
 * Single source of truth for all site content.
 * Every section pulls from this file — nothing hardcoded in components.
 */

/* ---------- Profile ---------- */

// Public assets must be prefixed with Vite's base path ('/Portfolio-/' on GitHub
// Pages) — plain '/file.jpg' URLs break when the site is served from a subpath.
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

export const profile = {
  name: 'Stebin P B',
  firstName: 'Stebin',
  tagline: 'Data Scientist & ML Engineer',
  taglineCaps: 'DATA SCIENTIST & ML ENGINEER',
  photo: asset('stebin-photo.jpg'),
  heroHeadline:
    'I build machine learning systems that are accurate, scalable, and production-ready.',
  heroSubtext:
    "I'm Stebin P B, a Data Scientist and B.Tech engineer building end-to-end ML, analytics, and BI products from raw data to a deployed, tested application.",
  aboutBio:
    "B.Tech, IES College of Engineering, Thrissur (2021–2024). My final-year project won 1st Prize at a hackathon. Since Aug 2024 I've been training as a Data Scientist at Brototype, Kochi a hands on program built around shipping real end-to-end projects.",
  email: 'stebinpb44@gmail.com',
  phone: '+91 7994251369',
  phoneHref: '+917994251369',
  location: 'Kerala, India',
  github: 'https://github.com/stebin26',
  linkedin: 'https://www.linkedin.com/in/stebin26',
  resumeUrl: asset('Stebin_PB_Resume.pdf'),
} as const

/* ---------- Navigation ---------- */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const

/* ---------- Projects ---------- */

export type Project = {
  title: string
  category: string
  hook: string
  github: string
  icon: 'factory' | 'chart' | 'users' | 'scan' | 'cart' | 'graduation' | 'receipt' | 'activity' | 'trending'
  featured?: boolean
}

export const featuredProjects: Project[] = [
  {
    title: 'Industrial Operations Intelligence Platform',
    category: 'Machine Learning, MLOps',
    hook: 'End-to-end analytics platform, from ingestion to a deployed application.',
    github: 'https://github.com/stebin26/CaptsoneProject.git',
    icon: 'factory',
    featured: true,
  },
  {
    title: 'Power BI Business Intelligence for Telecom Analytics',
    category: 'Power BI, DAX',
    hook: 'Interactive dashboard tracking KPIs, segments, and revenue trends.',
    github: 'https://github.com/stebin26/Power-BI-Business-Intelligence-for-Telecom-Analytics.git',
    icon: 'chart',
    featured: true,
  },
  {
    title: 'Telecom Churn Analytics',
    category: 'Python, Scikit-learn',
    hook: 'Classification models predicting churn and its key drivers.',
    github: 'https://github.com/stebin26/Telecom-Chrun-Analaytics-.git',
    icon: 'users',
    featured: true,
  },
]

export const otherProjects: Project[] = [
  {
    title: 'Face Recognition Attendance System',
    category: 'Python, OpenCV, Deep Learning',
    hook: 'Real-time face detection and automated attendance logging.',
    github: 'https://github.com/stebin26/Face_Recognition_Attendence_System.git',
    icon: 'scan',
  },
  {
    title: 'E-Commerce Analytics ML',
    category: 'Python, ML, Segmentation',
    hook: 'Customer segmentation and sales insights from transaction data.',
    github: 'https://github.com/stebin26/Ecommerce-Analytic-ML-.git',
    icon: 'cart',
  },
  {
    title: 'Student Performance Automation',
    category: 'Python, GitHub Actions',
    hook: 'Tested, linted pipeline for predicting student outcomes.',
    github: 'https://github.com/stebin26/Student_Performance-Pytest-Pylint-CI-CD.git',
    icon: 'graduation',
  },
  {
    title: 'Invoice Analysis & Prediction',
    category: 'Python, Pandas, ML',
    hook: 'Invoice data analysis with amount prediction models.',
    github: 'https://github.com/stebin26/InvoicePRO_Prediction.git',
    icon: 'receipt',
  },
  {
    title: 'Covid-19 Prediction Model',
    category: 'Python, Time-Series',
    hook: 'Forecasting Covid-19 case trends from historical data.',
    github: 'https://github.com/stebin26/Covid-19-Prediction-Model-.git',
    icon: 'activity',
  },
  {
    title: 'Stock Prediction (F1 Phase)',
    category: 'Python, Time-Series Forecasting',
    hook: 'Stock price forecasting pipeline with evaluation metrics.',
    github: 'https://github.com/stebin26/Stock_Predict_F1_Phase.git',
    icon: 'trending',
  },
]

export const allProjects = [...featuredProjects, ...otherProjects]

/* ---------- Services ---------- */

export type Service = {
  title: string
  description: string
  icon: 'brain' | 'chart-pie' | 'rocket' | 'database'
}

export const services: Service[] = [
  {
    title: 'Machine Learning & AI',
    description: 'Predictive models, NLP, and Generative AI/RAG systems built end to end.',
    icon: 'brain',
  },
  {
    title: 'Data Visualization & BI',
    description: 'Power BI and Tableau dashboards that turn raw data into clear decisions.',
    icon: 'chart-pie',
  },
  {
    title: 'MLOps & Deployment',
    description: 'Docker, CI/CD, and cloud pipelines that take models from notebook to production.',
    icon: 'rocket',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'PySpark, ETL pipelines, and statistical analysis on large, messy datasets.',
    icon: 'database',
  },
]

/* ---------- Stats ---------- */

export type Stat = {
  value: string
  label: string
  icon: 'folder' | 'trophy' | 'cpu' | 'monitor'
}

// Honest approximate counts from the resume — swap in exact numbers if provided later.
export const stats: Stat[] = [
  { value: '9+', label: 'Projects Completed', icon: 'folder' },
  { value: '1st', label: 'Hackathon Prize Won', icon: 'trophy' },
  { value: '6+', label: 'ML/DL Models Built', icon: 'cpu' },
  { value: '2', label: 'BI Dashboards Delivered', icon: 'monitor' },
]

/* ---------- Highlights (replaces Testimonials) ---------- */

export type Highlight = {
  title: string
  description: string
  icon: 'layers' | 'trophy' | 'badge'
}

export const highlights: Highlight[] = [
  {
    title: 'Six-service platform, design to deployment',
    description:
      'Led a six-service platform from design to a deployed application for the final-year capstone.',
    icon: 'layers',
  },
  {
    title: '1st Prize — hackathon winner',
    description: 'Won 1st Prize at a hackathon for a final year engineering project.',
    icon: 'trophy',
  },
  {
    title: 'HackerRank SQL Advanced Certified',
    description: "Verified expertise in advanced SQL complex queries, joins, and optimization through HackerRank's certification.",
    icon: 'badge',
  },
]

/**
 * TODO: add real mentor/trainer quotes when available, then swap Highlights
 * for a Testimonials section in the reference style (quote + avatar + name + role).
 */
export const testimonials: never[] = []

/* ---------- Process ---------- */

export type ProcessStep = {
  number: string
  title: string
  description: string
  icon: 'search' | 'pencil' | 'code' | 'rocket'
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Explore the data, define the problem, and set success metrics.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Clean data, engineer features, and train candidate models.',
    icon: 'pencil',
  },
  {
    number: '03',
    title: 'Validate',
    description: 'Test, evaluate, and tune for accuracy and reliability.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Ship to production with CI/CD, containers, and monitoring.',
    icon: 'rocket',
  },
]

/* ---------- Skills ---------- */

export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core & Programming',
    skills: ['Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 'DSA', 'EDA'],
  },
  {
    title: 'ML & Deep Learning',
    skills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Time-Series', 'Recommender Systems'],
  },
  {
    title: 'Generative AI / NLP',
    skills: ['Transformers', 'Hugging Face', 'LLMs', 'RAG', 'LangChain', 'FAISS', 'Chroma', 'LoRA/PEFT'],
  },
  {
    title: 'Visualization & BI',
    skills: ['Power BI', 'Tableau', 'DAX', 'Data Storytelling'],
  },
  {
    title: 'Big Data, Cloud & ETL',
    skills: ['PySpark', 'Spark MLlib', 'Hadoop', 'AWS', 'Azure', 'GCP', 'Airflow'],
  },
  {
    title: 'MLOps, Backend & Databases',
    skills: ['Flask', 'FastAPI', 'Django REST', 'Docker', 'Kubernetes', 'CI/CD', 'Pytest', 'Pylint', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
]

/* ---------- Contact CTA ---------- */

export const contactCta = {
  eyebrow: "LET'S CONNECT",
  heading: "Have a role or project in mind? I'd love to hear about it.",
  button: "Let's Talk",
} as const
