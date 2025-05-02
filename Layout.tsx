import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import MarketTicker from "./MarketTicker";
import { useLocation } from "wouter";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Market Ticker */}
      <MarketTicker />
      
      {/* Mobile Header */}
      <header className="lg:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-primary-600 rounded flex items-center justify-center">
              <i className="fas fa-calculator text-white text-xs"></i>
            </div>
            <span className="text-base font-heading font-semibold text-gray-900 dark:text-white">TradeCalc Pro</span>
          </a>
          <button 
            onClick={() => {
              const htmlElement = document.documentElement;
              const currentTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
              if (currentTheme === 'dark') {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } else {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              }
            }} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-moon dark:fa-sun"></i>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen} 
        closeMobileMenu={closeMobileMenu} 
        currentPath={location}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 md:p-6">
        {children}
      </main>
    </div>
  );
}
