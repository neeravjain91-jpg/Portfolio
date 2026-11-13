export type ProjectCategory =
  | "AI/ML"
  | "Deep Learning"
  | "Computer Vision"
  | "Data Science"
  | "Full Stack"
  | "IoT/Edge"
  | "Research";

export interface ProjectDataset {
  name: string;
  source: string;
  description: string;
  recordsOrCoverage?: string;
}

export interface EvaluationMetric {
  metric: string;
  value: string;
  baseline?: string;
  protocol: string;
}

export interface BenchmarkTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface DepthWiseErrorRecord {
  depth: string;
  rmse: string;
  gainVsClimatology: string;
}

export interface BlockingStageRecord {
  stage: string;
  candidateRecall: string;
  reductionRatio: string;
  f05: string;
}

export interface LiveDeployment {
  url: string;
  verifiedStatus: number;
  label: string;
  verifiedAt: string;
  docsUrl?: string;
  latencyMs?: number;
  verificationLevel?: {
    reachable: boolean;
    workflowChecked: boolean;
    apiChecked: boolean;
    mlInferenceChecked: boolean;
  };
}

export interface TestSuiteInfo {
  passed: number;
  failed: number;
  framework: string;
  suiteDescription: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  featured: boolean;
  tier: "Flagship" | "Major" | "Specialized" | "Research Prototype";
  status:
    | "Research Prototype"
    | "Competition Finalist"
    | "Enterprise Deliverable"
    | "Completed MVP";
  summary: string;
  problemStatement: string;
  myContribution: string;
  solutionArchitecture: string;
  architectureDiagram?: string;
  technologies: string[];
  models: string[];
  datasets: ProjectDataset[];
  evaluationMetrics: EvaluationMetric[];
  benchmarksTable?: BenchmarkTable;
  depthWiseErrors?: DepthWiseErrorRecord[];
  blockingVsMatching?: BlockingStageRecord[];
  limitationsAndFailureCases: string[];
  reproductionInstructions: string;
  githubUrl: string;
  canonicalRepo: string;
  predecessors: string[];
  liveDeployment: LiveDeployment | null;
  testSuite: TestSuiteInfo | null;
  highlights: string[];
  scientificValidationProtocol: string;
  auditNotes: string;
  colorScheme: "cyan" | "emerald" | "violet" | "amber" | "sky" | "rose";
}

export interface RepositoryAuditRecord {
  name: string;
  githubUrl: string;
  language: string;
  canonicalStatus: "Canonical" | "Iterative Predecessor" | "Exact Mirror" | "Academic Coursework" | "Auxiliary";
  canonicalTarget?: string;
  category: string;
  liveUrl?: string;
  liveStatus?: number | string;
  testCount?: number;
  description: string;
  auditVerdict: string;
}

export interface CentralizedDeploymentEntry {
  title: string;
  codename: string;
  role: string;
  category: string;
  url: string;
  status: number;
  runtime: string;
  verifiedDate: string;
  latencyMs: number;
  verificationLevel: {
    reachable: boolean;
    workflowChecked: boolean;
    apiChecked: boolean;
    mlInferenceChecked: boolean;
  };
  architecture: string;
  empiricalMetric: string;
  githubRepo: string;
  slug: string;
  features: string[];
}

export const CENTRALIZED_DEPLOYMENTS: CentralizedDeploymentEntry[] = [
  {
    title: "AeroPulse-X Tactical Ground Control Station & 3D Twin",
    codename: "SIH26054 UAV Health Prototype",
    role: "Propulsion Digital Twin for MALE-UAV Rotax 914 Aero-Piston Engine",
    category: "AI/ML & Digital Twins",
    url: "https://aeropulse-test.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • FastAPI • Three.js WebGL",
    verifiedDate: "2026-11-13 (HTTP 200 OK)",
    latencyMs: 9014,
    verificationLevel: {
      reachable: true,
      workflowChecked: true,
      apiChecked: true,
      mlInferenceChecked: true,
    },
    architecture:
      "Reduced-order thermodynamic Otto cycle, dynamic ISA flight atmosphere, HistGradientBoosting 0.70 + TCN residual 0.30, cross-sensor peer veto.",
    empiricalMetric: "99.81% Synthetic Trajectory Accuracy • 308 Passed Pytest Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/final-aeropulse",
    slug: "aeropulse-x",
    features: [
      "Real-time Three.js WebGL 3D cylinder kinematics and temperature gradient rendering",
      "Dynamic ISA atmospheric flight simulator with wind shear vectors",
      "Peer cross-sensor trust verification isolating sensor drift from true mechanical faults",
      "Physics-stress weighted RUL prognostics enforcing monotonic degradation",
    ],
  },
  {
    title: "North Indian Ocean Subsurface Temperature Reconstruction",
    codename: "B8 Spatiotemporal Embedding Network",
    role: "Reconstructing 15 Vertical Ocean Depths (0–1000m) from 7 Satellite Feeds",
    category: "Deep Learning & Geospatial",
    url: "https://code-gules-three.vercel.app",
    status: 200,
    runtime: "Vercel Static / Fluid Compute • PyTorch • xarray",
    verifiedDate: "2026-11-13 (HTTP 200 OK)",
    latencyMs: 406,
    verificationLevel: {
      reachable: true,
      workflowChecked: true,
      apiChecked: true,
      mlInferenceChecked: true,
    },
    architecture:
      "Causal 5-day × 3×3 spatiotemporal surface window, 2D convolutional spatial feature extractors, bidirectional recurrent embedding core, 15-depth vertical decoder.",
    empiricalMetric: "0.9800 °C Column RMSE • 22.11% Reduction vs Climatology • 106 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    slug: "ocean-subsurface-ml",
    features: [
      "7 satellite predictor assimilation (OSTIA SST, SMAP SSS, CMEMS SSH, OSCAR & CCMP Vectors)",
      "Strict chronological purge-buffered test partition (Days 313–365 of 2020)",
      "106 passing automated tests covering dataset contracts and causal bounds",
      "Interactive depth-slice visualizer and Argo CTD float empirical comparison",
    ],
  },
  {
    title: "Sovereign India Multimodal Wildfire Intelligence",
    codename: "Event-Centric Spatiotemporal Forecasting",
    role: "Sovereign Wildfire Risk Forecasting across Multi-Timescale Reanalysis & Topography",
    category: "AI/ML & Earth Observation",
    url: "https://major-forest-fire.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • Python 3.11 • LightGBM",
    verifiedDate: "2026-11-13 (HTTP 200 OK)",
    latencyMs: 7502,
    verificationLevel: {
      reachable: true,
      workflowChecked: true,
      apiChecked: true,
      mlInferenceChecked: true,
    },
    architecture:
      "Multimodal spatiotemporal assimilation: NASA FIRMS VIIRS 375m active fire telemetry, Copernicus ERA5-Land atmospheric reanalysis, NOAA ETOPO 2022 geomorphology, LOGRO cross-validation.",
    empiricalMetric: "0.8920 LOGRO ROC-AUC • 60 Passed Pytest Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/major-forest-fire",
    slug: "wildfire-intelligence",
    features: [
      "Leave-One-Group-Row-Out (LOGRO) spatial cross-validation preventing spatial auto-correlation leakage",
      "Multi-timescale atmospheric fuel moisture deficit indices (1-day to 90-day lags)",
      "NOAA ETOPO 2022 digital elevation geomorphology incorporating NASA SRTM v3",
      "60 automated unit and regression tests verifying temporal causality and boundary safety",
    ],
  },
  {
    title: "SYNAPSE Biometric Offline Signature Verification",
    codename: "Forensic Document Intelligence Core",
    role: "Siamese ResNet-18 Biometric Fraud Risk Assessment & Forensic Gallery",
    category: "Computer Vision & Biometrics",
    url: "https://signature-v-five.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • FastAPI • PyTorch",
    verifiedDate: "2026-11-13 (HTTP 200 OK)",
    latencyMs: 690,
    verificationLevel: {
      reachable: true,
      workflowChecked: true,
      apiChecked: true,
      mlInferenceChecked: true,
    },
    architecture:
      "Deep Siamese convolutional embedding network with ResNet-18 backbone, contrastive loss metric learning, multi-reference gallery aggregation, 3NF immutable audit schema.",
    empiricalMetric: "4.82% Unseen Writer EER (CEDAR 46–55) • 3.91% Gallery EER • 53 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/signature-v",
    slug: "signature-vmake",
    features: [
      "Open-set evaluation on strictly unseen CEDAR writers 46–55 with zero data leakage",
      "Multi-reference customer gallery aggregation dropping EER to 3.91%",
      "3-level banking architecture compliant with Bank Muscat BRD specifications",
      "Immutable 3NF transaction audit schema with maker-checker queues",
    ],
  },
  {
    title: "Bank Statement Table Extraction & Banking Analytics",
    codename: "Bank Muscat BRD Series Deliverable",
    role: "Document Intelligence & Categorization Pipeline for Banking Statements",
    category: "AI/ML & Document Intelligence",
    url: "https://mayank-ten-indol.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • FastAPI • PyMuPDF",
    verifiedDate: "2026-11-13 (HTTP 200 OK)",
    latencyMs: 9902,
    verificationLevel: {
      reachable: true,
      workflowChecked: true,
      apiChecked: true,
      mlInferenceChecked: true,
    },
    architecture:
      "PyMuPDF vector geometry token extraction, scikit-learn layout line role classifier, DistilBERT MNLI zero-shot transaction categorizer, running balance checksums.",
    empiricalMetric: "99.10% Table Recall • 100% Balance Consistency • 41 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/bank",
    slug: "bank-statement-extractor",
    features: [
      "Native support for 3-decimal currencies (OMR) and international statement layouts",
      "Automated running balance accounting consistency checksum verification",
      "Zero-shot transaction categorization into corporate accounting categories",
      "41 passing unit, regression, and security tests",
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "aeropulse-x",
    slug: "aeropulse-x",
    title: "AeroPulse-X",
    subtitle: "Mission-Aware AI Digital Twin for MALE-UAV Engine Health",
    category: "AI/ML",
    additionalCategories: ["Research", "Deep Learning", "IoT/Edge"],
    featured: true,
    tier: "Flagship",
    status: "Research Prototype",
    summary:
      "A real-time propulsion digital twin and predictive health monitoring system for MALE-UAV aero-piston engines (modeled on the turbocharged Rotax 914). Merges reduced-order thermodynamic cycle models, a context-aware reference twin, dual-layer AI diagnostics, peer cross-sensor trust verification, and physics-stress weighted RUL prognostics into a live WebGL Ground Control Station.",
    problemStatement:
      "Medium-Altitude Long-Endurance (MALE) UAVs operate long sorties under severe atmospheric variability. Sensor drift, thermal transients, and mechanical wear frequently trigger catastrophic in-flight engine failures or excessive false alarms when using simplistic threshold-based monitoring. Ground crews lack real-time visibility into internal combustion pressures, residual deviations, and Remaining Useful Life (RUL).",
    myContribution:
      "Sole architect and primary developer of the AeroPulse-X system. Formulated the reduced-order thermodynamic Otto cycle simulation for the Rotax 914 turbo aero-engine in Python. Designed the hybrid diagnostic fusion pipeline combining tabular gradient boosting with deep sequence temporal convolutions (TCN). Engineered the multi-channel peer cross-sensor veto logic to isolate sensor drift from true mechanical faults. Developed the physics-stress weighted RUL prognostic extrapolation module with strict monotonic degradation guarantees. Built the real-time Tactical Ground Control Station (GCS) and interactive Three.js 3D WebGL cylinder twin. Authored the comprehensive 308-test automated pytest verification suite ensuring zero regression across thermodynamics, telemetry, and API layers.",
    solutionArchitecture:
      "A zero-leakage, multi-stage propulsion assessment pipeline:\n1. Dynamic Flight Simulator coupled with ISA Atmosphere and wind vectors.\n2. Reduced-Order Piston Engine simulating the thermodynamic Otto cycle, manifold absolute pressure (MAP), and throttle dynamics.\n3. Context-Aware Reference Twin computing expected nominal baseline states and calculating multi-channel telemetry residuals.\n4. Hybrid Diagnostic Fusion combining HistGradientBoosting (0.70 weight) and a Temporal Convolutional Network (TCN, 0.30 weight).\n5. Cross-Sensor Peer Trust Engine running multi-channel cross-validation and sensor veto logic to isolate sensor failures from mechanical anomalies.\n6. Physics-stress weighted RUL prognostics enforcing strict monotonic degradation.\n7. Real-Time Tactical Ground Control Station (GCS) featuring a Three.js WebGL 3D cylinder twin and replay capabilities.",
    architectureDiagram: `UAV Mission Telemetry / Dynamic Flight Simulator
                     ↓
Reduced-Order Piston Engine (Thermodynamic Otto Cycle, Altitude & Throttle Coupling)
                     ↓
Context-Aware Reference Twin ──► Expected State vs. Observed Residuals
                     ↓
Hybrid Diagnostic Fusion (HistGradientBoosting 0.70 + TCN Residual Classifier 0.30)
                     ↓
Cross-Sensor Peer Trust Engine (Multi-Channel Cross-Validation & Sensor Veto)
                     ↓
Physics-Stress Weighted RUL Prognostics (Strict Monotonicity & Zero-Leakage)
                     ↓
Tactical Ground Control Station (GCS Dashboard, Three.js WebGL 3D Twin, Mission Replay)`,
    technologies: [
      "Python 3.11",
      "PyTorch",
      "HistGradientBoosting",
      "Temporal Convolutional Networks (TCN)",
      "FastAPI",
      "Three.js (WebGL)",
      "Docker",
      "Pytest",
      "Tailwind CSS",
      "Vercel Fluid Compute",
    ],
    models: [
      "HistGradientBoosting Classifier (Weight: 0.70)",
      "Temporal Convolutional Network (TCN Residual Classifier, Weight: 0.30)",
      "Reduced-Order Otto Cycle Thermodynamic Engine Model",
      "Isolation Forest Anomaly Detector",
      "Physics-Stress Weighted Trend Extrapolation RUL Engine",
    ],
    datasets: [
      {
        name: "Synthetic High-Fidelity ODE Fault Trajectories",
        source: "In-House Physics Simulation Engine (Rotax 914 Turbo Parameters)",
        description:
          "Mission profiles across diverse altitudes, throttle sweeps, manifold pressures, cylinder head temperatures (CHT), and exhaust gas temperatures (EGT) covering nominal and 8 distinct fault modes.",
        recordsOrCoverage: "Multi-hour high-frequency simulation runs",
      },
      {
        name: "NASA ACES Altus II Flight Telemetry",
        source: "NASA Dryden Flight Research Center (ACES Program)",
        description:
          "Real-world flight telemetry recorded on the Altus II MALE-UAV platform used for strict cross-domain out-of-distribution generalization testing.",
        recordsOrCoverage: "Multiple real-world sovereign flight missions",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Synthetic Trajectories Multi-Class Accuracy",
        value: "99.81%",
        baseline: "96.40% (Vanilla Random Forest)",
        protocol: "Disjoint trajectory splits with temporal boundary buffers on Rotax 914 ODE simulation",
      },
      {
        metric: "Synthetic Trajectories Balanced Accuracy",
        value: "99.20%",
        baseline: "94.85%",
        protocol: "Evaluated across imbalanced critical fault categories in synthetic ODE space",
      },
      {
        metric: "Synthetic Critical Fault Recall",
        value: "99.42% (512 / 515)",
        baseline: "92.10%",
        protocol: "Zero tolerance for unflagged critical mechanical degradation on synthetic test set",
      },
      {
        metric: "NASA ACES Altus II Real Flight Accuracy",
        value: "89.47%",
        baseline: "89.19% (Standalone HGB)",
        protocol: "Direct zero-shot transfer onto authentic NASA Altus II flight telemetry",
      },
      {
        metric: "NASA ACES Altus II Critical Fault Recall",
        value: "95.68%",
        baseline: "91.31%",
        protocol: "Verified cross-sensor consensus and alarm reliability on real flight data",
      },
    ],
    benchmarksTable: {
      caption: "Empirical Domain-Separated Performance Envelope",
      headers: ["Evaluation Domain", "Model / Configuration", "Multi-Class Accuracy", "Balanced Accuracy", "Critical Fault Recall"],
      rows: [
        ["Synthetic ODE Trajectories", "Standalone HistGradientBoosting", "99.45%", "98.80%", "98.25%"],
        ["Synthetic ODE Trajectories", "Standalone TCN Residual Classifier", "98.90%", "97.60%", "97.40%"],
        ["Synthetic ODE Trajectories", "AeroPulse-X Hybrid Fusion (HGB 0.70 + TCN 0.30)", "99.81%", "99.20%", "99.42% (512/515)"],
        ["Real NASA ACES Altus II", "Standalone HistGradientBoosting", "89.19%", "87.67%", "91.31%"],
        ["Real NASA ACES Altus II", "AeroPulse-X Hybrid Fusion (Champion Build)", "89.47%", "89.29%", "95.68%"],
      ],
    },
    limitationsAndFailureCases: [
      "Synthetic-to-real transfer gap: Diagnostic accuracy drops from 99.81% on synthetic ODE simulations to 89.47% on NASA ACES Altus II real-world flight data due to atmospheric turbulence and unmodeled mechanical harmonics.",
      "Embedded compute footprint: Running the full TCN sequence classifier alongside Three.js rendering exceeds low-power edge microcontrollers; requires running on an edge compute companion (Jetson/Raspberry Pi 4) or cloud relay.",
      "Multi-channel sensor failure: The peer veto algorithm assumes at least 2 non-faulty cross-channels; simultaneous multi-channel sensor failures may degrade residual isolation.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/final-aeropulse\n2. Create and activate a Python 3.11 virtual environment.\n3. Install dependencies: pip install -r requirements.txt\n4. Run full test suite: pytest -v tests/ (308 passing tests)\n5. Start local API and Ground Station: python -m uvicorn src.api.server:app --reload\n6. Navigate to http://localhost:8000 to interact with the 3D WebGL Digital Twin.",
    githubUrl: "https://github.com/neeravjain91-jpg/final-aeropulse",
    canonicalRepo: "final-aeropulse",
    predecessors: ["aeropulse-test", "AeroPulse-X", "AeroPulse", "demo-aeropluse"],
    liveDeployment: {
      url: "https://aeropulse-test.vercel.app",
      verifiedStatus: 200,
      label: "Live Tactical Ground Control Station & 3D Twin",
      verifiedAt: "2026-11-13 (HTTP 200 OK)",
      docsUrl: "https://aeropulse-test.vercel.app/docs",
      latencyMs: 9014,
      verificationLevel: {
        reachable: true,
        workflowChecked: true,
        apiChecked: true,
        mlInferenceChecked: true,
      },
    },
    testSuite: {
      passed: 308,
      failed: 0,
      framework: "pytest",
      suiteDescription: "308 passed, 0 failed in canonical repository (engine kinematics, sensor veto, RUL monotonicity, and API routes)",
    },
    highlights: [
      "308-test automated pytest verification suite in canonical repository verifying thermodynamics and sensor veto logic.",
      "Dual-layer diagnostic fusion combining tabular fast gradient boosting with deep sequence temporal convolutions.",
      "Peer cross-sensor trust engine isolating faulty sensor channels from true mechanical engine failure.",
      "Interactive 3D WebGL digital twin rendering real-time cylinder kinematics, temperature heatmaps, and RPM dynamics.",
      "Smart India Hackathon (SIH26054) research prototype.",
    ],
    scientificValidationProtocol:
      "Strict chronological trajectory partitioning with temporal dead-band buffers between training and evaluation windows. Zero synthetic-to-real data mixing. Standardizers calibrated solely on nominal training phases.",
    auditNotes:
      "Canonical repository is `final-aeropulse` (mirrored in `aeropulse-test` with active Vercel deployment). Intermediate development iterations `AeroPulse-X`, `AeroPulse`, and `demo-aeropluse` are archived predecessors.",
    colorScheme: "cyan",
  },
  {
    id: "ocean-subsurface-ml",
    slug: "ocean-subsurface-ml",
    title: "Subsurface Ocean Temperature Reconstruction",
    subtitle: "B8 Spatiotemporal Embedding Network Across 15 Discrete Depths",
    category: "Deep Learning",
    additionalCategories: ["Research", "AI/ML", "Data Science"],
    featured: true,
    tier: "Flagship",
    status: "Research Prototype",
    summary:
      "A deep learning scientific framework reconstructing depth-wise subsurface ocean potential temperature (0–1000 m across 15 vertical levels) in the North Indian Ocean using 7 surface satellite streams. Employs a causal 5-day × 3×3 spatiotemporal surface window, achieving a column-averaged test RMSE of 0.9800 °C (a 22.11% improvement over daily climatology) validated against Global Argo CTD float profiles.",
    problemStatement:
      "Satellites only observe the ocean skin (top millimetres), while in-situ subsurface observations (Argo floats, CTD casts) are sparse in space and time. Accurate vertical thermocline profiling is vital for monsoon forecasting, tropical cyclone intensification modeling, and naval acoustics. Reconstructing 3D subsurface temperature profiles from 2D satellite surface observations without temporal leakage or physical violation is a fundamental geophysical challenge.",
    myContribution:
      "Conceived and implemented the scientific deep learning pipeline in PyTorch. Engineered ingestion and netCDF4 alignment routines for 7 multi-satellite predictor feeds (OSTIA SST, SMAP SSS, CMEMS Altimetry, OSCAR current vectors, CCMP wind stress vectors). Formulated the causal 5-day × 3×3 spatiotemporal surface patch windowing algorithm enforcing t ≤ T boundary guarantees. Built the 2D spatial convolution feature extractor coupled with a bidirectional recurrent embedding core and 15-depth vertical decoder. Established the strict chronological holdout protocol (Days 313–365 of 2020) with a 14-day temporal purge buffer to eliminate auto-correlation leakage. Authored all 106 automated unit, regression, and bounds-checking tests in the canonical repository.",
    solutionArchitecture:
      "End-to-end scientific deep learning pipeline:\n1. 7 Multi-Satellite Predictors Ingestion: Sea Surface Temperature (OSTIA SST), Sea Surface Salinity (SMAP/GLORYS), Sea Surface Height (CMEMS DUACS Altimetry), Surface Current Vectors (OSCAR U/V), and Surface Wind Stress Vectors (CCMP V3.1 U/V).\n2. Causal 5-Day × 3×3 Spatiotemporal Windowing ensuring strict temporal causality (t ≤ T).\n3. Deep Spatiotemporal Feature Extraction via 2D spatial convolution blocks followed by a bidirectional recurrent embedding head.\n4. Vertical Depth Decoding projecting latent embeddings into 15 discrete oceanic depth strata (0, 10, 20, 30, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500, 1000 m).\n5. Rigorous Ground-Truth Validation using Global Argo CTD float profiles and GLORYS12V1 reanalysis with chronological purge-buffer partitioning.",
    architectureDiagram: `7 Multi-Satellite Surface Feeds (SST, SSS, SSH, Current U/V, Wind U/V)
                           ↓
Causal 5-Day × 3×3 Spatiotemporal Windowing (Strict t ≤ T boundary)
                           ↓
Spatial Feature Extraction (2D Convolutional Receptive Fields)
                           ↓
Temporal Sequence Compression (Bidirectional Recurrent Embedding Core)
                           ↓
Depth-Wise Profile Decoder (15 Oceanic Strata: 0 m to 1000 m)
                           ↓
Validation Engine (Argo CTD Floats, 106 Unit Tests, Purge-Buffered Holdout)`,
    technologies: [
      "PyTorch 2.0+",
      "xarray",
      "netCDF4",
      "NumPy / SciPy",
      "Copernicus Marine Data API",
      "NASA Earthdata",
      "Argo Global Float Index",
      "Pytest",
      "Next.js 14",
      "Vercel Fluid Compute",
    ],
    models: [
      "B8 Spatiotemporal Embedding Network (2D CNN + BiGRU Core + Multi-Depth Linear Decoder)",
      "B1 Climatological Baseline (30-Year Day-of-Year Means)",
      "B2 Spatial Multi-Linear Regression Baseline",
      "B3 Random Forest Regressor",
      "B4 Multi-Layer Perceptron (MLP)",
    ],
    datasets: [
      {
        name: "Multi-Satellite Surface Predictors (7 Assessed Variables)",
        source: "Copernicus Marine Service (CMEMS), NASA PO.DAAC, NOAA CoastWatch",
        description:
          "High-resolution gridded OSTIA SST (0.05°), SMAP SSS, CMEMS DUACS Sea Surface Height anomaly, OSCAR ocean surface currents (U/V), and CCMP V3.1 ocean surface wind vectors.",
        recordsOrCoverage: "North Indian Ocean Basin (0°N–25°N, 50°E–100°E), daily resolution 2020",
      },
      {
        name: "Argo Float CTD In-Situ Validation Profiles",
        source: "Global Argo Data Repository (Ifremer / US GODAE)",
        description:
          "Independent physical CTD casts recording temperature and salinity at discrete pressure levels from 0 to 1000 m depth across the Arabian Sea and Bay of Bengal.",
        recordsOrCoverage: "All available quality-controlled float ascents in North Indian Ocean (2020)",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Column-Averaged Test RMSE (0–1000 m)",
        value: "0.9800 °C",
        baseline: "1.2582 °C (Daily Climatology B1)",
        protocol: "Chronological holdout (Days 313–365 of 2020) with 14-day temporal purge buffer",
      },
      {
        metric: "Relative RMSE Reduction vs. Climatology",
        value: "22.11%",
        baseline: "0.00%",
        protocol: "Normalized improvement across all 15 discrete oceanic vertical depth layers",
      },
      {
        metric: "Column-Averaged Coefficient of Determination (R²)",
        value: "0.9120",
        baseline: "0.7840 (Climatology)",
        protocol: "Evaluated across all test grid coordinates on held-out temporal block",
      },
      {
        metric: "Argo Float In-Situ Profile Match RMSE",
        value: "1.0420 °C",
        baseline: "1.3410 °C (Climatology)",
        protocol: "Point-to-profile collocation with quality-controlled CTD ascents",
      },
    ],
    benchmarksTable: {
      caption: "Model Architecture Comparison on North Indian Ocean Holdout (Days 313–365)",
      headers: ["Model Configuration", "Input Conditioning", "Column RMSE", "Relative Gain vs B1", "Parameters"],
      rows: [
        ["B1 Daily Climatology", "Historical 30-Year Calendar Day Means", "1.2582 °C", "0.00% (Baseline)", "0"],
        ["B2 Multi-Linear Regression", "Single-Day Point Surface Features", "1.1840 °C", "+5.89%", "120"],
        ["B3 Random Forest Regressor", "Single-Day 3x3 Spatial Grid", "1.0920 °C", "+13.21%", "1.2M"],
        ["B4 Multi-Layer Perceptron", "5-Day Temporal Flattened Window", "1.0410 °C", "+17.26%", "3.4M"],
        ["B8 Champion (2D-CNN + BiGRU)", "Causal 5-Day x 3x3 Spatiotemporal Window", "0.9800 °C", "+22.11%", "2.1M"],
      ],
    },
    depthWiseErrors: [
      { depth: "0 m (Surface)", rmse: "0.4210 °C", gainVsClimatology: "18.4%" },
      { depth: "50 m (Mixed Layer)", rmse: "0.8920 °C", gainVsClimatology: "20.5%" },
      { depth: "100 m (Upper Thermocline)", rmse: "1.4820 °C", gainVsClimatology: "26.1%" },
      { depth: "200 m (Lower Thermocline)", rmse: "1.2150 °C", gainVsClimatology: "24.3%" },
      { depth: "500 m (Intermediate Water)", rmse: "0.6480 °C", gainVsClimatology: "19.2%" },
      { depth: "1000 m (Deep Ocean)", rmse: "0.3810 °C", gainVsClimatology: "14.8%" },
    ],
    limitationsAndFailureCases: [
      "Thermocline error concentration: Subsurface temperature variance peaks around 75–150 m where sharp vertical stratification causes higher reconstruction errors (~1.48 °C RMSE) compared to the stable deep ocean (~0.38 °C RMSE).",
      "Argo float spatial sparsity: In-situ Argo CTD casts provide sparse point measurements; verification between float trajectories relies on interpolated GLORYS reanalysis grids.",
      "Extreme cyclonic events: Rapid ocean mixing during severe tropical cyclones can temporarily disrupt satellite-to-subsurface coupling assumptions.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/-Satellite-Embedding\n2. Set up Python 3.10+ virtualenv and install dependencies: pip install -r requirements.txt\n3. Run all 106 automated tests verifying physical constraints and causality: pytest -v tests/\n4. Run evaluation on Days 313–365 holdout: python src/evaluate.py --split test\n5. View interactive dashboard locally: cd web && npm install && npm run dev",
    githubUrl: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    canonicalRepo: "-Satellite-Embedding",
    predecessors: [],
    liveDeployment: {
      url: "https://code-gules-three.vercel.app",
      verifiedStatus: 200,
      label: "Live Spatiotemporal Visualizer & Argo Benchmark",
      verifiedAt: "2026-11-13 (HTTP 200 OK)",
      docsUrl: "https://code-gules-three.vercel.app",
      latencyMs: 406,
      verificationLevel: {
        reachable: true,
        workflowChecked: true,
        apiChecked: true,
        mlInferenceChecked: true,
      },
    },
    testSuite: {
      passed: 106,
      failed: 0,
      framework: "pytest",
      suiteDescription: "106 passed, 0 failed in canonical repository covering netCDF4 data ingestion, causal windowing, and depth constraints",
    },
    highlights: [
      "106 automated tests in canonical repository covering data contracts, causal windowing, and depth bounds.",
      "7 multi-satellite predictor feeds assimilated into a unified spatiotemporal representation.",
      "Chronologically purge-buffered holdout preventing future-to-past temporal leakage.",
      "Deep 2D-CNN spatial compressor with BiGRU sequence core reconstructing 15 discrete oceanic depth strata.",
      "Validated against Global Argo CTD float profiles in the North Indian Ocean basin.",
    ],
    scientificValidationProtocol:
      "Strict chronological holdout partitioning (Training: Days 1–280 of 2020; Validation: Days 281–312; Test: Days 313–365) separated by a 14-day dead-band purge buffer. Enforces causal masking t <= T with zero backward temporal leakage.",
    auditNotes:
      "Canonical and only repository for this research system. Active Vercel deployment with live depth-slice visualizations.",
    colorScheme: "sky",
  },
  {
    id: "wildfire-intelligence",
    slug: "wildfire-intelligence",
    title: "Multimodal Wildfire Spatiotemporal Intelligence for India",
    subtitle: "Event-Centric Wildfire Risk Modeling Across Sovereign Climate and Topography",
    category: "AI/ML",
    additionalCategories: ["Research", "Data Science", "Deep Learning"],
    featured: true,
    tier: "Flagship",
    status: "Research Prototype",
    summary:
      "A sovereign Indian wildfire prediction and analysis platform integrating NASA FIRMS VIIRS 375m active fire telemetry, Copernicus ERA5-Land reanalysis, and NOAA ETOPO 2022 geomorphology into an event-centric spatiotemporal framework. Features Leave-One-Group-Row-Out (LOGRO) spatial cross-validation, achieving an out-of-region ROC-AUC of 0.8920.",
    problemStatement:
      "Wildfires in India follow severe climatic gradients across the Western Ghats, Central dry deciduous forests, and Himalayan pine tracts. Standard random k-fold cross-validation suffers catastrophic spatial auto-correlation leakage (inflating metrics by up to 25%). Furthermore, raw pixel-level detections fail to capture multi-day fire propagation dynamics and fuel moisture deficit trends.",
    myContribution:
      "Architected the multimodal data ingestion and spatial feature engineering pipeline. Ingested 7 years of NASA FIRMS VIIRS 375m active fire observations across India. Interfaced Copernicus ERA5-Land reanalysis to compute rolling fuel moisture deficit indices (1-day, 7-day, 30-day, 90-day lags). Extracted topographic slope, aspect, and elevation profiles from NOAA ETOPO 2022. Formulated and implemented the Leave-One-Group-Row-Out (LOGRO) cross-validation framework to ensure out-of-region spatial generalization. Tuned LightGBM gradient boosted decision trees with focal loss weighting to address extreme class imbalance. Wrote the 60-test pytest verification suite.",
    solutionArchitecture:
      "1. Multimodal Spatiotemporal Assimilation: Ingests VIIRS 375m fire pixels, ERA5-Land multi-timescale meteorology, and NOAA ETOPO topography.\n2. Event-Centric Clustering: Groups contiguous active pixels into discrete wildfire event objects with spatial centroids and duration metrics.\n3. Rolling Fuel Moisture Dynamics: Computes multi-timescale atmospheric drying indicators.\n4. Leave-One-Group-Row-Out (LOGRO) Spatial Cross-Validation: Evaluates generalization across disjoint latitude and longitude grid blocks.\n5. LightGBM GBDT Classification: Classifies high-risk fire zones under severe class imbalance.\n6. Live Interactive Geospatial Dashboard: Deployed on Vercel with Mapbox tile rendering.",
    architectureDiagram: `NASA FIRMS VIIRS 375m + Copernicus ERA5-Land + NOAA ETOPO 2022
                              ↓
Spatiotemporal Grid Alignment & Connected-Component Fire Event Clustering
                              ↓
Rolling Atmospheric Fuel Moisture Deficit (1d, 7d, 30d, 90d lag vectors)
                              ↓
Leave-One-Group-Row-Out (LOGRO) Spatial Cross-Validation Protocol
                              ↓
LightGBM GBDT Classifier (Focal-Weighted Imbalance Calibration)
                              ↓
Sovereign India Wildfire Risk Dashboard (Vercel Production Edge)`,
    technologies: [
      "Python 3.11",
      "LightGBM",
      "PyTorch",
      "GeoPandas",
      "xarray",
      "Shapely",
      "Pytest",
      "Next.js 14",
      "Tailwind CSS",
      "Vercel Fluid Compute",
    ],
    models: [
      "LightGBM GBDT (Tuned with Focal-Weighted Imbalance Loss)",
      "Random Forest Spatial Baseline",
      "Extreme Gradient Boosting (XGBoost)",
      "Logistic Regression Baseline",
    ],
    datasets: [
      {
        name: "NASA FIRMS VIIRS Active Fire Telemetry",
        source: "NASA LANCE / Earthdata (Suomi NPP & NOAA-20)",
        description: "375m I-band active thermal anomaly detections across sovereign India (2018–2025).",
        recordsOrCoverage: "Full territorial India coverage, 7-year multi-satellite archive",
      },
      {
        name: "Copernicus ERA5-Land Atmospheric Reanalysis",
        source: "ECMWF / Copernicus Climate Change Service",
        description: "2m temperature, 2m dewpoint temperature, 10m wind speed, surface pressure, and total precipitation.",
        recordsOrCoverage: "Hourly 0.1° gridded reanalysis aggregated to rolling daily indices",
      },
      {
        name: "NOAA ETOPO 2022 Global Relief Model",
        source: "NOAA National Centers for Environmental Information (NCEI)",
        description: "15 arc-second relief geomorphology incorporating NASA SRTM v3 elevation, computing terrain slope and aspect.",
        recordsOrCoverage: "Continental India topography",
      },
    ],
    evaluationMetrics: [
      {
        metric: "LOGRO Spatial ROC-AUC",
        value: "0.8920",
        baseline: "0.8140 (Standard Random Forest)",
        protocol: "Leave-One-Group-Row-Out spatial cross-validation across sovereign regions",
      },
      {
        metric: "LOGRO Precision-Recall AUC (PR-AUC)",
        value: "0.4280",
        baseline: "0.2910",
        protocol: "Evaluated under severe real-world class imbalance (< 0.1% active fire pixels)",
      },
      {
        metric: "Automated Verification Test Pass Rate",
        value: "100% (60 / 60)",
        baseline: "N/A",
        protocol: "Pytest unit, regression, and spatial bounds tests",
      },
    ],
    benchmarksTable: {
      caption: "Spatial Generalization Evaluation under LOGRO Cross-Validation",
      headers: ["Model Architecture", "Validation Protocol", "ROC-AUC", "PR-AUC", "Spatial Overfitting Gap"],
      rows: [
        ["Random Forest (Naive Split)", "Random 5-Fold (Leaky)", "0.9410", "0.5820", "+0.1420 (Severe Leakage)"],
        ["Logistic Regression", "LOGRO Spatial CV", "0.7640", "0.2150", "+0.0120"],
        ["Standard Random Forest", "LOGRO Spatial CV", "0.8140", "0.2910", "+0.0240"],
        ["XGBoost GBDT", "LOGRO Spatial CV", "0.8710", "0.3840", "+0.0180"],
        ["Champion LightGBM (Focal-Weighted)", "LOGRO Spatial CV", "0.8920", "0.4280", "+0.0110 (Robust)"],
      ],
    },
    limitationsAndFailureCases: [
      "Severe class imbalance: Fire active pixels represent < 0.1% of spatial grid-cells across India, meaning high precision requires strict probability thresholding that can miss early-stage smoldering fires.",
      "Cloud cover occlusion: Optical VIIRS active fire detections are occluded during heavy monsoon cloud cover or thick smoke plumes.",
      "Agricultural stubble burning: Rapid post-harvest stubble burning in Northern India exhibits human-induced ignition patterns distinct from forest climate dynamics.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/major-forest-fire\n2. Install dependencies: pip install -r requirements.txt\n3. Run all 60 automated unit and regression tests: pytest -v tests/\n4. Run LOGRO spatial evaluation: python src/evaluate_spatial.py\n5. Launch web visualizer: cd frontend && npm install && npm run dev",
    githubUrl: "https://github.com/neeravjain91-jpg/major-forest-fire",
    canonicalRepo: "major-forest-fire",
    predecessors: [
      "indian-forest-fire-prediction-n",
      "india-forest-fire-prediction",
      "updated-forest-fire-prediction",
      "forest-fire-prediction-",
    ],
    liveDeployment: {
      url: "https://major-forest-fire.vercel.app",
      verifiedStatus: 200,
      label: "Live Sovereign Wildfire Risk Platform",
      verifiedAt: "2026-11-13 (HTTP 200 OK)",
      docsUrl: "https://major-forest-fire.vercel.app",
      latencyMs: 7502,
      verificationLevel: {
        reachable: true,
        workflowChecked: true,
        apiChecked: true,
        mlInferenceChecked: true,
      },
    },
    testSuite: {
      passed: 60,
      failed: 0,
      framework: "pytest",
      suiteDescription: "60 passed, 0 failed in canonical repository covering spatial coordinate transforms, fuel indices, and LOGRO split bounds",
    },
    highlights: [
      "60 automated unit and regression tests in canonical repository verifying spatial bounds and causality.",
      "Leave-One-Group-Row-Out (LOGRO) spatial CV eliminating spatial auto-correlation leakage.",
      "Assimilation of NASA FIRMS VIIRS 375m active fire data and Copernicus ERA5-Land reanalysis.",
      "Multi-timescale atmospheric fuel moisture deficit indicators capturing 1d to 90d antecedent drought.",
      "Live interactive geospatial deployment on Vercel with Mapbox tile rendering.",
    ],
    scientificValidationProtocol:
      "Leave-One-Group-Row-Out (LOGRO) spatial block cross-validation. Grid cells grouped into discrete latitude bands; testing occurs solely on held-out geographic bands never seen in training to prevent spatial auto-correlation leakage.",
    auditNotes:
      "Canonical repository is `major-forest-fire`. Predecessor iterations `indian-forest-fire-prediction-n`, `india-forest-fire-prediction`, `updated-forest-fire-prediction`, and `forest-fire-prediction-` are archived developmental stages.",
    colorScheme: "amber",
  },
  {
    id: "signature-vmake",
    slug: "signature-vmake",
    title: "SYNAPSE (SIGNATURE VMAKE)",
    subtitle: "Biometric Offline Signature Verification & Multi-Reference Forensic Gallery",
    category: "Computer Vision",
    additionalCategories: ["AI/ML", "Research"],
    featured: true,
    tier: "Major",
    status: "Enterprise Deliverable",
    summary:
      "An enterprise biometric signature verification and fraud risk assessment platform built to Bank Muscat BRD specifications. Employs a deep Siamese ResNet-18 convolutional network with contrastive loss, achieving a 4.82% Equal Error Rate (EER) on strictly unseen writers (CEDAR writers 46–55) and 3.91% with multi-reference gallery aggregation.",
    problemStatement:
      "Financial institutions process tens of thousands of commercial checks and loan authorizations daily. Skilled forgeries mimic signature shape, flourish, and proportions, defeating naive pixel correlation. Furthermore, machine learning models trained with random writer splits overfit to writer identity rather than general forgery mechanics, causing catastrophic failures on new customers.",
    myContribution:
      "Designed and trained the deep Siamese convolutional neural network in PyTorch. Implemented contrastive loss with adaptive margin tuning and hard-negative triplet mining. Constructed the writer-disjoint evaluation protocol strictly partitioning CEDAR writers 1–45 for training and writers 46–55 for holdout testing. Built the multi-reference customer gallery aggregation engine that compares test signatures against up to 5 enrolled genuine samples. Architected the 3NF SQLite and PostgreSQL relational database schema with immutable transaction audit logs and maker-checker queues. Authored 53 automated unit, security, and verification tests.",
    solutionArchitecture:
      "1. Image Preprocessing: Grayscale conversion, adaptive Otsu thresholding, noise morphological filtering, aspect-ratio preserving bounding box cropping, and 224x224 normalization.\n2. Siamese ResNet-18 Backbone: Deep feature extractor sharing weights across signature pairs to project 512-dimensional L2-normalized embeddings.\n3. Contrastive Metric Learning: Evaluates Euclidean distance in latent metric space.\n4. Multi-Reference Customer Gallery: Computes pairwise distances against all customer gallery references and evaluates mean and minimum distance metrics.\n5. Immutable 3NF Database: Tracks customers, signature references, verification audits, and maker-checker decisions.\n6. FastAPI Microservice & Web Dashboard: Deployed on Vercel with real-time similarity gauge and forensic heatmap.",
    architectureDiagram: `Query Signature Image (Check / Contract / Document)
                         ↓
Adaptive Preprocessing (Otsu Binarization, Centering, Normalization)
                         ↓
Siamese ResNet-18 Feature Extractor ──► 512-dim Normalized Embedding
                         ↓
Multi-Reference Gallery Matcher (Min & Mean Metric Distance)
                         ↓
Calibrated Fraud Risk Engine (Threshold τ = 0.52 → EER 4.82% Unseen)
                         ↓
3NF Immutable Audit Ledger & FastAPI Microservice`,
    technologies: [
      "Python 3.11",
      "PyTorch",
      "Torchvision",
      "FastAPI",
      "scikit-learn",
      "OpenCV",
      "PostgreSQL / SQLite",
      "Next.js 14",
      "Tailwind CSS",
      "Pytest",
    ],
    models: [
      "Siamese ResNet-18 (Contrastive Metric Learning Backbone)",
      "Multi-Reference Gallery Distance Aggregator",
      "Calibrated Decision Threshold Engine (tau = 0.52)",
    ],
    datasets: [
      {
        name: "CEDAR Offline Signature Dataset",
        source: "Center of Excellence for Document Analysis and Recognition (CEDAR)",
        description: "55 writers with 24 genuine signatures and 24 skilled forgeries per writer.",
        recordsOrCoverage: "2,640 signature images partitioned into 45 train writers and 10 unseen test writers",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Unseen Writer Equal Error Rate (Single Pair EER)",
        value: "4.82%",
        baseline: "12.40% (Vanilla Siamese CNN)",
        protocol: "Evaluated on strictly unseen CEDAR writers 46–55 with zero writer overlap",
      },
      {
        metric: "Multi-Reference Gallery EER (3 References)",
        value: "3.91%",
        baseline: "4.82% (Single Reference)",
        protocol: "Aggregated distance across 3 registered genuine gallery signatures",
      },
      {
        metric: "Area Under ROC Curve (ROC-AUC)",
        value: "0.9812",
        baseline: "0.9210",
        protocol: "Evaluated on unseen test writer pair distribution",
      },
      {
        metric: "Automated Test Suite Pass Rate",
        value: "100% (53 / 53)",
        baseline: "N/A",
        protocol: "Pytest unit, regression, and database transaction integrity tests",
      },
    ],
    benchmarksTable: {
      caption: "Biometric Verification Performance on Unseen CEDAR Writers (46–55)",
      headers: ["Model Configuration", "Enrollment Strategy", "EER", "FAR @ FRR=5%", "ROC-AUC"],
      rows: [
        ["Shallow CNN Baseline", "Single Reference", "14.20%", "21.50%", "0.8920"],
        ["Vanilla ResNet-18 (Cross-Entropy)", "Single Reference", "10.15%", "14.20%", "0.9240"],
        ["Siamese ResNet-18 (Single Pair)", "Single Reference", "4.82%", "4.65%", "0.9812"],
        ["Siamese ResNet-18 (Gallery Mode)", "3 Enrolled References", "3.91%", "3.42%", "0.9895"],
      ],
    },
    limitationsAndFailureCases: [
      "Skilled forgery edge cases: Extremely high-quality deliberate forgeries by trained calligraphers reduce classification confidence near the 0.52 threshold margin.",
      "Single-reference enrollment degradation: Single-reference EER is 4.82%; providing at least 3 genuine gallery references is necessary to achieve the optimal 3.91% EER.",
      "Non-standard ink bleed or document compression artifacts in low-resolution scans can introduce false rejection spikes.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/signature-v\n2. Install dependencies: pip install -r requirements.txt\n3. Run all 53 automated tests: pytest -v tests/\n4. Start local FastAPI service: uvicorn src.api:app --reload\n5. Open http://localhost:8000/docs for Swagger API endpoints.",
    githubUrl: "https://github.com/neeravjain91-jpg/signature-v",
    canonicalRepo: "signature-v",
    predecessors: ["signature-verification"],
    liveDeployment: {
      url: "https://signature-v-five.vercel.app",
      verifiedStatus: 200,
      label: "Live Biometric Verification & Gallery System",
      verifiedAt: "2026-11-13 (HTTP 200 OK)",
      docsUrl: "https://signature-v-five.vercel.app",
      latencyMs: 690,
      verificationLevel: {
        reachable: true,
        workflowChecked: true,
        apiChecked: true,
        mlInferenceChecked: true,
      },
    },
    testSuite: {
      passed: 53,
      failed: 0,
      framework: "pytest",
      suiteDescription: "53 passed, 0 failed in canonical repository covering Siamese inference, gallery aggregation, and 3NF database transactions",
    },
    highlights: [
      "53 passing automated tests in canonical repository verifying biometric distance, thresholds, and SQL transactions.",
      "Writer-disjoint evaluation on strictly unseen CEDAR writers 46–55 with zero identity leakage.",
      "Siamese ResNet-18 deep convolutional backbone trained with contrastive metric learning.",
      "Multi-reference customer gallery aggregation dropping EER to 3.91%.",
      "3-tier banking architecture with immutable 3NF audit ledger meeting Bank Muscat BRD standards.",
    ],
    scientificValidationProtocol:
      "Strict writer-disjoint partitioning. CEDAR writers 1–45 exclusively used for training; writers 46–55 reserved strictly for evaluation. Zero genuine or forged signatures from test writers ever enter the training set.",
    auditNotes:
      "Canonical repository is `signature-v`. `signature-verification` is an archived development iteration. Live Vercel deployment verified.",
    colorScheme: "violet",
  },
  {
    id: "bank-statement-extractor",
    slug: "bank-statement-extractor",
    title: "Bank Statement Table Extraction & Banking Analytics",
    subtitle: "Enterprise Document Intelligence and Financial Transaction Reconciliation Pipeline",
    category: "Data Science",
    additionalCategories: ["AI/ML", "Full Stack"],
    featured: true,
    tier: "Major",
    status: "Enterprise Deliverable",
    summary:
      "An automated document intelligence pipeline for extracting, categorizing, and validating transaction tables from digital and scanned bank statements (Bank Muscat BRD Series deliverable). Features coordinate-geometry table reconstruction, DistilBERT MNLI zero-shot transaction categorization, and running balance double-entry accounting checksums with 99.10% cell recall.",
    problemStatement:
      "Commercial lending institutions and corporate accounting departments manually process thousands of diverse bank statement PDFs. Disjoint column layouts, multi-line transaction narratives, variable date formats, and 3-decimal currencies (such as OMR) routinely defeat generic OCR parsers, leading to accounting balance errors and audit delays.",
    myContribution:
      "Engineered the vector geometry extraction engine using PyMuPDF to parse words, text blocks, bounding coordinates, and line rules. Formulated the layout line role classifier distinguishing headers, transaction rows, and balance footers. Integrated a DistilBERT MNLI zero-shot classification pipeline for automatic transaction categorization into standardized corporate accounting categories. Built the running balance double-entry accounting checksum validation algorithm with native 3-decimal precision support (OMR). Developed the full 41-test pytest automated verification suite.",
    solutionArchitecture:
      "1. Vector Geometry Parsing: Uses PyMuPDF to extract text tokens, bounding coordinates, and vertical layout boundaries.\n2. Layout Reconstruction: Groups tokens into logical table rows, columns, and multi-line narrative blocks.\n3. Zero-Shot NLP Categorization: Employs DistilBERT MNLI to classify raw transaction text into income, payroll, utility, supplier, or financing categories.\n4. Running Balance Verification: Verifies mathematical integrity: Starting Balance ± Transaction Amount = Ending Balance across all rows.\n5. FastAPI Service: Exposes structured JSON outputs and accounting validation reports.",
    architectureDiagram: `Bank Statement PDF (Bank Muscat, International Banks)
                          ↓
PyMuPDF Vector Geometry Token & Bounding Box Extraction
                          ↓
Layout Line Role Classifier (Header vs. Row vs. Footer)
                          ↓
DistilBERT MNLI Zero-Shot Transaction Categorization
                          ↓
Double-Entry Running Balance Checksum Validator (3-decimal OMR)
                          ↓
Validated Financial Audit Ledger (FastAPI Microservice + Web App)`,
    technologies: [
      "Python 3.11",
      "FastAPI",
      "PyMuPDF (fitz)",
      "Hugging Face Transformers",
      "DistilBERT",
      "scikit-learn",
      "Pandas",
      "Pytest",
      "Next.js 14",
    ],
    models: [
      "DistilBERT MNLI Zero-Shot Sequence Classifier",
      "Layout Line Role Classifier (Coordinate Geometry Heuristic)",
      "Double-Entry Accounting Checksum Validator",
    ],
    datasets: [
      {
        name: "Multi-Bank Commercial Statement Evaluation Corpus",
        source: "Bank Muscat BRD Series & International Statement Samples",
        description: "Bank statements across diverse layouts, table borders, multi-page continuations, and currencies.",
        recordsOrCoverage: "Full multi-page commercial banking statements",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Table Cell Extraction Recall",
        value: "99.10%",
        baseline: "88.40% (Vanilla Camelot/Tabula)",
        protocol: "Ground truth cell-level bounding box overlap across 41 benchmark statements",
      },
      {
        metric: "Running Balance Accounting Consistency",
        value: "100.00%",
        baseline: "91.20%",
        protocol: "Strict mathematical check: Balance[i-1] + Credit[i] - Debit[i] == Balance[i]",
      },
      {
        metric: "Zero-Shot Transaction Categorization Accuracy",
        value: "94.60%",
        baseline: "78.20% (Keyword Matching)",
        protocol: "Evaluated across 12 standard corporate financial accounting categories",
      },
      {
        metric: "Automated Test Suite Pass Rate",
        value: "100% (41 / 41)",
        baseline: "N/A",
        protocol: "Pytest unit, regression, and balance checksum verification tests",
      },
    ],
    benchmarksTable: {
      caption: "Document Intelligence Benchmarks on Commercial Banking Statements",
      headers: ["Extraction Method", "Table Cell Recall", "Balance Verification Rate", "Categorization Accuracy"],
      rows: [
        ["Tabula (Rule-Based)", "84.20%", "76.50%", "N/A"],
        ["Camelot (Lattice/Stream)", "88.40%", "85.20%", "N/A"],
        ["LayoutLMv2 Baseline", "95.10%", "92.40%", "89.20%"],
        ["Bank Muscat Pipeline (Champion)", "99.10%", "100.00%", "94.60%"],
      ],
    },
    limitationsAndFailureCases: [
      "Multi-page broken transaction rows: Statements where transaction descriptions span across page break headers require multi-pass heuristic reconciliation.",
      "Scanned raster PDFs without OCR text layer: Pipeline natively processes digital vector PDFs; scanned paper receipts require external Tesseract/PaddleOCR preprocessing.",
      "Unconventional table layouts: Non-tabular narrative statements from non-standard regional banks require custom layout regex templates.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/bank\n2. Install dependencies: pip install -r requirements.txt\n3. Run all 41 automated tests verifying geometry extraction and balance checksums: pytest -v tests/\n4. Run pipeline on sample statement: python src/extract.py --input samples/statement.pdf\n5. Launch FastAPI backend: uvicorn src.main:app --reload",
    githubUrl: "https://github.com/neeravjain91-jpg/bank",
    canonicalRepo: "bank",
    predecessors: [],
    liveDeployment: {
      url: "https://mayank-ten-indol.vercel.app",
      verifiedStatus: 200,
      label: "Live Statement Extraction & Analytics Platform",
      verifiedAt: "2026-11-13 (HTTP 200 OK)",
      docsUrl: "https://mayank-ten-indol.vercel.app",
      latencyMs: 9902,
      verificationLevel: {
        reachable: true,
        workflowChecked: true,
        apiChecked: true,
        mlInferenceChecked: true,
      },
    },
    testSuite: {
      passed: 41,
      failed: 0,
      framework: "pytest",
      suiteDescription: "41 passed, 0 failed in canonical repository covering vector geometry parsing, transaction categorization, and balance checksums",
    },
    highlights: [
      "41 automated tests in canonical repository validating coordinate extraction, token clustering, and accounting balances.",
      "PyMuPDF vector geometry extraction achieving 99.10% cell-level recall.",
      "100% running balance checksum validation supporting 3-decimal currencies (OMR).",
      "DistilBERT MNLI zero-shot financial transaction categorization.",
      "Enterprise deliverable built to Bank Muscat BRD specifications with live Vercel deployment.",
    ],
    scientificValidationProtocol:
      "Strict double-entry mathematical checksum verification across all transaction rows. Evaluated against ground-truth hand-annotated banking statements with zero cell-level data leakage.",
    auditNotes:
      "Canonical repository is `bank`. Active Vercel deployment verified with live document extraction interface.",
    colorScheme: "emerald",
  },
  {
    id: "amazon-ml-entity-resolution",
    slug: "amazon-ml-entity-resolution",
    title: "DeepResolve ER — Large-Scale Business Entity Resolution",
    subtitle: "Amazon ML Challenge Finalist Pipeline by Team DeepResolve ER (Macro F0.5: 0.81172)",
    category: "AI/ML",
    additionalCategories: ["Data Science", "Research"],
    featured: false,
    tier: "Major",
    status: "Competition Finalist",
    summary:
      "A high-throughput, leakage-free entity resolution pipeline developed for the Amazon ML Challenge series by Team DeepResolve ER (documented in canonical repository ml-amazon). Combines multi-channel inverted index blocking (85.62% recall, 99.991% reduction ratio), a dense 30-dimensional pairwise feature extractor, mined hard-negative LightGBM GBDT training, and an adaptive score-margin decision engine, achieving a validated Macro F0.5 of 0.81172.",
    problemStatement:
      "Matching duplicate commercial business records across multiple heterogenous e-commerce sources is plagued by non-standardized brand names, abbreviations, typos, and missing address components. Pairwise comparison across millions of entities exhibits O(N²) computational complexity, necessitating aggressive candidate blocking that preserves recall while filtering false pairs.",
    myContribution:
      "Core machine learning engineer on Team DeepResolve ER. Designed and implemented the multi-channel inverted index blocking module (5 parallel channels: normalized exact name, legal-suffix stripping, token-sorting, alphanumeric domain stems, numeric address co-occurrence) filtering 99.991% of quadratic non-matching pairs while maintaining 85.62% candidate recall. Engineered the dense 30-dimensional pairwise string, token, and domain cross-feature extractor (3-gram character Dice, token Jaccard, numeric token agreement). Implemented hard-negative candidate mining from blocking false positives. Tuned the LightGBM classifier with an adaptive decision threshold (τ = 0.94) and score-margin resolver (Δ = 0.05), protecting singletons (89.93% accuracy) while capturing complex multi-matches.",
    solutionArchitecture:
      "1. Multi-Channel Inverted Index Blocking: 5 parallel channels filtering 99.991% of non-matching pairs while preserving 85.62% candidate recall.\n2. Dense 30-Dimensional Pairwise Feature Extractor: 3-gram character Dice, token Jaccard, address length ratios, numeric token set agreement, and cross-field interaction terms.\n3. Mined Hard-Negative Training: LightGBM GBDT classifier trained on hard negative pairs originating from blocking collisions.\n4. Adaptive Score-Margin Decision Engine: Calibrated decision threshold τ = 0.94 with relative score margin Δ = 0.05 and cardinality cap K ≤ 5, protecting singleton entities (89.93% accuracy) while capturing complex multi-matches.",
    architectureDiagram: `Raw Business Records across 3 Heterogeneous Sources
                           ↓
5-Channel Inverted Index Blocking (99.991% Reduction Ratio, 85.62% Candidate Recall)
                           ↓
Dense 30-Dimensional Pairwise Feature Extractor (N-Gram Dice, Jaccard, Numeric Sets)
                           ↓
LightGBM Classifier Trained with Mined Hard-Negative Pairs
                           ↓
Adaptive Score-Margin Decision Engine (Threshold τ = 0.94, Margin Δ = 0.05)
                           ↓
Official Competition Submission (Validated Macro F0.5: 0.81172)`,
    technologies: [
      "Python 3.10+",
      "LightGBM",
      "scikit-learn",
      "SciPy",
      "NumPy",
      "Pandas",
    ],
    models: [
      "LightGBM GBDT Classifier (Mined Hard-Negative Training)",
      "Multi-Channel Inverted Index Blocking Engine",
      "Adaptive Score-Margin Threshold Resolver (tau = 0.94, delta = 0.05)",
    ],
    datasets: [
      {
        name: "Amazon ML Challenge Business Entity Resolution Dataset",
        source: "Amazon Science / HackerEarth (Team DeepResolve ER Repository ml-amazon)",
        description: "Commercial business entities from three real-world data sources with diverse noise, abbreviations, and formatting.",
        recordsOrCoverage: "Hundreds of thousands of entity records across 3 heterogeneous commercial sources",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Validation Macro F0.5 Score",
        value: "0.81172",
        baseline: "0.41724 (Token-Sorted Baseline 2D)",
        protocol: "Official competition metric: Macro F0.5 placing 2x weight on precision over recall to prevent false merges",
      },
      {
        metric: "Pairwise Precision",
        value: "0.88801",
        baseline: "0.48015",
        protocol: "Evaluated across all predicted business entity matches",
      },
      {
        metric: "Pairwise Recall",
        value: "0.66169",
        baseline: "0.44928",
        protocol: "Evaluated on full ground truth match clusters",
      },
      {
        metric: "Singleton Entity Accuracy",
        value: "0.89933",
        baseline: "0.37422",
        protocol: "Accuracy on singletons correctly left unmerged",
      },
    ],
    benchmarksTable: {
      caption: "Amazon ML Challenge DeepResolve ER Pipeline Progression",
      headers: ["Pipeline Stage", "Blocking Strategy", "Feature Space", "Validation Macro F0.5"],
      rows: [
        ["Baseline 1", "Single Exact Name Hash", "10-dim string distances", "0.05587"],
        ["Baseline 2A", "Normalized Exact Name", "14-dim string features", "0.08370"],
        ["Baseline 2B", "Normalized Name Only", "18-dim token overlap", "0.32161"],
        ["Baseline 2C", "Legal-Stripped Name Index", "22-dim cross features", "0.40452"],
        ["Baseline 2D", "Token-Sorted Name Inverted Index", "26-dim features", "0.41724"],
        ["DeepResolve ER Final", "5-Channel Multi-Index + Mined Hard Negatives", "Dense 30-dim + Adaptive Score Margin (τ=0.94)", "0.81172"],
      ],
    },
    blockingVsMatching: [
      { stage: "Baseline 1 (Raw Exact Hash)", candidateRecall: "0.01%", reductionRatio: "99.999%", f05: "0.05587" },
      { stage: "Baseline 2C (Legal-Stripped Name)", candidateRecall: "42.76%", reductionRatio: "99.980%", f05: "0.40452" },
      { stage: "5-Channel Inverted Index (DeepResolve ER)", candidateRecall: "85.62%", reductionRatio: "99.991%", f05: "0.78920" },
      { stage: "Full DeepResolve ER (Mined Negatives + τ=0.94)", candidateRecall: "85.62%", reductionRatio: "99.991%", f05: "0.81172" },
    ],
    limitationsAndFailureCases: [
      "Quadratic candidate complexity without blocking: Comparing all entity pairs across hundreds of thousands of records requires O(N²) comparisons (~billions of pairs), making the pipeline entirely dependent on blocking recall.",
      "Singleton protection vs rare multi-match: The calibrated threshold τ = 0.94 and relative score margin Δ = 0.05 are tuned for precision (Macro F0.5), which slightly penalizes recall on complex multi-entity clusters.",
      "Memory footprint during full test inference: Batch partitioning is required to keep RAM utilization below 8 GB on standard machines.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/ml-amazon\n2. Install dependencies: pip install -r requirements.txt\n3. Run model training and hard-negative mining: python code/business_entity_resolution/src/main.py --mode train\n4. Run partitioned test inference: python code/business_entity_resolution/src/main.py --mode infer\n5. Verify submission format: python utils/validate_submission.py --matching output/matching_results.tsv --candidate output/candidate_pairs.tsv --test-dir dataset/test",
    githubUrl: "https://github.com/neeravjain91-jpg/ml-amazon",
    canonicalRepo: "ml-amazon",
    predecessors: ["mlproject"],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Official competition finalist solution by Team DeepResolve ER.",
      "Validated Macro F0.5 score of 0.81172 on large-scale multi-source commercial data.",
      "Multi-channel inverted index blocking reducing the quadratic N² candidate search space by 99.991%.",
      "Dense 30-dimensional pairwise feature extractor capturing character n-grams, word tokens, and domain roots.",
      "Adaptive score-margin resolver preserving singletons (89.93% accuracy) while accurately grouping multi-matches.",
    ],
    scientificValidationProtocol:
      "Strict macro-averaged F0.5 metric evaluation emphasizing precision over recall to eliminate false-merge business linkage disasters. Zero test label leakage.",
    auditNotes:
      "Canonical repository is `ml-amazon`. `mlproject` was an earlier tutorial sandbox.",
    colorScheme: "violet",
  },
  {
    id: "road-guardian-ai",
    slug: "road-guardian-ai",
    title: "Road Guardian AI",
    subtitle: "Real-Time Mobile Pothole Detection & Infrastructure Hazard Mapping",
    category: "Computer Vision",
    additionalCategories: ["AI/ML", "IoT/Edge"],
    featured: false,
    tier: "Specialized",
    status: "Completed MVP",
    summary:
      "An automated edge computer vision solution built for the India AI Impact Buildathon. Transforms mobile camera video streams into intelligent sensors that detect, geolocate, and log road hazards and potholes in real time, aggregating telemetry into a municipal maintenance map.",
    problemStatement:
      "Road decay, potholes, and surface craters cause severe vehicular damage and fatal road accidents in Indian urban areas. Municipalities lack automated, scalable road condition monitoring systems, relying instead on delayed citizen grievances.",
    myContribution:
      "Trained YOLO object detection models on road damage and pothole imagery, engineered mobile GPS telemetry synchronization, and built the web dashboard logging hazard coordinates and severity levels.",
    solutionArchitecture:
      "1. Mobile Video Acquisition: Ingests dashcam and smartphone video feeds.\n2. Frame Extraction & Enhancement: Preprocesses video frames with adaptive histogram equalization.\n3. YOLO Pothole Detection: Detects potholes and road hazards with bounding box coordinates.\n4. GPS Geolocation Tagging: Correlates detected hazards with real-time GPS coordinates.\n5. Telemetry Ingestion API: Sends structured hazard logs to a cloud backend for municipal visualization.",
    architectureDiagram: `Mobile Dashcam Video Feed
            ↓
Frame Ingestion & Adaptive Contrast Enhancement
            ↓
YOLO Object Detection Engine (Potholes & Road Hazards)
            ↓
GPS Spatial Coordinate Geotagging
            ↓
Municipal Infrastructure Health Dashboard`,
    technologies: [
      "Python 3.10",
      "YOLO",
      "PyTorch",
      "OpenCV",
      "Streamlit",
      "Leaflet.js",
    ],
    models: [
      "YOLO Object Detector (Pothole & Surface Damage Classifier)",
    ],
    datasets: [
      {
        name: "Road Damage & Pothole Dataset",
        source: "Crowdsourced Indian Road Imagery & Benchmark Datasets",
        description: "Images of asphalt degradation, potholes, and manhole defects under variable lighting.",
        recordsOrCoverage: "Thousands of annotated road condition frames",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Pothole Detection mAP@0.5",
        value: "84.20%",
        baseline: "71.50%",
        protocol: "Evaluated on independent road condition test frames",
      },
      {
        metric: "Inference Latency",
        value: "28 ms / frame",
        baseline: "65 ms / frame",
        protocol: "Evaluated on CUDA-enabled GPU and edge device",
      },
    ],
    limitationsAndFailureCases: [
      "Extreme lighting conditions: Direct sun glare or heavy nighttime rain degrades pothole boundary confidence.",
      "Camera mount vibration: High-speed vehicle vibration on unpaved roads can introduce motion blur requiring frame-skipping filters.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/Road-Guardian-AI-\n2. Install dependencies: pip install -r requirements.txt\n3. Run inference on demo video: python detect.py --weights best.pt --source demo.mp4",
    githubUrl: "https://github.com/neeravjain91-jpg/Road-Guardian-AI-",
    canonicalRepo: "Road-Guardian-AI-",
    predecessors: [],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Real-time mobile camera video ingestion and hazard classification.",
      "YOLO object detection model tuned for asphalt potholes and road defects.",
      "GPS coordinate correlation generating municipal road condition maps.",
      "Built for the India AI Impact Buildathon.",
    ],
    scientificValidationProtocol:
      "Standard object detection mAP evaluation on held-out road imagery with variable weather and asphalt textures.",
    auditNotes:
      "Canonical and only repository for Road Guardian AI.",
    colorScheme: "amber",
  },
  {
    id: "hackmate",
    slug: "hackmate",
    title: "HackMate",
    subtitle: "Hackathon Team Collaboration & Private Asset Exchange Platform",
    category: "Full Stack",
    additionalCategories: ["AI/ML"],
    featured: false,
    tier: "Specialized",
    status: "Completed MVP",
    summary:
      "A full-stack web collaboration platform engineered specifically for hackathon teams of 4–6 members. Streamlines work distribution under a team leader and provides a central, private Shared Work Library where teammates exchange code, trained machine learning models, datasets, frontend components, and backend endpoints.",
    problemStatement:
      "Hackathon teams work under intense time constraints (24–36 hours). Teams frequently waste valuable hours passing loose ZIP files, dealing with mismatched dataset versions, losing track of trained machine learning model weights, and suffering from duplicated effort across team members.",
    myContribution:
      "Sole full-stack developer. Designed the Next.js and TypeScript frontend, engineered secure session authentication and role permissions, built the shared work library for asset exchange (models, datasets, components), and deployed the full application.",
    solutionArchitecture:
      "1. Next.js App Router Frontend: Clean responsive UI for project tasks, team rosters, and shared assets.\n2. Authentication & Authorization: Role-based permissions distinguishing team leads from contributors.\n3. Shared Work Library: Asset management supporting categorization into models, datasets, frontend components, and APIs.\n4. Task Assignment Board: Kanban-style task tracking with milestone status.",
    architectureDiagram: `User Authentication & Role Management (Team Lead vs. Contributor)
                                ↓
Task Assignment & Milestone Management Board
                                ↓
Shared Work Library (Trained ML Models, Cleaned Datasets, API Specs)
                                ↓
Next.js Responsive Web App (Vercel Production Deployment)`,
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Node.js",
    ],
    models: [],
    datasets: [],
    evaluationMetrics: [
      {
        metric: "Application Core Web Vitals (Lighthouse)",
        value: "95+",
        baseline: "80",
        protocol: "Standard Chrome Lighthouse performance audit",
      },
    ],
    limitationsAndFailureCases: [
      "File upload size limits on serverless compute: Uploading large neural network weights (> 100 MB) requires direct multipart S3/R2 presigned upload URLs rather than serverless request bodies.",
      "Concurrent document collaboration: Currently operates as an asset repository; real-time operational transformation (OT/CRDT) is not implemented.",
    ],
    reproductionInstructions:
      "1. Clone https://github.com/neeravjain91-jpg/hackmate\n2. Install dependencies: npm install\n3. Run local development server: npm run dev\n4. Open http://localhost:3000 to interact with the platform.",
    githubUrl: "https://github.com/neeravjain91-jpg/hackmate",
    canonicalRepo: "hackmate",
    predecessors: [],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Streamlined hackathon asset management for 4-6 person teams.",
      "Centralized Shared Work Library for code, models, and datasets.",
      "Next.js 14 App Router and TypeScript architecture.",
    ],
    scientificValidationProtocol:
      "Full-stack software engineering validation: type safety, responsive viewport rendering, and role authorization checks.",
    auditNotes:
      "Canonical and only repository for HackMate.",
    colorScheme: "cyan",
  },
];

export const ALL_REPOSITORIES: RepositoryAuditRecord[] = [
  {
    name: "final-aeropulse",
    githubUrl: "https://github.com/neeravjain91-jpg/final-aeropulse",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Digital Twins",
    liveUrl: "https://aeropulse-test.vercel.app",
    liveStatus: 200,
    testCount: 308,
    description: "SIH26054 research prototype for an AI-enabled, real-time Digital Twin of a MALE-UAV aero-piston engine.",
    auditVerdict: "Canonical flagship repository. 308 passed automated pytest tests. Active Vercel deployment.",
  },
  {
    name: "aeropulse-test",
    githubUrl: "https://github.com/neeravjain91-jpg/aeropulse-test",
    language: "Python",
    canonicalStatus: "Exact Mirror",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    liveUrl: "https://aeropulse-test.vercel.app",
    liveStatus: 200,
    testCount: 308,
    description: "Deployment mirror for final-aeropulse, directly powering the live Vercel application.",
    auditVerdict: "Exact functional mirror of final-aeropulse with Vercel deployment.",
  },
  {
    name: "AeroPulse-X",
    githubUrl: "https://github.com/neeravjain91-jpg/AeroPulse-X",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Milestone prototype of AeroPulse-X featuring core physics and baseline TCN architecture.",
    auditVerdict: "Archived developmental predecessor superseded by final-aeropulse.",
  },
  {
    name: "AeroPulse",
    githubUrl: "https://github.com/neeravjain91-jpg/AeroPulse",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Intermediate development iteration of AeroPulse UAV monitoring platform.",
    auditVerdict: "Archived development iteration superseded by final-aeropulse.",
  },
  {
    name: "demo-aeropluse",
    githubUrl: "https://github.com/neeravjain91-jpg/demo-aeropluse",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Early demonstration sandbox for AeroPulse UI and simulation routines.",
    auditVerdict: "Archived demo iteration superseded by final-aeropulse.",
  },
  {
    name: "-Satellite-Embedding",
    githubUrl: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "Deep Learning & Geospatial",
    liveUrl: "https://code-gules-three.vercel.app",
    liveStatus: 200,
    testCount: 106,
    description: "Satellite embedding-based deep learning framework reconstructing depth-wise subsurface ocean temperature (0–1000m).",
    auditVerdict: "Canonical flagship deep learning repository. 106 passed tests. Active Vercel deployment.",
  },
  {
    name: "major-forest-fire",
    githubUrl: "https://github.com/neeravjain91-jpg/major-forest-fire",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Geospatial",
    liveUrl: "https://major-forest-fire.vercel.app",
    liveStatus: 200,
    testCount: 60,
    description: "Event-centric multimodal spatiotemporal wildfire forecasting framework for sovereign India (2018–2025).",
    auditVerdict: "Canonical repository for wildfire intelligence. 60 passed tests. Active Vercel deployment.",
  },
  {
    name: "indian-forest-fire-prediction-n",
    githubUrl: "https://github.com/neeravjain91-jpg/indian-forest-fire-prediction-n",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Predecessor iteration of Indian wildfire risk prediction pipeline.",
    auditVerdict: "Iterative predecessor superseded by major-forest-fire.",
  },
  {
    name: "india-forest-fire-prediction",
    githubUrl: "https://github.com/neeravjain91-jpg/india-forest-fire-prediction",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Early geospatial model for India wildfire risk estimation.",
    auditVerdict: "Archived early iteration superseded by major-forest-fire.",
  },
  {
    name: "updated-forest-fire-prediction",
    githubUrl: "https://github.com/neeravjain91-jpg/updated-forest-fire-prediction",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Intermediate model update for forest fire prediction.",
    auditVerdict: "Archived predecessor superseded by major-forest-fire.",
  },
  {
    name: "forest-fire-prediction-",
    githubUrl: "https://github.com/neeravjain91-jpg/forest-fire-prediction-",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Early proof-of-concept wildfire prediction experiment.",
    auditVerdict: "Foundational experiment superseded by major-forest-fire.",
  },
  {
    name: "signature-v",
    githubUrl: "https://github.com/neeravjain91-jpg/signature-v",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "Computer Vision & Biometrics",
    liveUrl: "https://signature-v-five.vercel.app",
    liveStatus: 200,
    testCount: 53,
    description: "SYNAPSE — Intelligent signature verification & fraud risk assessment system (SIGNATURE VMAKE compatible).",
    auditVerdict: "Canonical biometric security repository. 53 passed tests. Active Vercel deployment.",
  },
  {
    name: "signature-verification",
    githubUrl: "https://github.com/neeravjain91-jpg/signature-verification",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "signature-v",
    category: "Computer Vision & Biometrics",
    description: "Earlier prototype of Siamese offline signature verification engine.",
    auditVerdict: "Archived developmental iteration superseded by signature-v.",
  },
  {
    name: "bank",
    githubUrl: "https://github.com/neeravjain91-jpg/bank",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Document Intelligence",
    liveUrl: "https://mayank-ten-indol.vercel.app",
    liveStatus: 200,
    testCount: 41,
    description: "Bank statement table extraction & banking analytics (Bank Muscat BRD Series implementation deliverable).",
    auditVerdict: "Canonical document intelligence deliverable with 41 passed tests and verified Vercel deployment.",
  },
  {
    name: "ml-amazon",
    githubUrl: "https://github.com/neeravjain91-jpg/ml-amazon",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Entity Resolution",
    description: "Amazon ML Challenge finalist pipeline (Macro F0.5: 0.81172) by Team DeepResolve ER.",
    auditVerdict: "Canonical competition repository. Self-contained reproducible pipeline.",
  },
  {
    name: "mlproject",
    githubUrl: "https://github.com/neeravjain91-jpg/mlproject",
    language: "Jupyter Notebook / Python",
    canonicalStatus: "Academic Coursework",
    canonicalTarget: "ml-amazon",
    category: "Academic Machine Learning",
    description: "Foundational AWS Elastic Beanstalk ML pipeline tutorial and sandbox.",
    auditVerdict: "Early practice project; superseded by ml-amazon.",
  },
  {
    name: "Road-Guardian-AI-",
    githubUrl: "https://github.com/neeravjain91-jpg/Road-Guardian-AI-",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "Computer Vision & Edge AI",
    description: "Real-time pothole and road hazard detection system built for India AI Impact Buildathon.",
    auditVerdict: "Canonical hackathon deliverable.",
  },
  {
    name: "hackmate",
    githubUrl: "https://github.com/neeravjain91-jpg/hackmate",
    language: "TypeScript",
    canonicalStatus: "Canonical",
    category: "Full Stack & Collaboration",
    description: "Hackathon team collaboration and shared work library platform.",
    auditVerdict: "Canonical full stack application MVP.",
  },
  {
    name: "Portfolio",
    githubUrl: "https://github.com/neeravjain91-jpg/Portfolio",
    language: "TypeScript / Next.js",
    canonicalStatus: "Canonical",
    category: "Personal Portfolio & Architecture",
    liveUrl: "https://neerav-jain-portfolio.vercel.app",
    liveStatus: 200,
    description: "Authoritative production personal developer portfolio built with Next.js 14, TypeScript & Tailwind CSS.",
    auditVerdict: "Authoritative personal developer portfolio repository.",
  },
  {
    name: "neeravjain91-jpg",
    githubUrl: "https://github.com/neeravjain91-jpg/neeravjain91-jpg",
    language: "Markdown",
    canonicalStatus: "Auxiliary",
    category: "Profile Readme",
    description: "Special GitHub profile repository rendering the public GitHub overview.",
    auditVerdict: "Active GitHub profile README repository.",
  },
  {
    name: "fsd-idcard",
    githubUrl: "https://github.com/neeravjain91-jpg/fsd-idcard",
    language: "JavaScript / HTML",
    canonicalStatus: "Academic Coursework",
    category: "Academic Coursework",
    description: "Academic full stack development ID card generator assignment.",
    auditVerdict: "Archived academic coursework.",
  },
  {
    name: "fsd",
    githubUrl: "https://github.com/neeravjain91-jpg/fsd",
    language: "JavaScript / HTML",
    canonicalStatus: "Academic Coursework",
    category: "Academic Coursework",
    description: "Full stack development coursework repository.",
    auditVerdict: "Archived academic coursework.",
  },
  {
    name: "resume-",
    githubUrl: "https://github.com/neeravjain91-jpg/resume-",
    language: "HTML / CSS",
    canonicalStatus: "Auxiliary",
    category: "Legacy Portfolio",
    description: "Early static HTML/CSS resume webpage experiment.",
    auditVerdict: "Archived legacy experiment superseded by Portfolio.",
  },
  {
    name: "Task-manager",
    githubUrl: "https://github.com/neeravjain91-jpg/Task-manager",
    language: "JavaScript",
    canonicalStatus: "Academic Coursework",
    category: "Academic Coursework",
    description: "Basic JavaScript task manager practice application.",
    auditVerdict: "Archived academic coursework.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}

export function getCanonicalRepositories(): RepositoryAuditRecord[] {
  return ALL_REPOSITORIES.filter((r) => r.canonicalStatus === "Canonical");
}
