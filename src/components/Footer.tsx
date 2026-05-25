export default function Footer() {
  return (
    <footer className="py-8 text-sm text-slate-400">
      <div className="app-container flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Let's connect....</p>
        <p>© {new Date().getFullYear()} Aditya Rathod.</p>
      </div>
    </footer>
  )
}
