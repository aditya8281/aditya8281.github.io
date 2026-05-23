export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-8 text-sm text-slate-400">
      <div className="app-container flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Built with React, TypeScript, Tailwind CSS, and a focus on clean architecture.</p>
        <p>© {new Date().getFullYear()} Aditya Rathod.</p>
      </div>
    </footer>
  )
}
