import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: August 2023</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-6">
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            TradeCalc Pro ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We collect several types of information from and about users of our website, including information:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
            <li>By which you may be personally identified, such as name, email address ("personal information");</li>
            <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
            <li>To present our website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To carry out our obligations and enforce our rights.</li>
            <li>In any other way we may describe when you provide the information.</li>
            <li>For any other purpose with your consent.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Disclosure of Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
            <li>To comply with any court order, law, or legal process.</li>
            <li>To enforce or apply our terms of use.</li>
            <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of TradeCalc Pro, our customers, or others.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            To ask questions or comment about this privacy policy and our privacy practices, contact us at: privacy@tradecalcpro.com
          </p>
        </div>
      </div>
    </div>
  );
}
