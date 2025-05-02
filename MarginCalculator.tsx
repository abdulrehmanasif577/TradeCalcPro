import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdBanner from '@/components/AdBanner';
import { formatCurrency } from '@/lib/calculator';

export default function MarginCalculator() {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [leverage, setLeverage] = useState<number>(5);
  const [positionValue, setPositionValue] = useState<number>(20000);
  
  const [marginRequired, setMarginRequired] = useState<number>(0);
  const [buyingPower, setBuyingPower] = useState<number>(0);
  const [marginUsage, setMarginUsage] = useState<number>(0);
  
  // Calculate margin details when inputs change
  useEffect(() => {
    const calculateMargin = () => {
      // Calculate margin required
      const calculatedMarginRequired = positionValue / leverage;
      setMarginRequired(calculatedMarginRequired);
      
      // Calculate buying power
      const calculatedBuyingPower = accountSize * leverage;
      setBuyingPower(calculatedBuyingPower);
      
      // Calculate margin usage percentage
      if (accountSize > 0) {
        const calculatedMarginUsage = (calculatedMarginRequired / accountSize) * 100;
        setMarginUsage(calculatedMarginUsage);
      } else {
        setMarginUsage(0);
      }
    };
    
    calculateMargin();
  }, [accountSize, leverage, positionValue]);
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Margin Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate margin requirements and leverage for your trades.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="margin_account" className="mb-1">Account Size</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                id="margin_account"
                type="number"
                className="pl-7"
                value={accountSize}
                onChange={(e) => setAccountSize(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="margin_leverage" className="mb-1">Leverage</Label>
            <div className="relative">
              <Input
                id="margin_leverage"
                type="number"
                className="pr-6"
                value={leverage}
                onChange={(e) => setLeverage(parseFloat(e.target.value) || 0)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">x</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="margin_position" className="mb-1">Position Value</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <Input
              id="margin_position"
              type="number"
              className="pl-7"
              value={positionValue}
              onChange={(e) => setPositionValue(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Margin Required</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(marginRequired, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Buying Power</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(buyingPower, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Margin Usage</p>
            <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              {marginUsage.toFixed(1)}%
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
          <p>1. Enter your total account size</p>
          <p>2. Set your leverage ratio (e.g., 2x, 5x, 10x)</p>
          <p>3. Enter the total position value you want to open</p>
          <p>4. The calculator will show the margin required, your total buying power, and margin usage percentage</p>
          <p className="font-medium mt-3">Warning: Higher leverage increases both potential profits and losses. Trade with caution.</p>
        </div>
      </div>
    </>
  );
}
