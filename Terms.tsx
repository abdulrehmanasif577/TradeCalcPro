import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Terms() {
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

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: August 2023</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-6">
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            By accessing or using TradeCalc Pro, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Use License
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Permission is granted to temporarily use TradeCalc Pro for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose;</li>
            <li>Attempt to decompile or reverse engineer any software contained on TradeCalc Pro;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Disclaimer
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The materials on TradeCalc Pro are provided on an 'as is' basis. TradeCalc Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Further, TradeCalc Pro does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Limitations
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            In no event shall TradeCalc Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TradeCalc Pro, even if TradeCalc Pro or a TradeCalc Pro authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Links
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            TradeCalc Pro has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TradeCalc Pro of the site. Use of any such linked website is at the user's own risk.
          </p>
        </div>
      </div>
    </div>
  );
}
