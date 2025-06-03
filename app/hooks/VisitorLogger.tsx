// components/VisitorLogger.tsx
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorLogger() {
  const pathname = usePathname(); 

  useEffect(() => {
    const logVisit = async () => {
      try {
        await fetch('/api/log-visitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: pathname 
          })
        });
      } catch (error) {
        console.error('Logging failed:', error);
      }
    };
    logVisit();
  }, [pathname]); 

  return null;
}