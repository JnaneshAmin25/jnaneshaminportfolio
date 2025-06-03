'use client'

import LogoLink from '@/animatedComponents/LogoLink';
import Link from 'next/link'
import NProgress from 'nprogress';
import { useState, useEffect } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation';

export default function Navbar() {
	 const [darkMode, setDarkMode] = useState(false);
	 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	 const [scrollProgress, setScrollProgress] = useState(0);
	 const [activeLink, setActiveLink] = useState('');
	 const pathname = usePathname();

	 useEffect(() => {
		  if (typeof window !== 'undefined') {
				const isDark = localStorage.getItem('darkMode') === 'true'
				setDarkMode(isDark)
				document.documentElement.classList.toggle('dark', isDark)
		  }

		  const handler = () => {
				const scrollTop = window.scrollY;
				const docHeight = document.documentElement.scrollHeight - window.innerHeight;
				const scrolled = (scrollTop / docHeight) * 100;
				setScrollProgress(scrolled);
		  };
		  
		  window.addEventListener("scroll", handler);
		  return () => window.removeEventListener("scroll", handler);
	 }, [])

	 useEffect(() => {
		  // Set active link based on current path
		  setActiveLink(pathname);
	 }, [pathname]);

	 const toggleDarkMode = () => {
		  const newMode = !darkMode
		  setDarkMode(newMode)
		  localStorage.setItem('darkMode', newMode.toString())
		  document.documentElement.classList.toggle('dark', newMode)
	 }


	 interface HandleLinkClick {
		  (href: string): void;
	 }

	 const handleLinkClick: HandleLinkClick = (href) => {
		  setActiveLink(href);
		  
		  if (pathname !== href) {
				NProgress.start();
		  }
	 };

	 const isActive = (href: string) => activeLink === href;

	 return (
				<nav className={`bg-white dark:bg-gray-950 shadow-md fixed transition-all duration-300 w-full z-50`}>
					<div className="container mx-auto px-6 py-3 flex justify-between items-center">
						  {/* Logo */}        
						  <LogoLink/>

						  {/* Desktop Navigation */}
						  <div className="hidden md:flex items-center space-x-6">
								<Link href="/about" onClick={() => handleLinkClick('/about')} className={`nav-link relative group ${isActive('/about') ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
									 About
									 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${isActive('/about') ? 'w-full' : ''}`}></span>
								</Link>
								<Link href="/Projects" onClick={() => handleLinkClick('/Projects')} className={`nav-link relative group ${isActive('/Projects') ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
									 Projects
									 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${isActive('/Projects') ? 'w-full' : ''}`}></span>
								</Link>
								<Link href="/Acheivements" onClick={() => handleLinkClick('/Acheivements')} className={`nav-link relative group ${isActive('/Acheivements') ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
									 Achievements
									 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${isActive('/Acheivements') ? 'w-full' : ''}`}></span>
								</Link>
								<button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:scale-105 transition-transform duration-200" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
									 {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
								</button>
						  </div>

						  {/* Mobile Menu Button */}
						  <button className="md:hidden p-2 text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
								{mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						  </button>
				 	</div>

					 {/* Mobile Menu */}
					 {mobileMenuOpen && (
						  <div
								className={`fixed md:hidden w-full z-50 transition-all duration-300 ${ mobileMenuOpen ? 'bg-white dark:bg-gray-900 shadow-lg' : ''} ${mobileMenuOpen ? 'animate-slideDown' : 'animate-slideUp'}`} >
								<div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
									 <Link href="/about" className="nav-link"  onClick={() => {handleLinkClick('/about'); setMobileMenuOpen(false);}}>About</Link>
									 <Link href="/Projects" className="nav-link" onClick={() => {handleLinkClick('/Projects'); setMobileMenuOpen(false);}}>Projects</Link>
									 <Link href="/Acheivements" className="nav-link" onClick={() => {handleLinkClick('/Acheivements'); setMobileMenuOpen(false);}}>Acheivements</Link>
									 <button onClick={toggleDarkMode} className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300">
										  {darkMode ? (<><FiSun size={20} className="mr-2" />Light Mode</>) : (<><FiMoon size={20} className="mr-2" />Dark Mode</>)}
									 </button>
								</div>
						  </div>
					 )}
					 {/* Scroll Progress Bar */}
					 <div className="h-1 w-full bg-transparent">
						  <div className="h-full bg-blue-500 dark:bg-blue-500 rounded-full transition-all duration-75" style={{ width: `${scrollProgress}%`,transition: "width 0.1s ease-out" }}/>
					 </div>
			 </nav>
	)
}