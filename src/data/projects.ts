export type ProjectCategory =
  | "AI/ML"
  | "Deep Learning"
  | "Computer Vision"
  | "Data Science"
  | "Research"
  | "Full Stack"
  | "IoT/Edge";

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

export interface LiveDeployment {
  url: string;
  verifiedStatus: number;
  label: string;
  verifiedAt: string;
  docsUrl?: string;
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
    | "Certified Production"
    | "Research Prototype"
    | "Competition Finalist"
    | "Enterprise Deliverable"
    | "Completed MVP";
  summary: string;
  problemStatement: string;
  solutionArchitecture: string;
  architectureDiagram?: string;
  technologies: string[];
  models: string[];
  datasets: ProjectDataset[];
  evaluationMetrics: EvaluationMetric[];
  benchmarksTable?: BenchmarkTable;
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
    status: "Certified Production",
    summary:
      "A real-time propulsion digital twin and predictive health monitoring system for MALE-UAV aero-piston engines (modeled on the turbocharged Rotax 914). Merges reduced-order thermodynamic cycle models, a context-aware reference twin, dual-layer AI diagnostics, peer cross-sensor trust verification, and physics-stress weighted RUL prognostics into a live WebGL Ground Control Station.",
    problemStatement:
      "Medium-Altitude Long-Endurance (MALE) UAVs operate long sorties under severe atmospheric variability. Sensor drift, thermal transients, and mechanical wear frequently trigger catastrophic in-flight engine failures or excessive false alarms when using simplistic threshold-based monitoring. Ground crews lack real-time visibility into internal combustion pressures, residual deviations, and Remaining Useful Life (RUL).",
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
        protocol: "Disjoint trajectory splits with temporal boundary buffers",
      },
      {
        metric: "Synthetic Trajectories Balanced Accuracy",
        value: "99.20%",
        baseline: "94.85%",
        protocol: "Evaluated across imbalanced critical fault categories",
      },
      {
        metric: "Synthetic Critical Fault Recall",
        value: "99.42% (512 / 515)",
        baseline: "92.10%",
        protocol: "Zero tolerance for unflagged critical mechanical degradation",
      },
      {
        metric: "NASA ACES Altus II Real Flight Accuracy",
        value: "89.47%",
        baseline: "89.19% (Standalone HGB)",
        protocol: "Direct zero-shot transfer onto authentic flight telemetry",
      },
      {
        metric: "NASA ACES Altus II Critical Fault Recall",
        value: "95.68%",
        baseline: "91.31%",
        protocol: "Verified cross-sensor consensus and alarm reliability",
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
    githubUrl: "https://github.com/neeravjain91-jpg/final-aeropulse",
    canonicalRepo: "final-aeropulse",
    predecessors: ["aeropulse-test", "AeroPulse-X", "AeroPulse", "demo-aeropluse"],
    liveDeployment: {
      url: "https://aeropulse-test.vercel.app",
      verifiedStatus: 200,
      label: "Live Tactical Ground Control Station & 3D Twin",
      verifiedAt: "2026-11-07",
      docsUrl: "https://aeropulse-test.vercel.app/docs",
    },
    testSuite: {
      passed: 308,
      failed: 0,
      framework: "pytest",
      suiteDescription: "308 passed, 0 failed across engine kinematics, sensor veto, RUL monotonicity, and API routes",
    },
    highlights: [
      "Certified 308-test automated verification suite ensuring zero regression across thermodynamics, telemetry, and APIs.",
      "Dual-layer diagnostic fusion combining tabular fast gradient boosting with deep sequence temporal convolutions.",
      "Peer cross-sensor trust engine isolating faulty sensor channels from true mechanical engine failure.",
      "Interactive 3D WebGL digital twin rendering real-time cylinder kinematics, temperature heatmaps, and RPM dynamics.",
      "Smart India Hackathon (SIH26054) certified research prototype.",
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
    status: "Certified Production",
    summary:
      "A deep learning scientific framework reconstructing depth-wise subsurface ocean potential temperature (0–1000 m across 15 vertical levels) in the North Indian Ocean using 7 surface satellite streams. Employs a causal 5-day × 3×3 spatiotemporal surface window, achieving a column-averaged test RMSE of 0.9800 °C (a 22.11% improvement over daily climatology) validated against Global Argo CTD float profiles.",
    problemStatement:
      "Satellites only observe the ocean skin (top millimetres), while in-situ subsurface observations (Argo floats, CTD casts) are sparse in space and time. Accurate vertical thermocline profiling is vital for monsoon forecasting, tropical cyclone intensification modeling, and naval acoustics. Reconstructing 3D subsurface temperature profiles from 2D satellite surface observations without temporal leakage or physical violation is a fundamental geophysical challenge.",
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
      "GeoPandas",
      "Scipy",
      "FastAPI",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
    ],
    models: [
      "B8 Spatiotemporal Embedding Network (Champion Model)",
      "B7 Causal BiGRU Surface-to-Subsurface Regressor",
      "B6 1D/2D CNN Depth Projection Baseline",
      "B5 Random Forest & Gradient Boosted Baselines",
      "B1 Daily Climatology Baseline Reference",
    ],
    datasets: [
      {
        name: "Copernicus Marine GLORYS12V1 Reanalysis",
        source: "Mercator Ocean International / Copernicus Marine Service",
        description:
          "Daily global 1/12° (~8 km) eddy-resolving oceanic reanalysis assimilated with Argo CTD profiles and satellite observations.",
        recordsOrCoverage: "North Indian Ocean (0°N–30°N, 45°E–100°E), 2020 Certified Production Run",
      },
      {
        name: "OSTIA High-Resolution Sea Surface Temperature (SST)",
        source: "UK Met Office / Copernicus",
        description: "0.05° daily foundation sea surface temperature merging infrared and microwave satellite observations.",
      },
      {
        name: "CMEMS DUACS Gridded Sea Surface Height (SSH)",
        source: "CNES / Copernicus Marine Service",
        description: "Daily multi-mission altimeter gridded absolute dynamic topography (ADT) and sea level anomalies (SLA).",
      },
      {
        name: "Global Argo CTD Float In-Situ Profiles",
        source: "International Argo Program",
        description: "Independent autonomous profiling floats measuring temperature from surface to 2000 m.",
        recordsOrCoverage: "Independent holdout profiles for empirical calibration",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Overall Column-Averaged Test RMSE",
        value: "0.9800 °C",
        baseline: "1.2582 °C (Daily Climatology B1)",
        protocol: "Chronological holdout (Days 313–365 of 2020) with purge buffers",
      },
      {
        metric: "Error Reduction Over Daily Climatology",
        value: "22.11%",
        baseline: "0.00% (B1 Baseline)",
        protocol: "Uniform metric calculated over all 15 discrete depth layers",
      },
      {
        metric: "Surface Layer (0–50 m) RMSE",
        value: "0.3850 °C",
        baseline: "0.8210 °C",
        protocol: "Mixed layer depth accuracy",
      },
      {
        metric: "Thermocline Peak Gradient Depth (100–200 m) RMSE",
        value: "1.4210 °C",
        baseline: "2.1450 °C",
        protocol: "Sharpest thermal stratification zone in the Indian Ocean",
      },
      {
        metric: "Deep Abyssal Layer (500–1000 m) RMSE",
        value: "0.2410 °C",
        baseline: "0.4520 °C",
        protocol: "High-stability deep ocean water mass validation",
      },
    ],
    benchmarksTable: {
      caption: "Benchmark Suite Comparison across Evaluated Architectures",
      headers: ["Model ID", "Architecture Description", "Column RMSE (°C)", "MAE (°C)", "vs Climatology (B1)"],
      rows: [
        ["B0", "Persistence Baseline (Previous Day State)", "1.4120 °C", "1.0850 °C", "-12.22% (Degraded)"],
        ["B1", "Daily Climatology Reference (DOY Mean)", "1.2582 °C", "0.9420 °C", "0.00% (Baseline)"],
        ["B3", "Standard Multilayer Perceptron (MLP)", "1.1420 °C", "0.8350 °C", "+9.23% Improvement"],
        ["B5", "LightGBM Tabular Regressor (Per-Depth)", "1.0810 °C", "0.7810 °C", "+14.08% Improvement"],
        ["B7", "Causal BiGRU Temporal Recurrent Network", "1.0240 °C", "0.7410 °C", "+18.61% Improvement"],
        ["B8", "B8 Spatiotemporal Embedding Network (Champion)", "0.9800 °C", "0.7020 °C", "+22.11% Improvement"],
      ],
    },
    githubUrl: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    canonicalRepo: "-Satellite-Embedding",
    predecessors: [],
    liveDeployment: {
      url: "https://code-gules-three.vercel.app",
      verifiedStatus: 200,
      label: "Live Ocean Subsurface Reconstruction Prototype",
      verifiedAt: "2026-11-07",
    },
    testSuite: {
      passed: 106,
      failed: 0,
      framework: "pytest",
      suiteDescription: "106 passed, 0 failed verifying geospatial netCDF ingestion, causal sequence masking, and depth layer contracts",
    },
    highlights: [
      "Column-averaged test RMSE of 0.9800 °C representing a 22.11% error reduction over daily climatological baselines.",
      "106 fully automated passing unit and scientific integrity tests verifying dataset contracts and causal boundaries.",
      "7 multi-satellite predictor assimilation pipeline covering thermal, saline, kinematic, and altimetric dynamic variables.",
      "Interactive scientific web prototype deployed on Vercel with depth-slice visualizations and Argo comparison plots.",
      "Explicit documentation of error envelopes across the thermocline (100–200 m) vs abyssal layers.",
    ],
    scientificValidationProtocol:
      "Strict chronological holdout split isolating Days 313–365 of 2020. 10-day purge buffer discarded before the test set to eliminate sequence auto-correlation leakage. Designated strictly as 'Best-performing architecture among evaluated internal benchmarks'.",
    auditNotes:
      "Canonical and authoritative independent repository is `-Satellite-Embedding`. Includes full scientific data contracts, audit documentation, and 106 automated tests.",
    colorScheme: "sky",
  },
  {
    id: "wildfire-intelligence",
    slug: "wildfire-intelligence",
    title: "Multimodal Wildfire Spatiotemporal Intelligence for India",
    subtitle: "Event-Centric Prediction with NASA FIRMS, ERA5-Land & NOAA ETOPO Geomorphology",
    category: "AI/ML",
    additionalCategories: ["Research", "Deep Learning", "Data Science"],
    featured: true,
    tier: "Flagship",
    status: "Certified Production",
    summary:
      "An event-centric multimodal spatiotemporal wildfire forecasting framework for sovereign India (2018–2025). Integrates NASA FIRMS VIIRS 375m active fire telemetry, Copernicus ERA5-Land multi-timescale atmospheric reanalysis, authoritative NOAA ETOPO 2022 digital elevation geomorphology, and atmospheric fuel moisture deficit dynamics. Evaluated under strict Leave-One-Geographic-Regime-Out (LOGRO) spatial cross-validation.",
    problemStatement:
      "Wildfire prediction across India suffers from severe spatial and ecological heterogeneity—spanning dry deciduous plateaus, tropical evergreen Western Ghats, and Himalayan montane slopes. Standard models overfit to geographic coordinates or fail due to polar satellite observation sparsity (VIIRS provides ~2 passes per 24h). Without continuous fuel moisture modeling and topographic slope/aspect integration, spread warning systems produce high false-positive rates.",
    solutionArchitecture:
      "A multimodal spatiotemporal forecasting system:\n1. Active Fire Telemetry Processing: NASA FIRMS VIIRS 375m active fire detections filtered by scan angle, cloud mask, and pixel confidence.\n2. Multiscale Atmospheric Reanalysis: Copernicus ERA5-Land variables at daily, 3-day, 7-day, and 14-day cumulative and differential windows (2m temperature, 10m wind speed, surface pressure, relative humidity, soil moisture).\n3. Authoritative Topographic Geomorphology: NOAA ETOPO 2022 DEM (incorporating NASA SRTM v3) computing continuous terrain slope, aspect, elevation, and terrain ruggedness index (TRI).\n4. Fuel Moisture Deficit Dynamics: Equilibrium moisture content (EMC) and vapor pressure deficit (VPD) modeling.\n5. Event-Centric Fire Clustering: Connected-component DBSCAN spatiotemporal clustering aggregating individual satellite pixels into persistent fire events.\n6. Leave-One-Geographic-Regime-Out (LOGRO) cross-validation evaluating zero-shot geographic transfer.",
    architectureDiagram: `NASA FIRMS VIIRS 375m Active Fire Detection
                     ↓
Copernicus ERA5-Land (Multi-Timescale Temp, Wind, Humidity, Soil Moisture)
                     ↓
NOAA ETOPO 2022 / SRTM v3 DEM (Slope, Aspect, Elevation, Ruggedness Index)
                     ↓
Atmospheric Fuel Moisture Deficit (Equilibrium Moisture Content & VPD)
                     ↓
Connected-Component Spatiotemporal Fire Clustering (DBSCAN Events)
                     ↓
LOGRO Cross-Validation Evaluator (Leave-One-Geographic-Regime-Out)
                     ↓
FastAPI Serving Engine & Interactive Sovereign Risk Map (Vercel Deployed)`,
    technologies: [
      "Python 3.11+",
      "PyTorch",
      "LightGBM",
      "NASA FIRMS API",
      "Copernicus ERA5 API",
      "NOAA ETOPO DEM",
      "FastAPI",
      "GeoPandas",
      "Docker",
      "Pytest",
    ],
    models: [
      "LightGBM Spatiotemporal Gradient Booster (Champion Production Model)",
      "PyTorch Spatiotemporal Sequence Classifier",
      "Connected-Component Fire Cluster Event Engine",
      "Equilibrium Moisture Content (EMC) Biophysical Model",
      "Vapor Pressure Deficit (VPD) Atmospheric Engine",
    ],
    datasets: [
      {
        name: "NASA FIRMS VIIRS 375m Active Fire Detections",
        source: "NASA Earthdata / LANCE FIRMS",
        description: "Thermal anomaly telemetry across India from Suomi NPP and NOAA-20 VIIRS instruments (2018–2025).",
        recordsOrCoverage: "Sovereign India geographic bounds (8°N–37°N, 68°E–97°E)",
      },
      {
        name: "Copernicus ERA5-Land Atmospheric Reanalysis",
        source: "ECMWF / Copernicus Climate Change Service",
        description: "Hourly and daily reanalysis at 9 km spatial resolution including surface atmospheric and soil layer moisture.",
      },
      {
        name: "NOAA ETOPO 2022 Global Relief Model (SRTM v3)",
        source: "NOAA National Centers for Environmental Information",
        description: "15 arc-second digital elevation model used to extract topographic aspect, slope, and elevation features.",
      },
    ],
    evaluationMetrics: [
      {
        metric: "LOGRO Spatial Generalization ROC-AUC",
        value: "0.8920",
        baseline: "0.7810 (Non-Topographic Baseline)",
        protocol: "Leave-One-Geographic-Regime-Out (Held-out eco-zones: Western Ghats, Central Deciduous, Himalayas)",
      },
      {
        metric: "LOGRO Average Precision (PR-AUC)",
        value: "0.7410",
        baseline: "0.5840",
        protocol: "Strict evaluation on severe class-imbalance fire occurrence labels",
      },
      {
        metric: "Automated Verification Test Pass Rate",
        value: "60 / 60 (100%)",
        baseline: "0 regressions",
        protocol: "pytest verification across FIRMS ingestion, DEM geometry, and API schemas",
      },
    ],
    benchmarksTable: {
      caption: "Cross-Regime Generalization Under LOGRO Validation",
      headers: ["Biophysical Regime", "Test Held-Out Eco-Zone", "ROC-AUC", "PR-AUC", "False Alarm Rate"],
      rows: [
        ["Tropical Wet Evergreen", "Western Ghats Region", "0.9120", "0.7680", "4.2%"],
        ["Tropical Dry Deciduous", "Central Plateau / Vidarbha", "0.8940", "0.7510", "5.1%"],
        ["Subtropical Montane", "Himalayan Foothills / Uttarakhand", "0.8710", "0.7040", "6.8%"],
        ["Macro-Averaged", "Overall Sovereign India LOGRO", "0.8920", "0.7410", "5.37%"],
      ],
    },
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
      label: "Live Wildfire Intelligence & Risk Prediction Platform",
      verifiedAt: "2026-11-07",
    },
    testSuite: {
      passed: 60,
      failed: 0,
      framework: "pytest",
      suiteDescription: "60 passed, 0 failed covering geospatial data transformations, DEM slope derivations, and API endpoints",
    },
    highlights: [
      "Authoritative major project synthesizing 7 years of NASA FIRMS active fire telemetry across sovereign India.",
      "Integrated NOAA ETOPO 2022 high-resolution DEM geomorphology computing terrain slope, aspect, and ruggedness.",
      "Evaluated under rigorous Leave-One-Geographic-Regime-Out (LOGRO) spatial cross-validation preventing spatial memorization.",
      "60 passing unit and integration tests with zero regression.",
      "Production-ready FastAPI and web interface deployed on Vercel.",
    ],
    scientificValidationProtocol:
      "LOGRO cross-validation isolates entire biophysical zones (e.g. testing on Himalayan eco-zones when training strictly on Central/Southern India). Eliminates spatial coordinate overfitting.",
    auditNotes:
      "Canonical repository is `major-forest-fire`. Earlier repositories (`indian-forest-fire-prediction-n`, `india-forest-fire-prediction`, `updated-forest-fire-prediction`, and `forest-fire-prediction-`) represent progressive evolutionary milestones from toy datasets to this authoritative multi-year DEM architecture.",
    colorScheme: "amber",
  },
  {
    id: "signature-vmake",
    slug: "signature-vmake",
    title: "SYNAPSE (SIGNATURE VMAKE)",
    subtitle: "Enterprise Biometric Signature Verification & Fraud Risk Assessment",
    category: "Computer Vision",
    additionalCategories: ["Deep Learning", "AI/ML"],
    featured: true,
    tier: "Flagship",
    status: "Enterprise Deliverable",
    summary:
      "An enterprise-grade, writer-independent biometric offline signature verification and fraud risk assessment platform built to Bank Muscat BRD specifications. Employs a shared-weight ResNet-18 Siamese Deep Metric Learning network trained with ForgeryAwareMetricLoss, multi-reference customer gallery aggregation, and 3NF audit databases, achieving zero data leakage on open-set held-out signers (CEDAR Writers 46–55).",
    problemStatement:
      "Financial institutions process millions of high-value negotiable instruments (cheques, trade finance contracts, loan originations). Skilled manual forgeries deceive human tellers, while naive machine learning models overfit to specific individual signers, failing when presented with unseen banking customers (open-set verification). Systems must operate writer-independently with rigorous audit trails.",
    solutionArchitecture:
      "A 3-level enterprise banking architecture:\n1. Level 1 Teller Workflow: High-speed ingestion of scanned cheques and signature cards with automatic bounding-box segmentation and contrast normalization.\n2. Level 2 Forensic Analysis Engine: Siamese ResNet-18 metric learning embedding extracting 512-dimensional feature representations, computing cosine distance and dynamic threshold calibration against a multi-reference enrollment gallery.\n3. Level 3 Risk & Audit Administration: Immutable 3NF PostgreSQL/SQLite database storing cryptographic transaction digests, multi-factor risk scores (combining visual dissimilarity, account tenure, and transaction amount), and maker-checker approval queues.",
    architectureDiagram: `High-Resolution Signature Scan / Cheque Crop
                     ↓
Preprocessing (Bounding Box Isolation, Otsu Binarization, Resizing to 224×224)
                     ↓
Siamese ResNet-18 Feature Extractor (Shared-Weight Representation)
                     ↓
ForgeryAwareMetricLoss (Penalizes Skilled Forgeries in Cosine Metric Space)
                     ↓
Multi-Reference Gallery Aggregator (Centroid Distance across K Verified Exemplars)
                     ↓
Multi-Factor Fraud Risk Engine (Visual Distance + Transaction Value + Account Profile)
                     ↓
3NF Audit Ledger & Forensic Canvas (Maker-Checker Banking Approval Queue)`,
    technologies: [
      "PyTorch 2.0+",
      "Torchvision (ResNet-18)",
      "FastAPI",
      "PostgreSQL / SQLite (3NF)",
      "Scikit-learn",
      "OpenCV",
      "Docker",
      "Pytest",
      "Tailwind CSS",
    ],
    models: [
      "ResNet-18 Siamese Deep Metric Representation (Champion Model)",
      "ForgeryAwareMetricLoss Embedding Optimizer",
      "Multi-Reference Centroid Distance Aggregator",
      "Calibrated Logistic Risk Classifier (Platt Scaling)",
    ],
    datasets: [
      {
        name: "CEDAR Offline Signature Benchmark",
        source: "Center of Excellence for Document Analysis and Recognition (CEDAR), SUNY Buffalo",
        description: "Benchmark containing genuine and skilled forged signatures across 55 distinct writers.",
        recordsOrCoverage: "Writers 1–45 for training/validation; Writers 46–55 strictly isolated as unseen open-set test cohort",
      },
      {
        name: "Bank Muscat BRD Simulated Cheque Gallery",
        source: "Bank Muscat BRD Implementation Deliverable Specifications",
        description: "Simulated commercial banking signature cards with multi-reference genuine specimens.",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Unseen Writer Equal Error Rate (EER)",
        value: "4.82%",
        baseline: "12.40% (Classical SIFT/SURF + SVM)",
        protocol: "Strict open-set evaluation on held-out Writers 46–55 (zero writer overlap)",
      },
      {
        metric: "Area Under ROC Curve (AUC)",
        value: "0.9840",
        baseline: "0.9120",
        protocol: "Pairwise genuine vs skilled forgery verification",
      },
      {
        metric: "Automated Verification Test Pass Rate",
        value: "53 / 53 (100%)",
        baseline: "0 failures",
        protocol: "pytest verification across model inference, 3NF schema constraints, and fraud endpoints",
      },
    ],
    benchmarksTable: {
      caption: "Biometric Verification Performance on Unseen Signers (CEDAR Held-Out Cohort)",
      headers: ["Model Pipeline", "Feature Backbone", "Equal Error Rate (EER)", "ROC-AUC", "Inference Latency"],
      rows: [
        ["Baseline Handcrafted", "SIFT Keypoints + Linear SVM", "14.20%", "0.8910", "42 ms"],
        ["Baseline Handcrafted", "HOG + RBF Kernel SVM", "12.40%", "0.9120", "28 ms"],
        ["Siamese CNN (Custom 4-layer)", "Contrastive Loss", "8.90%", "0.9450", "14 ms"],
        ["SYNAPSE / SIGNATURE VMAKE", "ResNet-18 + ForgeryAwareMetricLoss", "4.82%", "0.9840", "18 ms"],
        ["SYNAPSE Multi-Ref Gallery", "ResNet-18 + 3-Reference Centroid Fusion", "3.91%", "0.9912", "24 ms"],
      ],
    },
    githubUrl: "https://github.com/neeravjain91-jpg/signature-v",
    canonicalRepo: "signature-v",
    predecessors: ["signature-verification"],
    liveDeployment: {
      url: "https://signature-v-five.vercel.app",
      verifiedStatus: 200,
      label: "Live Enterprise Banking Biometric Portal",
      verifiedAt: "2026-11-07",
      docsUrl: "https://signature-verification-rho.vercel.app",
    },
    testSuite: {
      passed: 53,
      failed: 0,
      framework: "pytest",
      suiteDescription: "53 passed, 0 failed across Siamese inference, 3NF database schema integrity, and fraud score endpoints",
    },
    highlights: [
      "Open-set writer-independent verification tested on strictly unseen signers (CEDAR Writers 46–55) with zero data leakage.",
      "Custom ForgeryAwareMetricLoss penalizing skilled forgeries closer in Euclidean/cosine space.",
      "Multi-reference customer gallery aggregation boosting verification accuracy to 3.91% EER.",
      "53 passing automated tests ensuring 100% regression-free execution.",
      "Complete 3NF relational database schema with audit tables and maker-checker approval workflows.",
    ],
    scientificValidationProtocol:
      "Strict writer-disjoint splitting: training and evaluation sets contain completely different human signers. Guarantees that the network learns genuine biometric stroke and geometry characteristics rather than memorizing individual signature shapes.",
    auditNotes:
      "`signature-v` and `signature-verification` are identical mirrors (same commit `8bd5b10`). Both have verified live deployments on Vercel (`signature-v-five.vercel.app` and `signature-verification-rho.vercel.app`). Canonical project title is SYNAPSE / SIGNATURE VMAKE.",
    colorScheme: "violet",
  },
  {
    id: "bank-statement-extractor",
    slug: "bank-statement-extractor",
    title: "Bank Statement Table Extraction & Banking Analytics",
    subtitle: "Coordinate Geometry Parsing, Line Role Classification & Zero-Shot Categorization",
    category: "AI/ML",
    additionalCategories: ["Full Stack", "Data Science"],
    featured: false,
    tier: "Major",
    status: "Enterprise Deliverable",
    summary:
      "A production-ready Bank Statement Table Extraction pipeline and FastAPI backend developed for the Bank Muscat Business Requirements Document (BRD) Series. Reliably extracts, normalizes, validates, and categorizes tabular transaction data from PDF bank statements across international banking formats and Bank Muscat (OMR 3-decimal currency) with 41 passing automated tests.",
    problemStatement:
      "Digital banking and loan underwriting workflows require ingesting transaction tables from diverse bank statement PDFs. Variations in column headers, multiline transaction descriptions, foreign currency formats (such as 3-decimal OMR), and scanned vector distortions cause naive regex parsers to misalign dates, amounts, and running balances.",
    solutionArchitecture:
      "1. Vector Token Extraction via PyMuPDF (fitz) reading precise word bounding boxes and geometric coordinates.\n2. Machine Learning Line Role Classifier: scikit-learn RandomForest model distinguishing statement metadata headers from tabular line items.\n3. Deterministic Transaction Reconstruction: Bounding box horizontal alignment clustering words into columns with running balance accounting checksums.\n4. Zero-Shot NLP Categorization: Hugging Face Transformers DistilBERT MNLI NLI classifying transactions into spending categories (Payroll, Utilities, Transfers, Debt Service).\n5. Pydantic v2 Type-Safe API serving extraction and analytical endpoints with 41 automated tests.",
    architectureDiagram: `PDF Bank Statement Ingestion
            ↓
PyMuPDF (fitz) Coordinate Geometry Vector Token Extraction
            ↓
RandomForest Layout Line Role Classifier (Header vs Transaction vs Footnote)
            ↓
Horizontal Column Alignment & Running Balance Checksum Validator
            ↓
Hugging Face DistilBERT Zero-Shot Transaction Categorization
            ↓
Pydantic v2 Validated API Response & Financial Health Summary`,
    technologies: [
      "Python 3.11",
      "FastAPI",
      "PyMuPDF (fitz)",
      "scikit-learn",
      "Hugging Face Transformers",
      "Pydantic v2",
      "pytest",
      "Docker",
    ],
    models: [
      "RandomForest Line Role Layout Classifier",
      "DistilBERT-base-uncased-mnli (Zero-Shot Text Categorizer)",
      "Accounting Reconciler & Running Balance Validator",
    ],
    datasets: [
      {
        name: "Bank Muscat BRD Sample Statement Corpus",
        source: "Bank Muscat BRD Series Specifications",
        description: "Official sample statements featuring OMR 3-decimal currency and multi-column tables.",
      },
      {
        name: "Synthetic Multi-Bank Statement Corpus",
        source: "Generated Vector PDFs with Known Ground-Truth Transactions",
        description: "Statements with multiline descriptions, missing headers, and varying date formats (DD/MM/YYYY, MM/DD/YYYY).",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Transaction Table Extraction Recall",
        value: "99.10%",
        baseline: "86.40% (Rule-Based Regex Parsing)",
        protocol: "Evaluated across synthetic and real-world multi-page bank statements",
      },
      {
        metric: "Running Balance Accounting Consistency",
        value: "100.00%",
        baseline: "91.20%",
        protocol: "Mathematical balance checks: Previous Balance + Credits - Debits = Closing Balance",
      },
      {
        metric: "Automated Test Suite Pass Rate",
        value: "41 / 41 (100%)",
        baseline: "0 failures",
        protocol: "pytest coverage across PDF vector parsing, line classification, and API security",
      },
    ],
    githubUrl: "https://github.com/neeravjain91-jpg/bank",
    canonicalRepo: "bank",
    predecessors: [],
    liveDeployment: {
      url: "https://mayank-ten-indol.vercel.app",
      verifiedStatus: 200,
      label: "Live Bank Statement Extraction API & Web Portal",
      verifiedAt: "2026-11-07",
    },
    testSuite: {
      passed: 41,
      failed: 0,
      framework: "pytest",
      suiteDescription: "41 passed, 0 failed verifying accounting integrity, coordinate parsing, and FastAPI endpoints",
    },
    highlights: [
      "Production-ready deliverable for the Bank Muscat Business Requirements Document (BRD) Series.",
      "Native support for 3-decimal currency (OMR) and international banking accounting checks.",
      "Combines vector geometry token extraction with machine learning layout classification.",
      "41 passing unit and integration tests verifying robust PDF processing.",
      "Zero-shot transaction categorization using DistilBERT MNLI transformers.",
    ],
    scientificValidationProtocol:
      "Deterministic balance reconciliation: every extracted line item is cross-checked against consecutive running balance equations, flagging any missing rows or OCR misreads immediately.",
    auditNotes:
      "Canonical repository is `bank`. Deployed on Vercel at `https://mayank-ten-indol.vercel.app` (Status 200).",
    colorScheme: "emerald",
  },
  {
    id: "amazon-ml-entity-resolution",
    slug: "amazon-ml-entity-resolution",
    title: "DeepResolve ER — Large-Scale Business Entity Resolution",
    subtitle: "Amazon ML Challenge 2026 Finalist Pipeline (Macro F0.5: 0.81172)",
    category: "AI/ML",
    additionalCategories: ["Data Science", "Research"],
    featured: false,
    tier: "Major",
    status: "Competition Finalist",
    summary:
      "A high-throughput, leakage-free entity resolution pipeline developed for the Amazon ML Challenge 2026. Combines multi-channel inverted index blocking (85.62% recall, 99.991% reduction ratio), a dense 30-dimensional pairwise feature extractor, mined hard-negative LightGBM GBDT training, and an adaptive score-margin decision engine, achieving a validated Macro F0.5 of 0.81172.",
    problemStatement:
      "Matching duplicate commercial business records across multiple heterogenous e-commerce sources is plagued by non-standardized brand names, abbreviations, typos, and missing address components. Pairwise comparison across millions of entities exhibits O(N²) computational complexity, necessitating aggressive candidate blocking that preserves recall while filtering false pairs.",
    solutionArchitecture:
      "1. Multi-Channel Inverted Index Blocking: 5 parallel channels (exact normalized name, legal-suffix stripping, token-sorting, alphanumeric domain stems, numeric address co-occurrence) filtering 99.991% of non-matching pairs while preserving 85.62% candidate recall.\n2. Dense 30-Dimensional Pairwise Feature Extractor: 3-gram character Dice, token Jaccard, address length ratios, numeric token set agreement, and cross-field interaction terms.\n3. Mined Hard-Negative Training: LightGBM GBDT classifier trained on hard negative pairs originating from blocking collisions.\n4. Adaptive Score-Margin Decision Engine: Calibrated decision threshold τ = 0.94 with relative score margin Δ = 0.05 and cardinality cap K ≤ 5, protecting singleton entities (89.93% accuracy) while capturing complex multi-matches.",
    architectureDiagram: `Raw Business Records across 3 Heterogeneous Sources
                     ↓
Multi-Channel Inverted Index Blocking (85.62% Recall, 99.991% Reduction Ratio)
                     ↓
Dense 30-Dimensional Pairwise Feature Extraction (3-Gram Dice, Jaccard, Co-Occurrence)
                     ↓
LightGBM GBDT Classifier with Mined Hard Negatives
                     ↓
Adaptive Score-Margin Decision Engine (τ = 0.94, Δ = 0.05, K ≤ 5)
                     ↓
Final Submissions Engine (Validated Macro F0.5: 0.81172)`,
    technologies: [
      "Python 3.10+",
      "LightGBM",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "SciPy",
    ],
    models: [
      "LightGBM Gradient Boosted Decision Tree (Hard-Negative Mined)",
      "Multi-Channel Inverted Index Blocking Engine",
      "Adaptive Score-Margin Multi-Match Resolver",
    ],
    datasets: [
      {
        name: "Amazon ML Challenge 2026 Business Entity Resolution Dataset",
        source: "Amazon Science / HackerEarth",
        description: "Commercial business entities from three real-world data sources with diverse noise, abbreviations, and formatting.",
        recordsOrCoverage: "Hundreds of thousands of entity records",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Validation Macro F0.5 Score",
        value: "0.81172",
        baseline: "0.6840 (Standard Blocking + Random Forest)",
        protocol: "Macro-averaged F0.5 prioritizing precision over recall for clean business entity linkage",
      },
      {
        metric: "Candidate Blocking Recall",
        value: "85.62%",
        baseline: "64.20%",
        protocol: "5-channel parallel inverted index coverage",
      },
      {
        metric: "Search Space Reduction Ratio",
        value: "99.991%",
        baseline: "99.000%",
        protocol: "Reduction of candidate pairwise evaluations from N² quadratic baseline",
      },
      {
        metric: "Singleton Record Accuracy",
        value: "89.93%",
        baseline: "78.40%",
        protocol: "Protection of unique records from erroneous over-clustering",
      },
    ],
    benchmarksTable: {
      caption: "Amazon ML Challenge 2026 Pipeline Evolution",
      headers: ["Pipeline Stage", "Blocking Strategy", "Feature Space", "Validation Macro F0.5"],
      rows: [
        ["Baseline 1", "Single Exact Name Hash", "10-dim string distances", "0.58200"],
        ["Iteration 2", "Name + Domain Inverted Index", "18-dim token overlap", "0.71450"],
        ["Iteration 3", "5-Channel Multi-Index Blocking", "30-dim dense cross-features", "0.78920"],
        ["DeepResolve ER Final", "5-Channel + Mined Hard Negatives", "30-dim + Adaptive Score Margin (τ=0.94)", "0.81172"],
      ],
    },
    githubUrl: "https://github.com/neeravjain91-jpg/ml-amazon",
    canonicalRepo: "ml-amazon",
    predecessors: ["mlproject"],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Amazon ML Challenge 2026 official finalist submission by Team DeepResolve ER.",
      "Validated Macro F0.5 score of 0.81172 on large-scale multi-source commercial data.",
      "Multi-channel inverted index blocking reducing the quadratic N² candidate search space by 99.991%.",
      "Dense 30-dimensional pairwise feature extractor capturing character n-grams, word tokens, and domain roots.",
      "Adaptive score-margin resolver preserving singletons while accurately grouping multi-matches.",
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
    title: "Road Guardian AI — Intelligent Pothole Detection System",
    subtitle: "Edge Computer Vision & Geotagged Road Maintenance Telemetry",
    category: "Computer Vision",
    additionalCategories: ["IoT/Edge", "AI/ML"],
    featured: false,
    tier: "Major",
    status: "Completed MVP",
    summary:
      "An end-to-end edge computer vision and geotagged telemetry pipeline engineered for the India AI Impact Buildathon. Converts standard vehicle and smartphone camera video streams into automated road hazard logs, detecting potholes with a fine-tuned YOLO model, tagging GPS coordinates, and generating structured telemetry reports.",
    problemStatement:
      "Manual road survey and pothole reporting by municipal road authorities is labor-intensive, reactive, and dangerous. Delays in identifying severe road surface degradation lead to accidents, vehicle damage, and high municipal maintenance overhead.",
    solutionArchitecture:
      "1. Real-time Inference: Live video feeds processed via OpenCV and a fine-tuned YOLO convolutional object detector.\n2. Confidence Thresholding & Filtering: Detections filtered (confidence > 0.5) to discard shadows and asphalt stains.\n3. Geotagging Synchronization: Hardware GPS module integration recording latitude, longitude, vehicle speed, and timestamp.\n4. Visual Evidence Capture: Automatic bounding box snapshot cropping and storage for municipal verification.\n5. Structured Logging & Telemetry: Pandas pipeline exporting CSV hazard logs and summary heatmaps.",
    technologies: [
      "Python 3.10+",
      "YOLO Object Detection",
      "OpenCV",
      "GPS Interfacing",
      "Pandas",
      "NumPy",
    ],
    models: [
      "Fine-Tuned YOLO Pothole Detection Model",
      "Temporal NMS Frame Deduplication Engine",
    ],
    datasets: [
      {
        name: "Indian Road Surface Degradation Dataset",
        source: "India AI Impact Buildathon Road Imagery",
        description: "Thousands of annotated road hazard images under diverse monsoon and lighting conditions.",
      },
    ],
    evaluationMetrics: [
      {
        metric: "Road-Survey Manual Effort Reduction",
        value: "~60%",
        baseline: "100% manual inspection",
        protocol: "Measured against municipal physical patrol survey hours",
      },
      {
        metric: "Pothole Detection Precision",
        value: "91.40%",
        baseline: "72.00% (Edge-based Haar Cascade)",
        protocol: "Evaluated on diverse asphalt and concrete road test footage",
      },
      {
        metric: "Edge Inference Frame Rate",
        value: "30+ FPS",
        baseline: "10 FPS",
        protocol: "Real-time edge processing on embedded/mobile GPUs",
      },
    ],
    githubUrl: "https://github.com/neeravjain91-jpg/Road-Guardian-AI-",
    canonicalRepo: "Road-Guardian-AI-",
    predecessors: [],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Built for the India AI Impact Buildathon to automate municipal road maintenance.",
      "Reduces manual road-survey monitoring effort by ~60%.",
      "Real-time GPS geotagging synchronized with high-confidence YOLO detections.",
      "Automated evidence frame capture and structured CSV reporting.",
      "Runs at 30+ FPS on edge hardware.",
    ],
    scientificValidationProtocol:
      "Cross-validation across diverse Indian road lighting conditions (glare, rain, overcast, twilight) ensuring robustness against shadow false-positives.",
    auditNotes:
      "Canonical repository is `Road-Guardian-AI-`. Single author implementation.",
    colorScheme: "emerald",
  },
  {
    id: "hackmate",
    slug: "hackmate",
    title: "HackMate — Hackathon Team Collaboration Platform",
    subtitle: "Concurrency-Safe Workspace, Task Assignment & Binary Shared Work Library",
    category: "Full Stack",
    additionalCategories: ["AI/ML"],
    featured: false,
    tier: "Major",
    status: "Completed MVP",
    summary:
      "A modern web collaboration platform engineered specifically for hackathon teams of 4–6 members. Features leader-governed task workflows, concurrency-safe member joining, and a private binary Shared Work Library for sharing datasets, trained ML model weights, code, and endpoints without loose ZIP file chaos.",
    problemStatement:
      "Hackathon teams lose critical hours during 24-to-48 hour sprints due to disorganized communication, lost model weights, mismatching CSV datasets, and uncoordinated task duplication across WhatsApp, Discord, or loose file drives.",
    solutionArchitecture:
      "1. Next.js 14 App Router & TypeScript frontend providing responsive task boards and asset browsers.\n2. Concurrency-Safe Team Management: Atomic mutex and database constraints strictly enforcing 4–6 member caps per project.\n3. Leader-Controlled Task Allocation: Assigning tasks with status progressions (`In Progress`, `Submitted`, `Approved`, `Changes Requested`).\n4. Binary Shared Work Library: Private storage bucket for uploading large model checkpoints, datasets, and frontend components with SHA-256 cryptographic checksums preventing silent file corruption.\n5. Row-Level Security (RLS) ensuring strict cross-project data isolation (403 Forbidden on unauthorized downloads).",
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "React 18",
      "Tailwind CSS",
      "Lucide Icons",
      "Supabase (PostgreSQL + RLS)",
      "SHA-256 Checksums",
    ],
    models: [],
    datasets: [],
    evaluationMetrics: [
      {
        metric: "Team Member Concurrency Enforcement",
        value: "Strict 6-Member Cap (Atomic Guard)",
        baseline: "Unbounded joins",
        protocol: "Database transaction-level locking preventing race conditions",
      },
      {
        metric: "Cross-Project Access Isolation",
        value: "100% (403 Forbidden Enforced)",
        baseline: "Public URL sharing",
        protocol: "Row-Level Security and signed download tokens",
      },
    ],
    githubUrl: "https://github.com/neeravjain91-jpg/hackmate",
    canonicalRepo: "hackmate",
    predecessors: [],
    liveDeployment: null,
    testSuite: null,
    highlights: [
      "Engineered specifically for hackathon team workflows under intense time constraints.",
      "Shared Work Library for direct ML model weights and dataset artifact exchange.",
      "Strict concurrency-safe cap of 4–6 members per project.",
      "Modern Next.js 14 App Router, TypeScript, and Tailwind CSS UI.",
      "SHA-256 integrity verification for uploaded binary files.",
    ],
    scientificValidationProtocol:
      "End-to-end integration testing of invitation token generation, concurrent join requests, task state machines, and authenticated binary downloads.",
    auditNotes:
      "Authoritative independent full-stack repository `hackmate`.",
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
    liveUrl: "https://final-aeropulse.vercel.app",
    liveStatus: 200,
    testCount: 308,
    description: "Certified SIH26054 build of AeroPulse-X. MALE-UAV engine digital twin with 308 passing tests.",
    auditVerdict: "Canonical repository for AeroPulse-X flagship project.",
  },
  {
    name: "aeropulse-test",
    githubUrl: "https://github.com/neeravjain91-jpg/aeropulse-test",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Digital Twins",
    liveUrl: "https://aeropulse-test.vercel.app",
    liveStatus: 200,
    testCount: 308,
    description: "Certified Vercel deployment mirror for AeroPulse-X GCS dashboard and 3D WebGL twin.",
    auditVerdict: "Active canonical deployment endpoint on Vercel (HTTP 200 OK verified).",
  },
  {
    name: "AeroPulse-X",
    githubUrl: "https://github.com/neeravjain91-jpg/AeroPulse-X",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Intermediate development iteration of AeroPulse-X digital twin.",
    auditVerdict: "Preserved as historical predecessor. Superseded by final-aeropulse / aeropulse-test.",
  },
  {
    name: "AeroPulse",
    githubUrl: "https://github.com/neeravjain91-jpg/AeroPulse",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Early iteration of the AeroPulse digital twin engine simulation.",
    auditVerdict: "Archived developmental predecessor.",
  },
  {
    name: "demo-aeropluse",
    githubUrl: "https://github.com/neeravjain91-jpg/demo-aeropluse",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "final-aeropulse",
    category: "AI/ML & Digital Twins",
    description: "Initial prototype demo for aero-piston engine monitoring.",
    auditVerdict: "Archived developmental predecessor.",
  },
  {
    name: "-Satellite-Embedding",
    githubUrl: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    language: "Python / TypeScript",
    canonicalStatus: "Canonical",
    category: "Deep Learning & Oceanography",
    liveUrl: "https://code-gules-three.vercel.app",
    liveStatus: 200,
    testCount: 106,
    description: "B8 Spatiotemporal Embedding Network reconstructing 15-depth ocean temperature with 106 tests.",
    auditVerdict: "Authoritative flagship repository with verified Vercel deployment (HTTP 200 OK).",
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
    description: "Multimodal wildfire intelligence across sovereign India using FIRMS, ERA5-Land, and NOAA DEM.",
    auditVerdict: "Authoritative major project with verified Vercel deployment (HTTP 200 OK).",
  },
  {
    name: "indian-forest-fire-prediction-n",
    githubUrl: "https://github.com/neeravjain91-jpg/indian-forest-fire-prediction-n",
    language: "Python / HTML",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    liveUrl: "https://indian-forest-fire-prediction-n.vercel.app",
    liveStatus: 200,
    description: "Multi-timescale meteorological feature prediction precursor to major-forest-fire.",
    auditVerdict: "Functional predecessor testing meteorological feature pipelines; superseded by major-forest-fire.",
  },
  {
    name: "india-forest-fire-prediction",
    githubUrl: "https://github.com/neeravjain91-jpg/india-forest-fire-prediction",
    language: "Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Intermediate model training and research pipeline adapting wildfire models.",
    auditVerdict: "Developmental predecessor; superseded by major-forest-fire.",
  },
  {
    name: "updated-forest-fire-prediction",
    githubUrl: "https://github.com/neeravjain91-jpg/updated-forest-fire-prediction",
    language: "HTML / Python",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "major-forest-fire",
    category: "AI/ML & Geospatial",
    description: "Flask-based FireWatch forest fire risk classification web prototype.",
    auditVerdict: "Early UI prototype; superseded by major-forest-fire.",
  },
  {
    name: "forest-fire-prediction-",
    githubUrl: "https://github.com/neeravjain91-jpg/forest-fire-prediction-",
    language: "Jupyter Notebook / Python",
    canonicalStatus: "Academic Coursework",
    canonicalTarget: "major-forest-fire",
    category: "Academic Machine Learning",
    description: "Foundational multiple regression notebook using Algerian Forest Fire dataset.",
    auditVerdict: "Early academic machine learning lab experiment.",
  },
  {
    name: "signature-v",
    githubUrl: "https://github.com/neeravjain91-jpg/signature-v",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "Computer Vision & FinTech",
    liveUrl: "https://signature-v-five.vercel.app",
    liveStatus: 200,
    testCount: 53,
    description: "SYNAPSE / SIGNATURE VMAKE Siamese ResNet-18 biometric verification platform with 53 tests.",
    auditVerdict: "Canonical enterprise repository with verified Vercel deployment (HTTP 200 OK).",
  },
  {
    name: "signature-verification",
    githubUrl: "https://github.com/neeravjain91-jpg/signature-verification",
    language: "Python",
    canonicalStatus: "Exact Mirror",
    canonicalTarget: "signature-v",
    category: "Computer Vision & FinTech",
    liveUrl: "https://signature-verification-rho.vercel.app",
    liveStatus: 200,
    testCount: 53,
    description: "Exact mirror of signature-v (same commit 8bd5b10) deployed on Vercel.",
    auditVerdict: "Verified mirror with active secondary deployment.",
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
    description: "Bank statement table extraction pipeline, PyMuPDF vector geometry, and DistilBERT NLI.",
    auditVerdict: "Authoritative enterprise deliverable with verified Vercel deployment (HTTP 200 OK).",
  },
  {
    name: "ml-amazon",
    githubUrl: "https://github.com/neeravjain91-jpg/ml-amazon",
    language: "Python",
    canonicalStatus: "Canonical",
    category: "AI/ML & Entity Resolution",
    description: "Amazon ML Challenge 2026 finalist pipeline (Macro F0.5: 0.81172) by Team DeepResolve ER.",
    auditVerdict: "Authoritative competition repository.",
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
    category: "Computer Vision & IoT",
    description: "India AI Impact Buildathon edge YOLO road maintenance and GPS pothole logging system.",
    auditVerdict: "Authoritative hackathon project.",
  },
  {
    name: "hackmate",
    githubUrl: "https://github.com/neeravjain91-jpg/hackmate",
    language: "TypeScript",
    canonicalStatus: "Canonical",
    category: "Full Stack Development",
    description: "Next.js 14 App Router, TypeScript, and Supabase RLS hackathon team collaboration platform.",
    auditVerdict: "Authoritative full-stack collaboration platform repository.",
  },
  {
    name: "neeravjain91-jpg",
    githubUrl: "https://github.com/neeravjain91-jpg/neeravjain91-jpg",
    language: "Markdown",
    canonicalStatus: "Auxiliary",
    category: "Profile Documentation",
    description: "GitHub Profile README documenting engineering philosophy, audits, and scientific standards.",
    auditVerdict: "Authoritative profile documentation source.",
  },
  {
    name: "Portfolio",
    githubUrl: "https://github.com/neeravjain91-jpg/Portfolio",
    language: "JavaScript",
    canonicalStatus: "Iterative Predecessor",
    canonicalTarget: "portfolio-website",
    category: "Web Development",
    description: "Original Vite/React and Express portfolio prototype.",
    auditVerdict: "Preserved and upgraded into this modern Next.js 14 App Router portfolio.",
  },
  {
    name: "Task-manager",
    githubUrl: "https://github.com/neeravjain91-jpg/Task-manager",
    language: "JavaScript",
    canonicalStatus: "Academic Coursework",
    category: "Academic Web Development",
    description: "Coursework task management client/server prototype in Node.js and React.",
    auditVerdict: "Academic lab submission.",
  },
  {
    name: "fsd",
    githubUrl: "https://github.com/neeravjain91-jpg/fsd",
    language: "JavaScript / HTML",
    canonicalStatus: "Academic Coursework",
    category: "Academic Web Development",
    description: "Full Stack Development lab exercises, DOM scripting, and Vite intro.",
    auditVerdict: "Academic lab coursework.",
  },
  {
    name: "fsd-idcard",
    githubUrl: "https://github.com/neeravjain91-jpg/fsd-idcard",
    language: "JavaScript / HTML",
    canonicalStatus: "Academic Coursework",
    category: "Academic Web Development",
    description: "ID card and resume builder coursework exercises.",
    auditVerdict: "Academic lab coursework.",
  },
  {
    name: "resume-",
    githubUrl: "https://github.com/neeravjain91-jpg/resume-",
    language: "HTML / JavaScript / CSS",
    canonicalStatus: "Academic Coursework",
    category: "Academic Web Development",
    description: "Static single-page resume HTML template.",
    auditVerdict: "Early static resume page.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
