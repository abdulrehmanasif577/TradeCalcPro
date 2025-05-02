import { Link } from "wouter";

const calculators = [
  { id: 'pl', name: 'Profit & Loss', icon: 'fa-chart-line', desc: 'Calculate potential profit or loss for any trade' },
  { id: 'position', name: 'Position Size', icon: 'fa-balance-scale', desc: 'Determine optimal position size based on risk tolerance' },
  { id: 'risk', name: 'Risk-Reward Ratio', icon: 'fa-percent', desc: 'Calculate risk-reward ratio for your trades' },
  { id: 'crypto', name: 'Crypto Profit', icon: 'fa-coins', desc: 'Calculate crypto investment returns' },
  { id: 'margin', name: 'Margin', icon: 'fa-money-bill-wave', desc: 'Calculate margin requirements and leverage' }
];

export default function Tools() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Trading Calculator Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Complete set of tools to enhance your trading decisions
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {calculators.map((calculator) => (
            <div key={calculator.id} className="flex items-center p-4 md:p-5 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200">
              <div className="w-10 h-10 bg-primary-50 dark:bg-gray-700 text-primary-500 dark:text-primary-400 flex items-center justify-center rounded-lg">
                <i className={`fas ${calculator.icon}`}></i>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                  {calculator.name} Calculator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {calculator.desc}
                </p>
              </div>
              <Link href={`/calculator/${calculator.id}`}>
                <div className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 cursor-pointer">
                  Open
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
