const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "LLMs",
      "Prompt Engineering",
      "XGBoost",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Data Science",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Statistical Analysis",
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Docker",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      "Docker",
      "Render",
      "GitHub Actions",
      "AWS",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Skills
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Technologies & Expertise
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}