import { useParams, useLocation, Link } from "wouter";
import ProfitLossCalculator from "@/components/calculators/ProfitLossCalculator";
import PositionSizeCalculator from "@/components/calculators/PositionSizeCalculator";
import RiskRewardCalculator from "@/components/calculators/RiskRewardCalculator";
import CryptoProfitCalculator from "@/components/calculators/CryptoProfitCalculator";
import MarginCalculator from "@/components/calculators/MarginCalculator";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const { tool } = useParams();
  const [, setLocation] = useLocation();
  
  // If no valid calculator is found, redirect to tools page
  useEffect(() => {
    const validTools = ['pl', 'position', 'risk', 'crypto', 'margin'];
    if (tool && !validTools.includes(tool as string)) {
      setLocation('/tools');
    }
  }, [tool, setLocation]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2">
            <i className="fas fa-home"></i>
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>

      {tool === 'pl' && <ProfitLossCalculator />}
      {tool === 'position' && <PositionSizeCalculator />}
      {tool === 'risk' && <RiskRewardCalculator />}
      {tool === 'crypto' && <CryptoProfitCalculator />}
      {tool === 'margin' && <MarginCalculator />}
    </div>
  );
}
