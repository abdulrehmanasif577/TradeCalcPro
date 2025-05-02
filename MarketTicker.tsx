import { useEffect, useState } from 'react';

type MarketData = {
  symbol: string;
  price: number;
  change: number;
  type: 'currency' | 'stock' | 'crypto';
};

export default function MarketTicker() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'BTC/USD', price: 57923.45, change: 2.34, type: 'crypto' },
    { symbol: 'ETH/USD', price: 3121.78, change: 1.56, type: 'crypto' },
    { symbol: 'EUR/USD', price: 1.0812, change: -0.15, type: 'currency' },
    { symbol: 'GBP/USD', price: 1.2647, change: 0.21, type: 'currency' },
    { symbol: 'AAPL', price: 182.52, change: 0.78, type: 'stock' },
    { symbol: 'MSFT', price: 406.32, change: 1.23, type: 'stock' },
    { symbol: 'GOOGL', price: 177.85, change: -0.34, type: 'stock' },
    { symbol: 'AMZN', price: 179.52, change: 0.45, type: 'stock' },
    { symbol: 'JPY/USD', price: 0.0067, change: -0.23, type: 'currency' },
    { symbol: 'SOL/USD', price: 136.89, change: 4.85, type: 'crypto' },
  ]);

  // Simulate price updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData => 
        prevData.map(item => ({
          ...item,
          price: parseFloat((item.price + (Math.random() * 2 - 1) * 0.1 * item.price / 100).toFixed(item.type === 'currency' ? 4 : 2)),
          change: parseFloat((item.change + (Math.random() * 2 - 1) * 0.1).toFixed(2))
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSymbolIcon = (type: string) => {
    switch(type) {
      case 'currency':
        return 'fas fa-dollar-sign';
      case 'stock':
        return 'fas fa-chart-line';
      case 'crypto':
        return 'fas fa-coins';
      default:
        return 'fas fa-chart-bar';
    }
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden h-8 relative">
      <div className="absolute left-0 top-0 bottom-0 bg-primary-600 px-3 flex items-center z-10">
        <span className="text-white text-xs font-bold">MARKET DATA</span>
      </div>
      <div className="relative w-[200%] h-full flex items-center pl-[100px]">
        <div className="animate-marquee whitespace-nowrap flex items-center absolute left-0 space-x-8">
          {marketData.map((item, index) => (
            <div 
              key={index} 
              className="inline-flex items-center space-x-1"
            >
              <i className={`${getSymbolIcon(item.type)} text-xs text-gray-500 dark:text-gray-400`}></i>
              <span className="font-medium text-gray-800 dark:text-gray-200">{item.symbol}</span>
              <span className="text-gray-900 dark:text-gray-100">
                {item.type === 'currency' ? item.price.toFixed(4) : item.price.toFixed(2)}
              </span>
              <span className={`text-xs ${item.change >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center absolute left-[100%] space-x-8">
          {marketData.map((item, index) => (
            <div 
              key={`copy-${index}`} 
              className="inline-flex items-center space-x-1"
            >
              <i className={`${getSymbolIcon(item.type)} text-xs text-gray-500 dark:text-gray-400`}></i>
              <span className="font-medium text-gray-800 dark:text-gray-200">{item.symbol}</span>
              <span className="text-gray-900 dark:text-gray-100">
                {item.type === 'currency' ? item.price.toFixed(4) : item.price.toFixed(2)}
              </span>
              <span className={`text-xs ${item.change >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}