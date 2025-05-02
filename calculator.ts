/**
 * Format a number as currency
 * @param value Number to format
 * @param symbol Currency symbol to use (default: $)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, symbol: string = '$'): string {
  return `${symbol}${value.toFixed(2)}`;
}

/**
 * Calculate profit/loss for a trade
 * @param entryPrice Entry price
 * @param exitPrice Exit price
 * @param positionSize Position size (quantity)
 * @param commission Commission/fees
 * @param isLong True for long positions, false for short
 * @returns Profit/loss amount
 */
export function calculateProfitLoss(
  entryPrice: number,
  exitPrice: number,
  positionSize: number,
  commission: number = 0,
  isLong: boolean = true
): number {
  if (isLong) {
    return (exitPrice - entryPrice) * positionSize - commission;
  } else {
    return (entryPrice - exitPrice) * positionSize - commission;
  }
}

/**
 * Calculate return on investment (ROI) as a percentage
 * @param profitLoss Profit or loss amount
 * @param investment Initial investment amount
 * @returns ROI as a percentage
 */
export function calculateROI(profitLoss: number, investment: number): number {
  if (investment === 0) return 0;
  return (profitLoss / investment) * 100;
}

/**
 * Calculate position size based on risk management
 * @param accountSize Total account size
 * @param riskPercentage Risk percentage (1-100)
 * @param entryPrice Entry price
 * @param stopLossPrice Stop loss price
 * @returns Recommended position size
 */
export function calculatePositionSize(
  accountSize: number,
  riskPercentage: number,
  entryPrice: number,
  stopLossPrice: number
): number {
  const riskAmount = accountSize * (riskPercentage / 100);
  const riskPerShare = Math.abs(entryPrice - stopLossPrice);
  
  if (riskPerShare === 0) return 0;
  return Math.floor(riskAmount / riskPerShare);
}

/**
 * Calculate risk-reward ratio
 * @param entryPrice Entry price
 * @param stopLossPrice Stop loss price
 * @param targetPrice Target (take profit) price
 * @returns Risk-reward ratio as a string (e.g., "1:2.5")
 */
export function calculateRiskRewardRatio(
  entryPrice: number,
  stopLossPrice: number,
  targetPrice: number
): string {
  const risk = Math.abs(entryPrice - stopLossPrice);
  const reward = Math.abs(targetPrice - entryPrice);
  
  if (risk === 0) return 'N/A';
  
  const ratio = reward / risk;
  
  if (ratio >= 1) {
    return `1:${ratio.toFixed(1)}`;
  } else if (ratio > 0) {
    return `${(1/ratio).toFixed(1)}:1`;
  }
  
  return 'N/A';
}

/**
 * Calculate margin requirements
 * @param positionValue Total position value
 * @param leverage Leverage ratio (e.g., 5 for 5x)
 * @returns Required margin amount
 */
export function calculateMarginRequired(
  positionValue: number,
  leverage: number
): number {
  if (leverage <= 0) return positionValue;
  return positionValue / leverage;
}

/**
 * Calculate total buying power based on account size and leverage
 * @param accountSize Total account size
 * @param leverage Leverage ratio
 * @returns Total buying power
 */
export function calculateBuyingPower(
  accountSize: number,
  leverage: number
): number {
  return accountSize * leverage;
}

/**
 * Calculate margin usage percentage
 * @param marginRequired Required margin
 * @param accountSize Total account size
 * @returns Margin usage as a percentage
 */
export function calculateMarginUsage(
  marginRequired: number,
  accountSize: number
): number {
  if (accountSize === 0) return 0;
  return (marginRequired / accountSize) * 100;
}
