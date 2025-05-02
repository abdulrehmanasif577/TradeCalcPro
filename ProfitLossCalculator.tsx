import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdBanner from '@/components/AdBanner';
import { formatCurrency } from '@/lib/calculator';

export default function ProfitLossCalculator() {
  const [tradeType, setTradeType] = useState<'long' | 'short'>('long');
  const [currency, setCurrency] = useState<string>('USD');
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [exitPrice, setExitPrice] = useState<number>(110);
  const [positionSize, setPositionSize] = useState<number>(10);
  const [commission, setCommission] = useState<number>(5);
  
  const [profitLoss, setProfitLoss] = useState<number>(0);
  const [roi, setRoi] = useState<number>(0);
  
  // Calculate profit/loss and ROI when inputs change
  useEffect(() => {
    const calculateProfitLoss = () => {
      let pl: number;
      
      if (tradeType === 'long') {
        pl = (exitPrice - entryPrice) * positionSize - commission;
      } else {
        pl = (entryPrice - exitPrice) * positionSize - commission;
      }
      
      setProfitLoss(pl);
      
      // Calculate ROI
      const invested = tradeType === 'long' 
        ? entryPrice * positionSize
        : exitPrice * positionSize;
        
      setRoi(invested !== 0 ? (pl / invested) * 100 : 0);
    };
    
    calculateProfitLoss();
  }, [tradeType, entryPrice, exitPrice, positionSize, commission]);
  
  const currencySymbol = currency === 'USD' ? '$' : 
                          currency === 'EUR' ? '€' : 
                          currency === 'GBP' ? '£' : 
                          currency === 'JPY' ? '¥' : '$';
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Profit & Loss Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate your potential profit or loss for any trade.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label className="mb-1">Trade Type</Label>
            <RadioGroup 
              defaultValue="long" 
              value={tradeType}
              onValueChange={(value) => setTradeType(value as 'long' | 'short')}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="long" id="long" />
                <Label htmlFor="long" className="cursor-pointer">Long (Buy)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="short" id="short" />
                <Label htmlFor="short" className="cursor-pointer">Short (Sell)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="pl_currency" className="mb-1">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="pl_entry" className="mb-1">Entry Price</Label>
            <Input
              id="pl_entry"
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          
          <div>
            <Label htmlFor="pl_exit" className="mb-1">Exit Price</Label>
            <Input
              id="pl_exit"
              type="number"
              value={exitPrice}
              onChange={(e) => setExitPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          
          <div>
            <Label htmlFor="pl_size" className="mb-1">Position Size</Label>
            <Input
              id="pl_size"
              type="number"
              value={positionSize}
              onChange={(e) => setPositionSize(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="pl_commission" className="mb-1">Commission/Fees</Label>
          <Input
            id="pl_commission"
            type="number"
            value={commission}
            onChange={(e) => setCommission(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Profit/Loss</p>
            <p className={`text-2xl font-semibold ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatCurrency(profitLoss, currencySymbol)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Return on Investment</p>
            <p className={`text-2xl font-semibold ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {roi.toFixed(2)}%
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
          <p>1. Select your trade type (long/buy or short/sell)</p>
          <p>2. Enter your entry price, exit price, and position size</p>
          <p>3. Add any commissions or fees associated with the trade</p>
          <p>4. The calculator will automatically display your profit/loss and ROI</p>
        </div>
      </div>
    </>
  );
}
