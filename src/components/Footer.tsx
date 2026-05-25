export default function Footer() {
  return (
    <footer className="py-8 text-sm text-slate-400 border-t border-slate-800/50">
      <div className="app-container flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Vision, edge AI, RL, and systems experiments.</p>
        <p>© {new Date().getFullYear()} Aditya Rathod</p>
      </div>
    </footer>
  )
}
