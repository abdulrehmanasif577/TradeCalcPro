import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdBanner from '@/components/AdBanner';
import { formatCurrency } from '@/lib/calculator';

export default function CryptoProfitCalculator() {
  const [cryptocurrency, setCryptocurrency] = useState<string>('BTC');
  const [fiatCurrency, setFiatCurrency] = useState<string>('USD');
  const [investment, setInvestment] = useState<number>(1000);
  const [priceChange, setPriceChange] = useState<number>(25);
  
  const [finalValue, setFinalValue] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  
  // Calculate crypto profits when inputs change
  useEffect(() => {
    const calculateProfit = () => {
      const changeMultiplier = 1 + (priceChange / 100);
      const calculatedFinalValue = investment * changeMultiplier;
      setFinalValue(calculatedFinalValue);
      
      const calculatedProfit = calculatedFinalValue - investment;
      setProfit(calculatedProfit);
    };
    
    calculateProfit();
  }, [investment, priceChange]);
  
  const currencySymbol = fiatCurrency === 'USD' ? '$' : 
                          fiatCurrency === 'EUR' ? '€' : 
                          fiatCurrency === 'GBP' ? '£' : 
                          fiatCurrency === 'JPY' ? '¥' : '$';
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Crypto Profit Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate potential profits from your cryptocurrency investments.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="crypto_currency" className="mb-1">Cryptocurrency</Label>
            <Select value={cryptocurrency} onValueChange={setCryptocurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Select cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="BNB">Binance Coin (BNB)</SelectItem>
                <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                <SelectItem value="SOL">Solana (SOL)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="crypto_fiat" className="mb-1">Fiat Currency</Label>
            <Select value={fiatCurrency} onValueChange={setFiatCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="JPY">JPY (¥)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="crypto_investment" className="mb-1">Initial Investment</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">{currencySymbol}</span>
              </div>
              <Input
                id="crypto_investment"
                type="number"
                className="pl-7"
                value={investment}
                onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="crypto_price_change" className="mb-1">Price Change</Label>
            <div className="relative">
              <Input
                id="crypto_price_change"
                type="number"
                className="pr-8"
                value={priceChange}
                onChange={(e) => setPriceChange(parseFloat(e.target.value) || 0)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Final Value</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(finalValue, currencySymbol)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Profit</p>
            <p className={`text-2xl font-semibold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatCurrency(profit, currencySymbol)}
            </p>
          </div>
        </div>
      </div>
      
      {/* AdSense Below Results */}
      <AdBanner type="below-results" />
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5">
        <h2 className="text-lg font-heading font-semibold mb-3 text-gray-900 dark:text-white">
          How to Use This Calculator
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>1. Select your cryptocurrency and fiat currency</p>
          <p>2. Enter your initial investment amount</p>
          <p>3. Input the expected price change percentage (use negative values for price decreases)</p>
          <p>4. The calculator will show your final investment value and profit/loss</p>
        </div>
      </div>
    </>
  );
}
