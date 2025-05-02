import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdBanner from '@/components/AdBanner';
import { formatCurrency } from '@/lib/calculator';

export default function PositionSizeCalculator() {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercentage, setRiskPercentage] = useState<number>(2);
  const [entryPrice, setEntryPrice] = useState<number>(50);
  const [stopLossPrice, setStopLossPrice] = useState<number>(45);
  
  const [riskAmount, setRiskAmount] = useState<number>(0);
  const [riskPerShare, setRiskPerShare] = useState<number>(0);
  const [positionSize, setPositionSize] = useState<number>(0);
  
  // Calculate position size when inputs change
  useEffect(() => {
    const calculatePositionSize = () => {
      // Calculate risk amount based on account size and risk percentage
      const calculatedRiskAmount = accountSize * (riskPercentage / 100);
      setRiskAmount(calculatedRiskAmount);
      
      // Calculate risk per share (difference between entry and stop loss)
      const calculatedRiskPerShare = Math.abs(entryPrice - stopLossPrice);
      setRiskPerShare(calculatedRiskPerShare);
      
      // Calculate position size (shares)
      if (calculatedRiskPerShare !== 0) {
        const calculatedPositionSize = Math.floor(calculatedRiskAmount / calculatedRiskPerShare);
        setPositionSize(calculatedPositionSize);
      } else {
        setPositionSize(0);
      }
    };
    
    calculatePositionSize();
  }, [accountSize, riskPercentage, entryPrice, stopLossPrice]);
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Position Size Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Determine the optimal position size based on your risk tolerance.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="ps_account" className="mb-1">Account Size</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                id="ps_account"
                type="number"
                className="pl-7"
                value={accountSize}
                onChange={(e) => setAccountSize(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="ps_risk" className="mb-1">Risk Percentage</Label>
            <div className="relative">
              <Input
                id="ps_risk"
                type="number"
                className="pr-8"
                value={riskPercentage}
                onChange={(e) => setRiskPercentage(parseFloat(e.target.value) || 0)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="ps_entry" className="mb-1">Entry Price</Label>
            <Input
              id="ps_entry"
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          
          <div>
            <Label htmlFor="ps_stoploss" className="mb-1">Stop Loss Price</Label>
            <Input
              id="ps_stoploss"
              type="number"
              value={stopLossPrice}
              onChange={(e) => setStopLossPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Risk Amount</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(riskAmount, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Risk Per Share</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(riskPerShare, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Position Size</p>
            <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              {positionSize} shares
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
          <p>2. Set your risk percentage (1-3% is typically recommended)</p>
          <p>3. Enter your planned entry price and stop loss price</p>
          <p>4. The calculator will show your ideal position size based on your risk tolerance</p>
        </div>
      </div>
    </>
  );
}
