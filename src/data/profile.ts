export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; tag?: string }[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  verifiedLink?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  degree: string;
  institution: string;
  email: string;
  github: string;
  avatarUrl: string;
  location: string;
  bioSummary: string;
  philosophy: { principle: string; explanation: string }[];
  experience: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  achievements: Achievement[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Neerav Jain",
  role: "Applied Machine Learning Engineer & Systems Researcher",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  institution: "ABES Engineering College",
  email: "neeravjain91@gmail.com",
  github: "https://github.com/neeravjain91-jpg",
  avatarUrl: "https://avatars.githubusercontent.com/u/255933988?v=4",
  location: "Ghaziabad / Delhi-NCR, India",
  bioSummary:
    "Applied Machine Learning Engineer and Systems Researcher specializing in physics-informed neural modeling, spatiotemporal Earth observation systems, Siamese biometric computer vision, and high-reliability production AI architectures. Passionate about leakage-safe experimental protocols, empirical calibration, and shipping robust end-to-end applications from sensory telemetry to interactive dashboards.",
  philosophy: [
    {
      principle: "Measure Before Claiming",
      explanation:
        "Every reported metric must cite the exact evaluation partition, split protocol, ground-truth provenance, and confidence intervals. Synthetic benchmark results must never be conflated with real-world operating distributions.",
    },
    {
      principle: "Eliminate Data Leakage",
      explanation:
        "Standardizers fit only on training windows; causal history enforces strict t < T boundaries; temporal buffers isolate sequence receptive fields from evaluation folds; and biometrics test strictly across writer-disjoint cohorts.",
    },
    {
      principle: "Analyze Where Systems Fail",
      explanation:
        "Genuine progress requires understanding error envelopes—such as thermocline variance peaks in ocean modeling, false-alarm trade-offs under high-speed flight transients, or candidate recall drops during entity blocking.",
    },
    {
      principle: "Build Beyond the Notebook",
      explanation:
        "Machine learning algorithms become reliable assets only when packaged with type-safe APIs, robust unit/integration test suites, real-time dashboards, and immutable audit trails.",
    },
  ],
  experience: [
    {
      role: "Front-end Development Intern",
      organization: "Cognifyz IT Solutions Pvt. Ltd.",
      location: "Remote",
      period: "Apr 2026",
      type: "Internship",
      highlights: [
        "Crafted responsive UI layouts and high-performance interactive components for data-intelligence dashboards in an agile team environment.",
        "Integrated asynchronous REST APIs and state-driven visualization modules with zero layout shift.",
        "Maintained cross-browser compatibility and optimized mobile web rendering performance.",
      ],
      technologies: ["React", "JavaScript", "REST APIs", "CSS3 / Modern UI", "Git"],
    },
    {
      role: "IoT Engineering Trainee",
      organization: "Rajendra Gears",
      location: "Ghaziabad, India",
      period: "Aug 2024 – Sep 2024",
      type: "Industrial Traineeship",
      highlights: [
        "Engineered and deployed 3 production-ready IoT telemetry prototypes integrating NodeMCU (ESP8266), Raspberry Pi 4, and Arduino into live factory machinery.",
        "Reduced manual machinery monitoring effort by ~40% through automated telemetry capture and alerts.",
        "Achieved sub-200 ms response latency in real-time embedded sensor acquisition routines and threshold-based alarm systems.",
      ],
      technologies: ["Raspberry Pi 4", "NodeMCU", "Arduino", "C/C++", "Python", "MQTT / Serial Protocols"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      institution: "ABES Engineering College",
      location: "Ghaziabad, Uttar Pradesh, India",
      period: "2025 – 2029",
      details: [
        "Focus on Deep Learning, Statistical Machine Learning, Computer Vision, and High-Performance Systems Architecture.",
        "Research Lead on AeroPulse-X (Smart India Hackathon SIH26054 prototype) and Subsurface Ocean Reconstructions.",
      ],
    },
    {
      degree: "Diploma in Engineering",
      field: "Electronics Engineering",
      institution: "Government Polytechnic",
      location: "Ghaziabad, Uttar Pradesh, India",
      period: "2022 – 2025",
      details: [
        "Rigorous foundation in Embedded Systems, Signal Conditioning, Microcontroller Architecture, and Circuit Design.",
        "Practical hardware-software interfacing with sensors, ADCs, and microprocessors.",
      ],
    },
  ],
  skillCategories: [
    {
      title: "Machine Learning & Statistical Modeling",
      description: "Rigorous tabular algorithms, calibration, and anomaly detection",
      skills: [
        { name: "Scikit-learn", level: "Expert" },
        { name: "HistGradientBoosting", level: "Expert" },
        { name: "LightGBM", level: "Advanced" },
        { name: "Platt Scaling Calibration", level: "Expert" },
        { name: "Isolation Forest Anomaly Detection", level: "Advanced" },
        { name: "Hard-Negative Mining", level: "Advanced" },
        { name: "Metric Learning", level: "Advanced" },
        { name: "Block Bootstrapping (95% CI)", level: "Advanced" },
      ],
    },
    {
      title: "Deep Learning & Neural Architectures",
      description: "Sequence models, Siamese vision networks, and spatiotemporal representations",
      skills: [
        { name: "PyTorch 2.0+", level: "Expert" },
        { name: "Temporal Convolutional Networks (TCN)", level: "Expert" },
        { name: "ResNet Siamese Embeddings", level: "Expert" },
        { name: "Causal GRU / BiGRU", level: "Advanced" },
        { name: "Hugging Face Transformers", level: "Advanced" },
        { name: "Multi-Head Attention", level: "Advanced" },
        { name: "Vision Transformers (ViT / DeiT)", level: "Proficient" },
        { name: "TCN Autoencoders", level: "Advanced" },
      ],
    },
    {
      title: "Earth Observation & Geospatial Intelligence",
      description: "Satellite telemetry, oceanic reanalysis, and topographic geomorphology",
      skills: [
        { name: "NASA FIRMS VIIRS 375m", level: "Expert" },
        { name: "Copernicus ERA5-Land Reanalysis", level: "Expert" },
        { name: "Copernicus GLORYS12V1", level: "Advanced" },
        { name: "OSTIA SST / CMEMS Altimetry", level: "Advanced" },
        { name: "NOAA ETOPO 2022 / SRTM v3 DEM", level: "Advanced" },
        { name: "Argo CTD Float Calibration", level: "Advanced" },
        { name: "xarray & netCDF4", level: "Expert" },
        { name: "GeoPandas & Spatial Indexing", level: "Advanced" },
      ],
    },
    {
      title: "Full-Stack & Systems Engineering",
      description: "Modern cloud web applications, APIs, and real-time telemetry",
      skills: [
        { name: "Next.js 14 (App Router)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React 18", level: "Advanced" },
        { name: "FastAPI & Uvicorn", level: "Expert" },
        { name: "Three.js WebGL (3D Twin)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "REST APIs & WebSockets", level: "Advanced" },
        { name: "Flask", level: "Advanced" },
      ],
    },
    {
      title: "Databases, Data Pipelines & Security",
      description: "Relational modeling, vector processing, and cryptographic verification",
      skills: [
        { name: "PostgreSQL & SQLite (3NF Schemas)", level: "Advanced" },
        { name: "Pandas & NumPy Vectorization", level: "Expert" },
        { name: "PyMuPDF (fitz) Coordinate Geometry", level: "Advanced" },
        { name: "SHA-256 Cryptographic Audit Trails", level: "Advanced" },
        { name: "Supabase Storage & RLS", level: "Advanced" },
        { name: "SciPy Scientific Computing", level: "Advanced" },
      ],
    },
    {
      title: "DevOps, Embedded & Rigorous Testing",
      description: "Deterministic test suites, Docker containers, and edge hardware",
      skills: [
        { name: "Pytest (500+ Automated Tests)", level: "Expert" },
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "Vercel Fluid Compute", level: "Advanced" },
        { name: "Git & GitHub CI Workflows", level: "Expert" },
        { name: "Raspberry Pi 4 & NodeMCU ESP8266", level: "Advanced" },
        { name: "Arduino & Embedded C", level: "Advanced" },
        { name: "Chronological Purge Buffering", level: "Expert" },
      ],
    },
  ],
  achievements: [
    {
      title: "Smart India Hackathon (SIH26054) UAV Health Research Prototype",
      organization: "Ministry of Education & Smart India Hackathon",
      date: "2026",
      badge: "National Hackathon Prototype",
      description:
        "Architected AeroPulse-X, a real-time digital twin and hybrid propulsion health diagnostic platform for MALE-UAV aero-piston engines with 308 certified automated tests.",
      verifiedLink: "https://aeropulse-test.vercel.app",
    },
    {
      title: "Amazon ML Challenge 2026 Finalist — DeepResolve ER",
      organization: "Amazon Science",
      date: "2026",
      badge: "Competitive ML Challenge",
      description:
        "Constructed a high-recall multi-channel inverted index blocking and LightGBM hard-negative mining engine achieving 0.81172 Macro F0.5 on large-scale business entity resolution.",
      verifiedLink: "https://github.com/neeravjain91-jpg/ml-amazon",
    },
    {
      title: "India AI Impact Buildathon Road Safety Computer Vision",
      organization: "India AI Impact Initiative",
      date: "2024",
      badge: "Buildathon Innovation",
      description:
        "Built Road Guardian AI, an edge computer vision and geotagged telemetry pipeline cutting manual road-survey monitoring effort by 60%.",
      verifiedLink: "https://github.com/neeravjain91-jpg/Road-Guardian-AI-",
    },
    {
      title: "Bank Muscat BRD Series Enterprise Implementations",
      organization: "Enterprise FinTech Deliverables",
      date: "2026",
      badge: "Enterprise Banking Deliverable",
      description:
        "Developed SYNAPSE (SIGNATURE VMAKE) Siamese ResNet-18 signature fraud verification (53 tests) and Bank Statement Table Extraction & Banking Analytics engine (41 tests).",
      verifiedLink: "https://signature-v-five.vercel.app",
    },
    {
      title: "500+ Passing Unit & Integration Tests Across 4 Flagship Repos",
      organization: "Scientific Software Engineering Practice",
      date: "2024 – 2026",
      badge: "Zero-Failure Quality Standard",
      description:
        "Maintained 100% test pass rates across AeroPulse (308), Satellite Embedding (106), Major Forest Fire (60), and Signature V (53) with zero regression.",
    },
  ],
};
