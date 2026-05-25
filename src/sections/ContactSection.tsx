import SectionHeading from '../components/SectionHeading'
import { contactMethods } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Contact" subtitle="Get in touch" />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] xl:gap-12">
          <div className="space-y-6 rounded-[2rem] border border-cyan-400/10 bg-slate-950/85 p-8 shadow-glow">
            <p className="text-slate-300 leading-8">
              Open to projects around computer vision, edge AI, robotics, RL, and systems work. If the idea has real constraints and room to experiment, I’d be happy to talk.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="rounded-3xl border border-cyan-400/10 bg-slate-950/75 px-5 py-4 text-sm text-slate-100 transition hover:border-cyan-300/30 hover:bg-slate-900/90 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">{method.label}</p>
                  <p className="mt-2 font-medium text-white break-words">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
            <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/85 p-8 text-slate-300 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Availability
              </p>
              <p className="mt-4 leading-7">
                Interested in internships, research collaborations, and practical AI systems
                that move from prototype to something usable.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}
