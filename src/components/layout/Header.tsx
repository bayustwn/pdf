import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import NavLink from "@/components/ui/NavLink";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 transition-transform group-hover:scale-105">
            <FileText size={18} className="text-white" />
          </div>
          <span className="text-base font-semibold tracking-tight">myPDF</span>
        </Link>

        <div className="flex items-center gap-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/editor" label="Editor" />
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
