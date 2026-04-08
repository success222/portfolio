export default function PortfolioWebsite() {
  const featuredProjects = [
    {
      title: "Cardiometabolic Risk Prediction App",
      type: "Deployed ML Project",
      description:
        "A machine learning web application that predicts multiple cardiometabolic risk factors from non-laboratory inputs, built to support preventive health screening and decision-making.",
      highlights: [
        "Multi-output prediction workflow",
        "Flask deployment with user-facing interface",
        "Focus on real-world health risk estimation",
      ],
      codeLink: "https://github.com/success222/cardiometabolic-risk-pred",
      demoLink: "https://cardiometabolic-risk-pred.onrender.com/"
    },
    {
      title: "Sleep Disorder Prediction App",
      type: "Featured ML Project",
      description:
        "A machine learning application designed to predict likely sleep disorder outcomes based on lifestyle and health-related features, with deployment-focused improvements for usability.",
      highlights: [
        "End-to-end ML pipeline",
        "Deployment-oriented product thinking",
        "Health-focused user experience",
      ],
      codeLink: "https://github.com/success222/Sleep-Disorder-New",
      demoLink: "https://sleep-disorder-new.onrender.com/"
    },
    {
      title: "ASD Screening Analysis",
      type: "ML / Data Science Project",
      description:
        "A predictive modeling project comparing machine learning approaches for autism screening in children, with strong performance and emphasis on interpretable healthcare applications.",
      highlights: [
        "Model comparison and evaluation",
        "Healthcare use case",
        "Child health relevance",
      ],
      codeLink: "https://github.com/success222/ASD-Prediction-in-Children/tree/main",
    },
  ];

  // TechCabal articles
  const tcArticles = [
    {
      title: "Informal Healthcare in Nigeria: Filling Gaps in a Strained System",
      type: "Article",
      image: "https://raw.githubusercontent.com/success222/portfolio/main/images/Informal%20HealthCare.png", 
      summary:
        "Explores how informal providers (e.g., drug vendors, TBAs) function as a parallel care system due to gaps in primary healthcare access. Highlights the trade-off between accessibility and quality, and the need for structured integration into formal health systems.",
      link: "https://insights.techcabal.com/informal-healthcare-in-nigeria-filling-gaps-in-a-fragile-system/", // Replace with actual article URL
    },
    {
      title: "How Gaps in Medical Training May Contribute to Nigeria’s Brain Drain",
      type: "Article",
      image: "https://insights.techcabal.com/wp-content/uploads/insight/2026/03/Screenshot-2026-03-25-164420.png",
      summary:
        "Examines how gaps in clinical training—particularly in decision-making and communication—may contribute to Nigeria’s medical brain drain, beyond commonly cited factors like pay and working conditions.",
      link: "https://insights.techcabal.com/how-gaps-in-medical-training-may-contribute-to-nigerias-brain-drain/",
    },
    {
      title: "Teletherapy in Africa: Is Virtual Care as Effective as Traditional Therapy?",
      type: "Article",
      image: "https://insights.techcabal.com/wp-content/uploads/insight/2025/12/ChatGPT-Image-Dec-3-2025-10_06_31-AM.png",
      summary:
        "Analyzes the effectiveness of teletherapy in addressing mental health access gaps in Africa, showing strong outcomes for common conditions while emphasizing its role as a complement to, not a replacement for, in-person care.",
      link: "https://insights.techcabal.com/teletherapy-in-africa-is-virtual-care-as-effective-as-traditional-therapy/",
    },
    {
      title: "The State of Healthtech in Nigeria 2026",
      type: "Report",
      image: null,
      summary:
        "A comprehensive research report examining [subject area], produced for TechCabal's insights arm. The report covers market dynamics, stakeholder perspectives, and data-driven recommendations, providing a structured view of the landscape for decision-makers and investors.",
      link: "#",
    },
  ];

  // Data analysis projects
  const dataProjects = [
    {
      title: "Quality of Life in Children with Autism Spectrum Disorder Analysis",
      image: "https://github.com/success222/QoL-Autism-Analysis/blob/main/interventions_comparison.png?raw=true",
      summary:
        "An end-to-end analysis of Autism Spectrum Disorder, covering data cleaning, exploratory analysis, and visualisation. The project surfaces actionable patterns and communicates findings through clear charts and a structured narrative, demonstrating rigorous analytical thinking applied to a real-world problem.",
      link: "https://github.com/success222/QoL-Autism-Analysis",
    },
    {
      title: "Data Analysis Project Two",
      image: null,
      summary:
        "A structured analysis project focused on [topic/dataset], applying statistical methods to uncover trends and test hypotheses. The work demonstrates proficiency in Python-based data workflows and a strong emphasis on interpretability and evidence-based storytelling.",
      link: "#",
    },
  ];

  // Healthcare & research works
  const healthcareResearch = [
    {
      title: "Automated Detection of Pulmonary Tuberculosis From Chest X-Ray Images Using Artificial Intelligence: A Systematic Review",
      subtitle: "Research Paper (In Progress)",
      summary:
        "A systematic review of AI approaches for pulmonary tuberculosis detection using chest X-rays. Evaluates modelling techniques, datasets, and performance metrics across studies, with a focus on clinical relevance and applicability in low-resource settings.",
      link: "#",
    },
    {
      title: "Automated Detection of Pulmonary Tuberculosis From Chest X-Ray Images Using Artificial Intelligence",
      subtitle: "Research Thesis (In Progress)",
      summary:
        "Developing a deep learning-based model for TB detection from chest X-ray images. Focused on building a clinically relevant screening tool, with evaluation using metrics such as sensitivity, specificity, and AUC, alongside model explainability (Grad-CAM).",
      link: "#",
    },
  ];

  const certifications = [
    {
      label: "Data Science Professional Certificate",
      issuer: "International Business Machines Corporation",
      link: "#", // Replace with certificate URL or PDF link
    },
    {
      label: "Data Analysis Professional Certificate",
      issuer: "International Business Machines Corporation",
      link: "#",
    },
    {
      label: "Bachelor of Nursing Science (BNSc)",
      issuer: "Bowen University, Iwo",
      link: "#",
    },
    {
      label: "RN — Registered Nurse",
      issuer: "Nursing & Midwifery Council of Nigeria",
      link: "https://drive.google.com/file/d/1WcoGJSNFakJ0fMdzd3Xe9gLJOHAyxJgl/view?usp=sharing",
    },
    {
      label: "RM — Registered Midwife",
      issuer: "Nursing & Midwifery Council of Nigeria",
      link: "https://drive.google.com/file/d/1olJs3JkmweaRGDgg44XZIBOS3wBeZJd2/view?usp=sharing",
    },
  ];

  const skills = {
    "ML & Modeling": [
      "Scikit-learn",
      "Model evaluation",
      "Classification",
      "Feature engineering",
      "Cross-validation",
      "Hyperparameter tuning",
    ],
    "Deployment & Engineering": [
      "Flask",
      "Docker",
      "Render",
      "AWS",
      "Git",
      "GitHub",
      "Pipeline thinking",
    ],
    "Data & Analytics": [
      "Python",
      "Pandas",
      "NumPy",
      "EDA",
      "Data visualization",
      "Power BI",
      "Looker Studio",
      "Excel",
      "Google Sheets",
      "Flourish",
    ],
    "Domain Focus": [
      "Healthcare AI",
      "Public health",
      "Clinical decision support",
      "Child health",
      "Screening tools",
    ],
  };

  // Reusable image placeholder block
  const ImagePlaceholder = ({ label }) => (
    <div className="flex h-44 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
      <div className="text-center">
        <svg
          className="mx-auto mb-2 h-8 w-8 text-slate-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 20.25h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12.75c0 .828.672 1.5 1.5 1.5z"
          />
        </svg>
        <p className="text-xs text-slate-400">Add image for {label}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── Hero ── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="mb-6 inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm font-medium text-slate-600">
            ML Engineer • Healthcare AI • Public Health
          </p>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building machine learning solutions grounded in healthcare, research, and real-world impact.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                I'm Success Sotonwa — a healthcare-trained professional transitioning into machine learning engineering, with experience spanning data analysis, research, deployed ML projects, and health-focused problem solving.
              </p>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">My Journey</p>
                <p className="text-sm leading-7 text-slate-700">
                  My background started in healthcare, where I saw firsthand how gaps in systems, access, and decision-making affect outcomes. That led me into data analysis and research, where I learned how to work with evidence, uncover patterns, and communicate findings clearly. Over time, I moved deeper into data science and machine learning, focusing on building practical tools that can support better health decisions. Today, I'm working toward becoming a machine learning engineer with a strong foundation in healthcare, public health, and applied problem solving.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
                  View Projects
                </a>
                <a href="#cv" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  CV & Certifications
                </a>
              </div>
            </div>
 
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm lg:sticky lg:top-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">At a glance</h2>
              <div className="mt-4 grid gap-3">
                {[
                  { icon: "🧠", label: "Deployed ML apps" },
                  { icon: "🏥", label: "Healthcare & public health background" },
                  { icon: "📊", label: "Research-informed problem framing" },
                  { icon: "🔬", label: "Published articles & academic research" },
                  { icon: "⚙️", label: "Flask · Docker · Scikit-learn · Python" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Featured Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Machine learning projects that show how I build.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These are the projects that should carry the most weight on the site. They represent applied modeling, deployment, and problem solving in health-focused contexts.
          </p>
        </div>
 
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-medium text-slate-500">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {/* GitHub icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {/* External link icon */}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    App Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Applied Data & Research ── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Applied Data & Research
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The experience behind the ML work.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real analytical, research, and writing experience that grounds and supports the machine learning work.
            </p>
          </div>

          {/* ── TechCabal ── */}
          <div className="mt-16">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-slate-950">TechCabal Insights — Articles & Reports</h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Published research-driven articles and a comprehensive report, combining data analysis, insight generation, and evidence-backed storytelling.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tcArticles.map((item) => (
                <div key={item.title} className="group flex flex-col rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
                  {item.image
                    ? <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                    : <div className="px-4 pt-4"><ImagePlaceholder label={item.title} /></div>
                  }
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{item.type}</span>
                    <h4 className="mt-2 text-base font-semibold text-slate-950 leading-snug">{item.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">{item.summary}</p>
                    <a
                      href={item.link}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 group-hover:text-slate-600 transition"
                    >
                      Read {item.type.toLowerCase()} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Data Analysis Projects ── */}
          <div className="mt-20">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-slate-950">Data Analysis Projects</h3>
              {/* <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                2 Projects
              </span> */}
            </div>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              End-to-end analytical projects across health and behavioural datasets, with a strong focus on clean methodology and clear communication.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {dataProjects.map((item) => (
                <div key={item.title} className="group flex flex-col rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
                  {item.image
                    ? <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                    : <div className="px-5 pt-5"><ImagePlaceholder label={item.title} /></div>
                  }
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Data Analysis</span>
                    <h4 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">{item.summary}</p>
                    <a
                      href={item.link}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 group-hover:text-slate-600 transition"
                    >
                      View project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Healthcare & Public Health Research ── */}
          <div className="mt-20">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-slate-950">Healthcare & Public Health Research</h3>
              {/* <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                2 Works
              </span> */}
            </div>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Original academic research grounded in clinical and public health training.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {healthcareResearch.map((item) => (
                <div key={item.title} className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.subtitle}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                  <a
                    href={item.link}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 group-hover:text-slate-600 transition"
                  >
                    Read paper →
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Skills</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technical capabilities.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CV & Certifications ── */}
      <section id="cv" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* CV download */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">CV</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Resume / Curriculum Vitae</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Includes healthcare background, analytics experience, and machine learning projects.
            </p>
            <a href="https://drive.google.com/file/d/1yxJZ77HxV-MK4olvCIaGQVdR-5EuTpQB/view?usp=sharing" className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
              View CV →
            </a>
          </div>

          {/* Certifications */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Certifications & Qualifications
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Proof of learning and training</h2>
            <div className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.label}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-white hover:shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{cert.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="ml-4 flex-shrink-0 text-xs font-semibold text-slate-500 underline underline-offset-4 group-hover:text-slate-800 transition">
                    View →
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Contact ── */}
      <section className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's build meaningful health-focused ML systems.
              </h2>
              {/* <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                This portfolio is designed to show range without losing focus: analytics, research, healthcare context, and machine learning engineering.
              </p> */}
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm font-medium text-slate-400">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p>Email: sotonwasuccess1@gmail.com</p>
                <p>
                  GitHub:{" "}
                  <a href="https://github.com/success222" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition">
                    github.com/success222
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a href="https://linkedin.com/in/success-sotonwa" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition">
                    linkedin.com/in/success-sotonwa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}