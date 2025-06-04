'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import NProgress from 'nprogress';
import { usePathname } from 'next/navigation';


export default function LogoLink() {
	const [isClient, setIsClient] = useState(false);
	const textRef = useRef<HTMLAnchorElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && textRef.current) {
			const typeSplit = new SplitType(textRef.current, {
				types: 'chars', // Just characters
				tagName: 'span',
			});

			const chars = textRef.current.querySelectorAll('.char');

			gsap.from(chars, {
				y: '100%',
				opacity: 0,
				duration: 0.5,
				ease: 'power1.out',
				stagger: 0.05,
			});
		}
	}, [isClient]);

	interface HandleLinkClick {
		(href: string): void;
	}
	
	const handleLinkClick: HandleLinkClick = (href) => {
		if (pathname !== href) {
			NProgress.start();
		}
	};

	return (
		<Link onClick={() => handleLinkClick('/')} href="/" ref={textRef} className="text-2xl md:text-4xl font-bold text-white custom-logo-font char">
			Jnanesh Amin
		</Link>
	);
}