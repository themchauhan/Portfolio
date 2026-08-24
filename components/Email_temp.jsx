import React from 'react';

const startYear = 2018;
const startMonthIndex = 2; // March is month index 2.

const getExperienceText = () => {
  const now = new Date();
  const yearDiff = now.getFullYear() - startYear;
  const monthDiff = now.getMonth() - startMonthIndex;
  const totalMonths = yearDiff * 12 + monthDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} years ${months} months`;
};

const Email_temp = () => {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Resume Snapshot</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Manish Chauhan</h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              Full Stack Developer focused on building performant web apps with polished UI and
              reliable backend systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2 text-slate-100">React</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-slate-100">Next.js</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-slate-100">Node.js</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-slate-100">UI/UX</span>
            </div>
          </div>

          <div className="grid gap-8 p-8 md:grid-cols-[1fr_2fr]">
            <aside className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Contact
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <p>
                    Email:{' '}
                    <a className="font-medium text-blue-600 hover:text-blue-700" href="mailto:mani7015066@gmail.com">
                      mani7015066@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a className="font-medium text-blue-600 hover:text-blue-700" href="tel:+917015066237">
                      +91 7015066237
                    </a>
                  </p>
                  <p>
                    Portfolio:{' '}
                    <a
                      className="font-medium text-blue-600 hover:text-blue-700"
                      href="https://themanishchauhan.in/"
                    >
                      Manish Chauhan
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Education
                </h3>
                <p className="mt-3 text-sm font-medium text-slate-800">Master of Computer Applications (MCA)</p>
                <p className="text-sm text-slate-600">Punjab Technical University</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Profiles
                </h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <a className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700 hover:bg-slate-200" href="https://www.linkedin.com/in/themchauhan">
                    LinkedIn
                  </a>
                  <a className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700 hover:bg-slate-200" href="https://www.instagram.com/myself_manish_chauhan">
                    Instagram
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold text-slate-900">Professional Summary</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  Started professional development in March 2018 and have consistently delivered
                  modern, scalable, and user-centered web products. I enjoy translating product ideas
                  into production-ready applications with clear architecture and strong attention to
                  design details.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-900">Experience</h3>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-base font-semibold text-slate-900">Full Stack Developer</p>
                    <p className="text-sm font-medium text-slate-600">March 2018 - Present</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Total experience: <span className="font-semibold text-slate-800">{getExperienceText()}</span>
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                    <li>Build responsive interfaces and reusable components for modern web apps.</li>
                    <li>Develop backend APIs and integrate third-party services with reliability.</li>
                    <li>Collaborate with clients to scope requirements and deliver maintainable solutions.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'REST APIs', 'Tailwind CSS', 'AI Integrations'].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email_temp;
