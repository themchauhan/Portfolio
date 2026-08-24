import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Email_temp from '@/components/Email_temp';
import BannerSecond from '@/components/BannerSecond';
import { getExperienceText } from '../../utils/experience';

export default function Page() {
    const experience = getExperienceText();

    return(
        <main>
            <Nav />
            <BannerSecond
                title="About Me"
                subtitle="I build fast, reliable, and user-friendly digital experiences that help ideas grow into real products."
                linkUrl="/contacts"
                linkText="Let's Talk"
                showLink={true}
            />
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-3xl font-bold text-slate-900">{experience}</p>
                            <p className="mt-2 text-slate-600">Hands-on development experience across frontend and backend projects.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-3xl font-bold text-slate-900">Full Stack</p>
                            <p className="mt-2 text-slate-600">Focused on React, Next.js, Node.js, and scalable web architecture.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-3xl font-bold text-slate-900">Client-First</p>
                            <p className="mt-2 text-slate-600">Clean communication, dependable delivery, and thoughtful UX in every build.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Email_temp/>
            <Footer/>
        </main>
    )
}
