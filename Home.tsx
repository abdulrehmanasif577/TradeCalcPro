import { Link } from "wouter";
import plLogo from "../assets/pl-logo.svg";
import positionLogo from "../assets/position-logo.svg";
import riskLogo from "../assets/risk-logo.svg";
import cryptoLogo from "../assets/crypto-logo.svg";
import marginLogo from "../assets/margin-logo.svg";

const calculators = [
  { 
    id: 'pl', 
    name: 'Profit & Loss', 
    icon: 'fa-chart-line',
    logo: plLogo,
    bgColor: 'bg-blue-600',
    darkBgColor: 'dark:bg-blue-800',
    textColor: 'text-blue-600',
    darkTextColor: 'dark:text-blue-500',
    desc: 'Calculate potential profit or loss for any trade' 
  },
  { 
    id: 'position', 
    name: 'Position Size', 
    icon: 'fa-balance-scale',
    logo: positionLogo,
    bgColor: 'bg-green-600',
    darkBgColor: 'dark:bg-green-800',
    textColor: 'text-green-600',
    darkTextColor: 'dark:text-green-500',
    desc: 'Determine optimal position size based on risk tolerance' 
  },
  { 
    id: 'risk', 
    name: 'Risk-Reward Ratio', 
    icon: 'fa-percent',
    logo: riskLogo,
    bgColor: 'bg-red-600',
    darkBgColor: 'dark:bg-red-800',
    textColor: 'text-red-600',
    darkTextColor: 'dark:text-red-500',
    desc: 'Calculate risk-reward ratio for your trades' 
  },
  { 
    id: 'crypto', 
    name: 'Crypto Profit', 
    icon: 'fa-coins',
    logo: cryptoLogo,
    bgColor: 'bg-amber-600',
    darkBgColor: 'dark:bg-amber-800',
    textColor: 'text-amber-600',
    darkTextColor: 'dark:text-amber-500',
    desc: 'Calculate crypto investment returns' 
  },
  { 
    id: 'margin', 
    name: 'Margin', 
    icon: 'fa-money-bill-wave',
    logo: marginLogo,
    bgColor: 'bg-purple-600',
    darkBgColor: 'dark:bg-purple-800',
    textColor: 'text-purple-600',
    darkTextColor: 'dark:text-purple-500',
    desc: 'Calculate margin requirements and leverage' 
  }
];

const features = [
  { 
    icon: 'fa-bolt', 
    bgColor: 'bg-green-50',
    textColor: 'text-green-500',
    title: 'Fast & Reliable', 
    desc: 'Real-time calculations with zero lag or delays' 
  },
  { 
    icon: 'fa-lock', 
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-500',
    title: 'Private & Secure', 
    desc: 'All calculations performed locally - no data stored' 
  },
  { 
    icon: 'fa-mobile-alt', 
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-500',
    title: 'Fully Responsive', 
    desc: 'Works perfectly on desktop, tablet, and mobile' 
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-3 animate-fadeIn">
          Professional Trading Calculators
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 animate-slideUp delay-100">
          Fast, accurate calculations for traders of all levels
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calculator, index) => (
          <div 
            key={calculator.id} 
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group opacity-0 animate-fadeIn`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Calculator Logo Banner */}
            <div className={`${calculator.bgColor} ${calculator.darkBgColor} py-8 flex justify-center items-center relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-bl-full group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-white opacity-10 rounded-tr-full group-hover:w-16 group-hover:h-16 transition-all duration-300"></div>
              <div className="absolute top-1/4 left-0 w-5 h-5 bg-white opacity-0 rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-white opacity-0 rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="w-28 h-28 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg p-2 border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={calculator.logo} 
                  alt={`${calculator.name} Calculator Logo`} 
                  className="w-full h-full object-contain group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-center font-heading font-semibold text-lg text-gray-900 dark:text-white mb-3">
                {calculator.name} Calculator
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                {calculator.desc}
              </p>
              
              <Link href={`/calculator/${calculator.id}`}>
                <div className={`block w-full ${calculator.bgColor} hover:opacity-90 text-white py-2.5 rounded-md text-sm font-medium transition-all duration-200 text-center cursor-pointer shadow-sm hover:shadow relative overflow-hidden group-hover:scale-[1.02]`}>
                  <span className="relative z-10">Open Calculator</span>
                  <span className={`absolute inset-0 ${calculator.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-80`}></span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 animate-fadeIn" style={{ animationDelay: "800ms" }}>
        <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
          Why Use TradeCalc Pro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-slideUp"
              style={{ animationDelay: `${900 + index * 200}ms` }}
            >
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 ${feature.bgColor} dark:bg-gray-700 ${feature.textColor} flex items-center justify-center rounded-lg transform transition-transform duration-300 hover:scale-110`}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="ml-2 font-heading font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
