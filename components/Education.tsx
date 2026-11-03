import Link from "next/link";

const qualifications = [
  {
    title: "Master of Public Health (MPH)",
    issuer: "Lagos State University College of Medicine (LASUCOM)",
    status: "In progress",
    category: "Education",
  },
  {
    title: "Bachelor of Nursing Science (BNSc)",
    issuer: "Bowen University, Iwo",
    link: "https://drive.google.com/file/d/1HtZCLpxI_YtGlEj9Z8SH1EdfI8oPXy1e/view?usp=drive_link",
    category: "Education",
  },
  {
    title: "Registered Nurse (RN)",
    issuer: "Nursing and Midwifery Council of Nigeria",
    link: "https://drive.google.com/file/d/1WcoGJSNFakJ0fMdzd3Xe9gLJOHAyxJgl/view?usp=drive_link",
    category: "Professional Qualifications",
  },
  {
    title: "Registered Midwife (RM)",
    issuer: "Nursing and Midwifery Council of Nigeria",
    link: "https://drive.google.com/file/d/1olJs3JkmweaRGDgg44XZIBOS3wBeZJd2/view?usp=drive_link",
    category: "Professional Qualifications",
  },
    {
    title: "Certificate in Artificial Intelligence and Data Science",
    issuer: "DATICAN (DS-I Africa)",
    link: "https://drive.google.com/file/d/1qEHrfCrIy5DQxPY9_k7xt6lW4MhBospT/view?usp=sharing",
    category: "Certifications",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    category: "Certifications",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    category: "Certifications",
  },
  {
    title: "Data Analyst Professional Certificate",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P88FD2F4DHHI",
    category: "Certifications",
  },
];

const categoryOrder = [
  "Education",
  "Professional Qualifications",
  "Certifications",
];

export default function Education() {
  return (
    <section id="education" className="bg-[#f4f2e9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
            Academic & Professional Background
          </p>

          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#17231c] md:text-4xl">
            Education & Qualifications
          </h2>
        </div>

        <div className="space-y-12">
          {categoryOrder.map((category, categoryIndex) => {
            const items = qualifications.filter(
              (item) => item.category === category
            );

            return (
              <div key={category}>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="text-lg font-bold text-[#17231c]">
                    {category}
                  </h3>

                  <span className="font-mono text-xs text-[#9a9f91]">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="h-px flex-1 bg-[#d7dbce]" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item) => (
                    <article
                      key={item.title}
                      className="flex min-h-[150px] items-center justify-between gap-5 rounded-2xl border border-[#d7dbce] bg-[#fffef8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#17231c]/40 hover:shadow-lg hover:shadow-[#17231c]/5"
                    >
                      <div className="min-w-0">
                        <h4 className="text-lg font-bold leading-snug text-[#17231c]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-[#687268]">
                          {item.issuer}
                        </p>

                        {"status" in item && (
                          <span className="mt-3 inline-flex rounded-full border border-[#b9c9a5] bg-[#edf2e5] px-3 py-1 text-xs font-medium text-[#40583b]">
                            {item.status}
                          </span>
                        )}
                      </div>

                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#52644f] transition hover:text-[#17231c]"
                        >
                          View
                          <span>↗</span>
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}