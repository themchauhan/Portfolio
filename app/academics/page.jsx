import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Academics',
  description: "Manish Chauhan's education: MCA from Punjab Technical University, B.Sc. IT (Hons.) from Kurukshetra University.",
  alternates: { canonical: 'https://themanishchauhan.in/academics' },
})

const items = [
  ['2016 – 2018', 'Master of Computer Application', 'Punjab Technical University', 'Post graduate'],
  ['2013 – 2016', 'Bachelor of Information Technology (Hons.)', 'Kurukshetra University, Kurukshetra', 'Graduate'],
  ['2012 – 2013', 'Higher Secondary School', 'Kendriya Vidyalaya', '12th grade'],
  ['2010 – 2011', 'Secondary School', 'Kendriya Vidyalaya', '10th grade'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <PageHero eyebrow="Academics" title="Where I learned the basics.">
        A computer science foundation that I&apos;ve been building on in the real world since 2018.
      </PageHero>
      <section className="!py-0 pb-16 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="border-t border-black/20">
            {items.map(([yr, deg, inst, level]) => (
              <li key={deg} className="grid gap-2 border-b border-black/20 py-8 md:grid-cols-[180px_1.6fr_1fr] md:items-baseline md:gap-8">
                <p className="font-display text-lg font-bold text-[#ff5a1f]">{yr}</p>
                <div>
                  <h2 className="font-display text-2xl font-extrabold md:text-3xl">{deg}</h2>
                  <p className="mt-1 text-lg text-[#555]">{inst}</p>
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#777] md:text-right">{level}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Want to work together?" />
      <Footer />
    </main>
  )
}
