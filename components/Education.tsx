import Link from "next/link";

const credentials = [
  {
    title: "Bachelor of Nursing Science (BNSc)",
    issuer: "Bowen University, Iwo",
    link: "https://drive.google.com/file/d/1HtZCLpxI_YtGlEj9Z8SH1EdfI8oPXy1e/view?usp=drive_link",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    link: "#",
  },
  {
    title: "Registered Nurse (RN)",
    issuer: "Nursing & Midwifery Council of Nigeria",
    link: "https://drive.google.com/file/d/1WcoGJSNFakJ0fMdzd3Xe9gLJOHAyxJgl/view?usp=drive_link",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    link: "#",
  },
  {
    title: "Registered Midwife (RM)",
    issuer: "Nursing & Midwifery Council of Nigeria",
    link: "https://drive.google.com/file/d/1olJs3JkmweaRGDgg44XZIBOS3wBeZJd2/view?usp=drive_link",
  },
  {
    title: "Data Analyst Professional Certificate",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P88FD2F4DHHI",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Credentials
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Education & Certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors duration-300 hover:border-slate-300"
            >
              <div className="min-w-0 pr-4">
                <h3 className="text-base font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.issuer}
                </p>
              </div>

              <Link
                href={item.link}
                target="_blank"
                className="shrink-0 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}