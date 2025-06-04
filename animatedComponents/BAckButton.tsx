'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on homepage or if no history exists
  if (pathname === '/' || typeof window === 'undefined' || window.history.length <= 1) {
    return null;
  }

  const handleBack = () => {
    router.back(); // Mimics browser's back behavior
  };

  return (
    <button 
      onClick={handleBack}
      className="fixed top-20 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all"
      aria-label="Go back"
    >
      <FaArrowLeft className="text-gray-300" />
      <span className="text-gray-300 hidden sm:inline">Back</span>
    </button>
  );
}