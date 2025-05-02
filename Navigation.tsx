import { Link } from "wouter";

type NavItem = {
  id: string;
  label: string;
  icon: string;
  path: string;
};

type NavigationProps = {
  currentPath: string;
  onItemClick?: () => void;
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'fa-home', path: '/' },
  { id: 'tools', label: 'Tools', icon: 'fa-toolbox', path: '/tools' },
  { id: 'privacy', label: 'Privacy Policy', icon: 'fa-shield-alt', path: '/privacy' },
  { id: 'terms', label: 'Terms & Conditions', icon: 'fa-file-contract', path: '/terms' },
  { id: 'contact', label: 'Contact Us', icon: 'fa-envelope', path: '/contact' },
];

export default function Navigation({ currentPath, onItemClick }: NavigationProps) {
  return (
    <nav className="p-4 space-y-1">
      {navItems.map((item) => (
        <Link key={item.id} href={item.path}>
          <div 
            className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
              currentPath === item.path
                ? "bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            onClick={onItemClick}
          >
            <i className={`fas ${item.icon} w-5`}></i>
            <span className="ml-3">{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
