'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

export default function LogoLink() {
  const textRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== '/') {
      NProgress.start();
    }
    
    // Click animation with color change
    if (textRef.current) {
      textRef.current.classList.add('text-blue-400', 'scale-95');
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.remove('text-blue-400', 'scale-95');
        }
      }, 200);
    }
  };

  return (
    <Link href="/" ref={textRef} onClick={handleClick} className="text-2xl md:text-4xl font-bold text-white custom-logo-font bg-clip-text bg-gradient-to-r from-white to-white transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-400  hover:scale-105 hover:text-transparent active:scale-95 active:from-blue-400 active:to-purple-500">
      Jnanesh Amin
    </Link>
  );
}