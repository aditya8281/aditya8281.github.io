type SectionHeadingProps = {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="flex items-center gap-4">
        <span className="block h-px w-20 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-indigo-400/10" aria-hidden="true" />
        <p className="text-xs uppercase tracking-[0.48em] text-cyan-300/80">{subtitle}</p>
      </div>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <div className="section-divider" />
    </div>
  )
}
