import { Link } from "wouter";

type LogoProps = {
  size?: "default" | "small";
  onClick?: () => void;
};

export default function Logo({ size = "default", onClick }: LogoProps) {
  const containerClasses = size === "default" ? "w-8 h-8" : "w-7 h-7";
  const textClasses = size === "default" ? "text-lg" : "text-base";
  const iconClasses = size === "default" ? "text-sm" : "text-xs";

  return (
    <Link href="/">
      <div 
        className="flex items-center space-x-2 cursor-pointer" 
        onClick={onClick}
      >
        <div className={`${containerClasses} bg-primary-600 rounded flex items-center justify-center`}>
          <i className={`fas fa-calculator text-white ${iconClasses}`}></i>
        </div>
        <span className={`${textClasses} font-heading font-semibold text-gray-900 dark:text-white`}>
          TradeCalc Pro
        </span>
      </div>
    </Link>
  );
}
