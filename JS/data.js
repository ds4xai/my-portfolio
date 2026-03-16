// ════════════════════════════════════════════════
//  DATA 
// ════════════════════════════════════════════════
const DATA = {
  name:        "Sékou Dabo",
  initials:    "DS",
  title:       "PhD Candidate · Machine Learning & Explainable AI",
  affiliation: "CY Cergy Paris Université — ETIS Lab",
  email:       "dabo.sekou@cyu.fr",
  photo:       "./IMAGES/id_photo_sekou_dabo.jpg",
  banner:      "./IMAGES/banner.jpeg",

  links: {
    scholar:  "https://scholar.google.com/citations?user=0uVPKNEAAAAJ&hl=fr",
    github:   "https://github.com/ds4xai",
    linkedin: "https://www.linkedin.com/in/sekou-dabo",
    twitter:  "",
    cv:       "./RESSOURCES/CV_SEKOU_DABO.pdf",
    orcid:    "https://orcid.org/0009-0009-6020-368X",
  },

  bio: `I am a PhD candidate at <strong><a href="https://www.cyu.fr/" target="_blank" rel="noopener">CYU — CY Cergy Paris Université</a></strong>, working at the intersection of <em>machine learning</em>, <em>explainability</em>, and <em>interpretability</em>. My research aims to make AI systems more transparent, reliable, and trustworthy — with applications across agriculture, healthcare, environmental monitoring, and critical decision-making.
<br/><br/>
My thesis, titled <em>"Explainability of Deep Learning Models Applied to Satellite Image Time Series for Crop Mapping"</em>, is conducted at <strong><a href="https://www.etis-lab.fr/" target="_blank" rel="noopener">ETIS Lab</a></strong> within the <strong>DATA&AI</strong> research team. I am supervised by <a href="https://scholar.google.com/citations?user=MdUjsa8AAAAJ&hl=en" target="_blank" rel="noopener">Prof. Vassilis Christophides</a> (Full Professor, ENSEA), co-supervised by <a href="https://scholar.google.com/citations?user=7LlyF3IAAAAJ&hl=fr" target="_blank" rel="noopener">Dr. Michele Linardi</a> (Assistant Professor, CYU) and <a href="https://people.utwente.nl/c.paris" target="_blank" rel="noopener">Dr. Claudia Paris</a> (Assistant Professor, University of Twente).
<br/><br/>
Previously, I received my Master's degree in Artificial Intelligence & Data Science from <strong>Mundiapolis University</strong>, Casablanca, Morocco.`,

  interests: [
    "Machine Learning",
    "Explainable AI (XAI)",
    "Remote Sensing & Crop Mapping",
    "Causal Inference & Estimation",
    "Feature Attribution",
    "Deep Learning",
    "Healthcare AI",
    "Fairness & Robustness",
  ],

  news: [
    { date: "2026", text: "📄 New paper accepted at the <strong>Workshops of EDBT/ICDT 2026</strong> (Tampere, Finland): <em>Rethinking HyperSpectral Image Classification (HSIC) Benchmark with Explainability (xAI) under a Causal Estimation Perspective</em>." },
    { date: "2025", text: "🎉 Paper published at <strong>IGARSS 2025</strong> — IEEE International Geoscience and Remote Sensing Symposium: <em>Optimizing Deep Learning for Satellite Hyperspectral Data: an xAI-Driven Approach to Hyperparameter Selection</em>. Pages 7602–7606. <a href='https://doi.org/10.1109/IGARSS55030.2025.11243437' target='_blank' rel='noopener'>DOI →</a>" },
    { date: "2024", text: "🎓 Completed Master's degree in AI & Data Science at <strong>Mundiapolis University</strong>, Casablanca." },
    { date: "2023", text: "🏆 Ranked <strong>top 30%</strong> in a competitive Data Science Coding Challenge on Loan Default Prediction." },
  ],

  publications: [
    {
      id: "pub1",
      type: "conference",
      title: "Optimizing Deep Learning for Satellite Hyperspectral Data: an xAI-Driven Approach to Hyperparameter Selection",
      authors: "Michele Linardi, Sékou Dabo, Claudia Paris",
      venue: "IEEE International Geoscience and Remote Sensing Symposium (IGARSS)",
      year: 2025,
      tags: ["Explainable AI", "Hyperspectral Imaging", "Deep Learning", "Transformers", "PRISMA"],
      links: { pdf: "https://doi.org/10.1109/IGARSS55030.2025.11243437", github: "https://github.com/ds4xai/xAIDrivenHyperOpt", code: "", slides: "", poster: "" },
      abstract: "The growing availability of spaceborne Hyperspectral Imaging (HSI) missions combined with advancements in Deep Learning (DL), offers significant potential for global environmental mapping. However, most DL methods are tailored to airborne HSI, making it challenging to adapt them for optimal performance with satellite data. To solve this issue, this study explores the use of explainable Artificial Intelligence (xAI) to adapt existing DL architectures to spaceborne HSI. In particular, the best hyperparameter selection is carried out by evaluating the consistency of the explanations across different model instances using xAI Integrated Gradients method. Experiments were conducted using two cutting-edge DL models commonly used for airborne HSI: an attention-based Vision Transformer (ViT) and a standard 2D-Convolutional Neural Network (CNN). Results from a crop-type mapping task using Hyperspectral Precursor and Application Mission (PRISMA) satellite data demonstrate the effectiveness of the proposed approach in facilitating the optimal hyperparameter selection, i.e., the one able to maximize the macro Fscore obtained on the test set.",
      highlight: true,
    },
    {
      id: "pub2",
      type: "workshop",
      title: "Rethinking HyperSpectral Image Classification (HSIC) Benchmark with Explainability (xAI) under a Causal Estimation Perspective",
      authors: "Sékou Dabo, Michele Linardi, Claudia Paris",
      venue: "Workshops of the EDBT/ICDT 2026 Joint Conference",
      year: 2026,
      tags: ["Explainable AI", "Hyperspectral Imaging", "Causality", "Benchmarking", "HSIC"],
      links: { github: "https://github.com/ds4xai/ReX-HSIC", pdf: "", code: "", slides: "", poster: "" },
      abstract: "soon.",
      highlight: false,
    },
  ],

  projects: [
    {
      title: "Neural Networks with NumPy",
      subtitle: "Deep Learning · Pedagogy · Mar 2024",
      description: "A hands-on article demystifying deep learning by building neural networks from scratch using only NumPy — no framework. Covers classification (MNIST handwritten digits) and regression (Paris Housing prices), demonstrating that AI fundamentals are accessible with algebra, statistics, and basic calculus.",
      tags: ["From Scratch", "Python", "NumPy", "Neural Networks", "MNIST", "Regression"],
      links: { github: "https://github.com/ds4xai/nn-with-numpy-4-intuitive-comprehension" },
      status: "Published",
      metric: "MNIST classification · Paris Housing regression",
    },
    {
      title: "Amazon Deforestation Analysis",
      subtitle: "Computer Vision · Environmental Science · Nov 2023",
      description: "Quantified deforestation in the Rondônia region of the Amazon forest between 2000 and 2012 using NASA satellite imagery. Applied image processing, mathematical morphology operators (erosion, dilation, closure) and convolution to accurately measure forest cover loss.",
      tags: ["Python", "OpenCV", "NumPy", "Computer Vision", "Mathematical Morphology", "NASA"],
      links: { github: "https://github.com/ds4xai/computer-vision-deforestation-rate" },
      status: "Published",
      metric: "21.33% deforestation rate (2000–2012)",
    },
    {
      title: "Loan Default Prediction",
      subtitle: "Machine Learning · Classification · Sep 2023",
      description: "Built a classifier to predict individual loan eligibility on a highly imbalanced dataset. Applied 35% oversampling and combined models via a voting ensemble — reaching <strong>87% accuracy</strong> and ranking in the <strong>top 30%</strong> of a competitive coding challenge.",
      tags: ["Python", "scikit-learn", "NumPy", "Pandas", "Resampling", "Ensemble Learning"],
      links: { demo: "https://hub.labs.coursera.org/connect/sharedmfwevgxr?forceRefresh=false&path=%2Fnotebooks%2FLoanDefaultPrediction.ipynb&isLabVersioning=file-prep" },
      status: "Published",
      metric: "87% Accuracy · Top 30%",
    },
  ],

  teaching: [
    { course: "Web Integration — HTML, CSS, JavaScript", role: "Teaching Assistant", institution: "IUT Cergy-Pontoise (CYU)", institutionUrl: "https://cyiut.cyu.fr/", year: "2026 (in progress)", hours: "46h", level: "BUT 1st year · MMI – Web Development" },
    { course: "Advanced Python & Web Integration",       role: "Teaching Assistant", institution: "IUT Cergy-Pontoise (CYU)", institutionUrl: "https://cyiut.cyu.fr/", year: "2025–2026", hours: "18h", level: "BUT 3rd year · MMI – Web Development" },
  ],
};
