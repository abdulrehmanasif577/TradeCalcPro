import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdBanner from '@/components/AdBanner';
import { formatCurrency } from '@/lib/calculator';

export default function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [stopLossPrice, setStopLossPrice] = useState<number>(95);
  const [targetPrice, setTargetPrice] = useState<number>(110);
  
  const [riskPerShare, setRiskPerShare] = useState<number>(0);
  const [rewardPerShare, setRewardPerShare] = useState<number>(0);
  const [riskRewardRatio, setRiskRewardRatio] = useState<string>('');
  
  // Calculate risk/reward ratio when inputs change
  useEffect(() => {
    const calculateRiskReward = () => {
      // Calculate risk per share (difference between entry and stop loss)
      const calculatedRisk = Math.abs(entryPrice - stopLossPrice);
      setRiskPerShare(calculatedRisk);
      
      // Calculate reward per share (difference between entry and target)
      const calculatedReward = Math.abs(targetPrice - entryPrice);
      setRewardPerShare(calculatedReward);
      
      // Calculate risk-reward ratio
      if (calculatedRisk > 0) {
        const ratio = calculatedReward / calculatedRisk;
        // Format as 1:X or X:1 depending on which is larger
        if (ratio >= 1) {
          setRiskRewardRatio(`1:${ratio.toFixed(1)}`);
        } else if (ratio > 0) {
          setRiskRewardRatio(`${(1/ratio).toFixed(1)}:1`);
        } else {
          setRiskRewardRatio('N/A');
        }
      } else {
        setRiskRewardRatio('N/A');
      }
    };
    
    calculateRiskReward();
  }, [entryPrice, stopLossPrice, targetPrice]);
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Risk-Reward Ratio Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate the risk-reward ratio for your trades.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="rr_entry" className="mb-1">Entry Price</Label>
            <Input
              id="rr_entry"
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          
          <div>
            <Label htmlFor="rr_stoploss" className="mb-1">Stop Loss Price</Label>
            <Input
              id="rr_stoploss"
              type="number"
              value={stopLossPrice}
              onChange={(e) => setStopLossPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          
          <div>
            <Label htmlFor="rr_target" className="mb-1">Target Price</Label>
            <Input
              id="rr_target"
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Risk Per Share</p>
            <p className="text-xl font-semibold text-red-500">
              {formatCurrency(riskPerShare, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Reward Per Share</p>
            <p className="text-xl font-semibold text-green-500">
              {formatCurrency(rewardPerShare, '$')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Risk-Reward Ratio</p>
            <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              {riskRewardRatio}
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
          <p>1. Enter your entry price for the trade</p>
          <p>2. Set your stop loss price (where you'll exit if the trade goes against you)</p>
          <p>3. Enter your target price (where you plan to take profits)</p>
          <p>4. The calculator will show your risk-reward ratio</p>
          <p className="font-medium mt-3">A risk-reward ratio of 1:2 or better is typically recommended for most trading strategies.</p>
        </div>
      </div>
    </>
  );
}
