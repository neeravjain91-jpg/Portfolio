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
  skills: { name: string; tag?: string }[];
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
        { name: "Scikit-learn" },
        { name: "HistGradientBoosting" },
        { name: "LightGBM" },
        { name: "Platt Scaling Calibration" },
        { name: "Isolation Forest Anomaly Detection" },
        { name: "Hard-Negative Mining" },
        { name: "Metric Learning" },
        { name: "Block Bootstrapping (95% CI)" },
      ],
    },
    {
      title: "Deep Learning & Neural Architectures",
      description: "Sequence models, Siamese vision networks, and spatiotemporal representations",
      skills: [
        { name: "PyTorch 2.0+" },
        { name: "Temporal Convolutional Networks (TCN)" },
        { name: "ResNet Siamese Embeddings" },
        { name: "Causal GRU / BiGRU" },
        { name: "Hugging Face Transformers" },
        { name: "Multi-Head Attention" },
        { name: "Vision Transformers (ViT / DeiT)" },
        { name: "TCN Autoencoders" },
      ],
    },
    {
      title: "Earth Observation & Geospatial Intelligence",
      description: "Satellite telemetry, oceanic reanalysis, and topographic geomorphology",
      skills: [
        { name: "NASA FIRMS VIIRS 375m" },
        { name: "Copernicus ERA5-Land Reanalysis" },
        { name: "Copernicus GLORYS12V1" },
        { name: "OSTIA SST / CMEMS Altimetry" },
        { name: "NOAA ETOPO 2022 / SRTM v3 DEM" },
        { name: "Argo CTD Float Calibration" },
        { name: "xarray & netCDF4" },
        { name: "GeoPandas & Spatial Indexing" },
      ],
    },
    {
      title: "Full-Stack & Systems Engineering",
      description: "Modern cloud web applications, APIs, and real-time telemetry",
      skills: [
        { name: "Next.js 14 (App Router)" },
        { name: "TypeScript" },
        { name: "React 18" },
        { name: "FastAPI & Uvicorn" },
        { name: "Three.js WebGL (3D Twin)" },
        { name: "Tailwind CSS" },
        { name: "REST APIs & WebSockets" },
        { name: "Flask" },
      ],
    },
    {
      title: "Databases, Data Pipelines & Security",
      description: "Relational modeling, vector processing, and cryptographic verification",
      skills: [
        { name: "PostgreSQL & SQLite (3NF Schemas)" },
        { name: "Pandas & NumPy Vectorization" },
        { name: "PyMuPDF (fitz) Coordinate Geometry" },
        { name: "SHA-256 Cryptographic Audit Trails" },
        { name: "Supabase Storage & RLS" },
        { name: "SciPy Scientific Computing" },
      ],
    },
    {
      title: "DevOps, Embedded & Rigorous Testing",
      description: "Deterministic test suites, Docker containers, and edge hardware",
      skills: [
        { name: "Pytest (500+ Automated Tests)" },
        { name: "Docker & Containerization" },
        { name: "Vercel Fluid Compute" },
        { name: "Git & GitHub CI Workflows" },
        { name: "Raspberry Pi 4 & NodeMCU ESP8266" },
        { name: "Arduino & Embedded C" },
        { name: "Chronological Purge Buffering" },
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
