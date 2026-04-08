export default function PortfolioWebsite() {
  const featuredProjects = [
    {
      title: "Cardiometabolic Risk Prediction App",
      type: "Deployed ML System",
      description:
        "A deployed machine learning application that predicts multiple cardiometabolic risk factors using non-laboratory inputs, designed to support early risk screening and preventive health decision-making.",
      highlights: [
        "Multi-output classification model",
        "F1-score up to 0.86",
        "Trained on NHANES population health data",
        "Flask deployment with user-facing interface",
      ],
      codeLink: "https://github.com/success222/cardiometabolic-risk-pred",
      demoLink: "https://cardiometabolic-risk-pred.onrender.com/",
    },
    {
      title: "Sleep Disorder Prediction App",
      type: "Deployed ML System",
      description:
        "A machine learning application that predicts sleep disorder outcomes from lifestyle and physiological features, built with a focus on practical usability and deployment-ready design.",
      highlights: [
        "Classification pipeline for sleep disorder prediction",
        "End-to-end workflow from preprocessing to deployment",
        "Flask-based deployed application",
        "Designed for real-world user interaction",
      ],
      codeLink: "https://github.com/success222/Sleep-Disorder-New",
      demoLink: "https://sleep-disorder-new.onrender.com/",
    },
    {
      title: "ASD Screening Analysis",
      type: "Machine Learning Project",
      description:
        "A predictive modeling project for autism spectrum disorder screening in children, comparing multiple machine learning approaches with a focus on performance and interpretability in healthcare contexts.",
      highlights: [
        "Model comparison across Logistic Regression, SVM, and Random Forest",
        "Accuracy of about 0.98",
        "ROC-AUC of 1.00",
        "Child health screening use case",
      ],
      codeLink: "https://github.com/success222/ASD-Prediction-in-Children/tree/main",
    },
  ];

  // TechCabal articles
  const tcArticles = [
    {
      title: "Informal Healthcare in Nigeria: Filling Gaps in a Strained System",
      type: "Article",
      image: "https://raw.githubusercontent.com/success222/portfolio/main/images/Informal%20HealthCare.webp",
      summary:
        "Examines how informal providers function as a parallel care system in response to persistent gaps in primary healthcare access, highlighting the trade-off between accessibility and quality.",
      link: "https://insights.techcabal.com/informal-healthcare-in-nigeria-filling-gaps-in-a-fragile-system/",
    },
    {
      title: "How Gaps in Medical Training May Contribute to Nigeria’s Brain Drain",
      type: "Article",
      image: "https://raw.githubusercontent.com/success222/portfolio/main/images/Medical%20Brain%20Drain.jpg",
      summary:
        "Explores how gaps in clinical training, especially in communication and decision-making, may contribute to Nigeria’s medical brain drain beyond the usual explanations of salary and working conditions.",
      link: "https://insights.techcabal.com/how-gaps-in-medical-training-may-contribute-to-nigerias-brain-drain/",
    },
    {
      title: "Teletherapy in Africa: Is Virtual Care as Effective as Traditional Therapy?",
      type: "Article",
      image: "https://insights.techcabal.com/wp-content/uploads/insight/2025/12/ChatGPT-Image-Dec-3-2025-10_06_31-AM.png",
      summary:
        "Assesses teletherapy as a response to mental health access gaps in Africa, showing strong outcomes for common conditions while positioning virtual care as a complement to in-person care.",
      link: "https://insights.techcabal.com/teletherapy-in-africa-is-virtual-care-as-effective-as-traditional-therapy/",
    },
    {
      title: "The State of Healthtech in Nigeria 2026",
      type: "Report",
      image: null,
      summary:
        "A research report examining the Nigerian healthtech landscape, including market trends, stakeholder perspectives, and structured recommendations for operators, investors, and decision-makers.",
      link: "#",
    },
  ];

  // Data analysis projects
  const dataProjects = [
    {
      title: "Quality of Life in Children with Autism Spectrum Disorder Analysis",
      image: "https://github.com/success222/QoL-Autism-Analysis/blob/main/interventions_comparison.png?raw=true",
      summary:
        "An end-to-end analysis of quality of life in children with Autism Spectrum Disorder, covering data cleaning, exploratory analysis, and visualization to uncover patterns across interventions and outcomes.",
      link: "https://github.com/success222/QoL-Autism-Analysis",
    },
    {
      title: "Behavioural and Health Data Analysis",
      image: null,
      summary:
        "A structured data analysis project exploring behavioural and health-related data to identify meaningful patterns through statistical analysis, feature exploration, and visualization.",
      link: "#",
    },
  ];

  // Healthcare & research works
  const healthcareResearch = [
    {
      title: "Automated Detection of Pulmonary Tuberculosis From Chest X-Ray Images Using Artificial Intelligence: A Systematic Review",
      subtitle: "Systematic Review",
      summary:
        "A systematic review of artificial intelligence approaches for pulmonary tuberculosis detection using chest X-ray imaging, with emphasis on modelling techniques, datasets, performance metrics, and clinical relevance in low-resource settings.",
      link: "#",
    },
    {
      title: "Automated Detection of Pulmonary Tuberculosis From Chest X-Ray Images Using Artificial Intelligence",
      subtitle: "Research Thesis",
      summary:
        "A deep learning project focused on automated tuberculosis detection from chest X-ray images, emphasizing clinically relevant screening performance, explainability, and practical application.",
      link: "#",
    },
  ];

  // certifications
  const certifications = [
    {
      label: "Data Science Professional Certificate",
      issuer: "International Business Machines Corporation",
      link: "#",
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

  // skills
  const skills = {
    "ML & Modeling": [
      "Scikit-learn",
      "Classification (binary and multi-output)",
      "Feature engineering",
      "Cross-validation",
      "Hyperparameter tuning",
      "Model evaluation (F1-score, ROC-AUC, sensitivity, specificity)",
    ],
    "Deployment & Engineering": [
      "Flask",
      "Docker",
      "Render",
      "AWS",
      "Git",
      "GitHub",
      "ML pipeline thinking",
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
  const ImagePlaceholder = ({ label }: { label: string }) => (
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

  {/* ── Summary Section ── */}
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="mb-6 inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm font-medium text-slate-600">
            ML Engineer • Healthcare AI • Public Health
          </p>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Machine Learning Engineer focused on healthcare AI and real world impact
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                I&apos;m Success Sotonwa — a machine learning engineer focused on healthcare AI and clinical decision support. I build and deploy machine learning systems designed for real-world health applications, combining data, research, and domain expertise to improve decision-making and outcomes.
              </p>
              {/* <p className="mt-4 text-sm font-semibold text-700">
                Open to machine learning engineering roles and opportunities in healthcare AI, public health, and applied ML systems.
              </p> */}
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Journey
                </p>
                <p className="text-sm leading-7 text-slate-700">
                  With a background in healthcare and public health, my work is grounded in real system challenges — from access gaps to clinical decision-making limitations. I focus on translating these problems into practical machine learning solutions, building tools that are technically sound and usable in real-world settings.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Experience
                </a>
                <a
                  href="#cv"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  CV & Certifications
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm lg:sticky lg:top-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                At a glance
              </h2>
              <div className="mt-4 grid gap-3">
                {[
                  { icon: "🧠", label: "Built and deployed ML systems" },
                  { icon: "🏥", label: "Healthcare and public health background" },
                  { icon: "📊", label: "Data analysis and model evaluation" },
                  { icon: "🔬", label: "Published articles and academic research" },
                  { icon: "⚙️", label: "Flask · Docker · Scikit-learn · Python" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* <section id="systems" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            ML Systems I&apos;ve Built
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Practical machine learning systems for health-focused use cases.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            My strongest work sits at the intersection of machine learning, healthcare, and deployment — not just modeling experiments, but systems designed to be usable in real-world settings.
          </p>
        </div>
      </section> */}

      {/* ── Featured Projects ── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Machine learning projects that show how I build.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These projects show applied modeling, system thinking, deployment, and problem solving in health-focused contexts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium text-slate-500">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
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
                    {/* GitHub icon */}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
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
      <section id="experience" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Applied Data & Research
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The experience behind the ML work.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real analytical, research, and writing experience that grounds and strengthens the machine learning work.
            </p>
          </div>

          {/* ── TechCabal ── */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-slate-950">TechCabal Insights — Articles & Reports</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Published healthcare-focused research and analysis covering system gaps, digital health, workforce challenges, and emerging trends in the African health ecosystem.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tcArticles.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md"
                >
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  ) : (
                    <div className="px-4 pt-4">
                      <ImagePlaceholder label={item.title} />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {item.type}
                    </span>
                    <h4 className="mt-2 text-base font-semibold leading-snug text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 transition group-hover:text-slate-600"
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
            <h3 className="text-xl font-bold text-slate-950">Data Analysis Projects</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              End-to-end analytical projects across health and behavioural datasets, with emphasis on clean methodology, interpretability, and clear communication.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {dataProjects.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md"
                >
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                  ) : (
                    <div className="px-5 pt-5">
                      <ImagePlaceholder label={item.title} />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Data Analysis
                    </span>
                    <h4 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h4>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 transition group-hover:text-slate-600"
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
            <h3 className="text-xl font-bold text-slate-950">Healthcare & Public Health Research</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Original academic research grounded in clinical and public health training.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {healthcareResearch.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.subtitle}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline underline-offset-4 transition group-hover:text-slate-600"
                  >
                    View work →
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technical capabilities.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
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
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">CV</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Resume / Curriculum Vitae</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Includes machine learning projects, healthcare experience, and technical skills relevant to ML engineering and health-focused applications.
            </p>

            {/* CV download */}
            <a
              href="https://drive.google.com/file/d/1yxJZ77HxV-MK4olvCIaGQVdR-5EuTpQB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
            >
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
                    <p className="mt-0.5 text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="ml-4 flex-shrink-0 text-xs font-semibold text-slate-500 underline underline-offset-4 transition group-hover:text-slate-800">
                    View →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ── Contact ── */}
      <section id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build meaningful health-focused ML systems.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Open to machine learning engineering roles and opportunities in healthcare AI, public health, and applied ML systems.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm font-medium text-slate-400">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p>Email: sotonwasuccess1@gmail.com</p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/success222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition hover:text-white"
                  >
                    github.com/success222
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/success-sotonwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition hover:text-white"
                  >
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
