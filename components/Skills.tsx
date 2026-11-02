const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "LLMs",
      "Prompt Engineering",
      "Feature Engineering",
      "Model Evaluation",
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
    title: "Data Science",
    skills: [
      "SQL",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Statistical Analysis",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Development",
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
      "Render",
      "GitHub Actions",
      "AWS",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#e9eadf] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
              Technical Toolkit
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#17231c] md:text-4xl">
              Technologies & Expertise
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[#d7dbce] bg-[#fffef8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#17231c]/40 hover:shadow-lg hover:shadow-[#17231c]/5"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-[#9a9f91]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#d5f36a]" />
              </div>

              <h3 className="mb-5 text-xl font-bold tracking-tight text-[#17231c]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#d7dbce] bg-[#f4f2e9] px-3 py-2 text-xs font-medium text-[#52644f] transition-colors hover:border-[#17231c]/40 hover:bg-[#e9eadf]"
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