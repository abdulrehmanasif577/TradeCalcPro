interface AdBannerProps {
  type: 'sidebar' | 'below-results';
}

export default function AdBanner({ type }: AdBannerProps) {
  return (
    <div 
      className={`p-3 bg-gray-100 dark:bg-gray-700 rounded text-center text-sm ${
        type === 'sidebar' ? '' : 'mb-6'
      }`}
    >
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        Advertisement
      </div>
      <div 
        className={`bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 ${
          type === 'sidebar' ? 'h-48' : 'h-24'
        }`}
      >
        {type === 'sidebar' ? 'AdSense Sidebar' : 'AdSense Below Results'}
      </div>
    </div>
  );
}
