import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
}

export default function NavLink({ to, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
    >
      {label}
    </Link>
  );
}
