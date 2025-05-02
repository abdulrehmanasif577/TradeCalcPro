import Logo from "./Logo";
import Navigation from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";
import AdBanner from "./AdBanner";

type SidebarProps = {
  mobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  currentPath: string;
};

export default function Sidebar({ mobileMenuOpen, closeMobileMenu, currentPath }: SidebarProps) {
  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-10 w-64 transform ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 shadow-sm`}
    >
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
        <Logo onClick={closeMobileMenu} />
        <button 
          className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={closeMobileMenu}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      {/* Nav Links */}
      <Navigation currentPath={currentPath} onItemClick={closeMobileMenu} />
      
      {/* AdSense Sidebar */}
      <div className="mt-6 mx-4">
        <AdBanner type="sidebar" />
      </div>
      
      {/* Theme Toggle */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-700">
        <ThemeToggle />
      </div>
    </aside>
  );
}
