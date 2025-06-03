'use client'
import AboutSection from '@/components/AboutSection/AboutSection'
import SkillsSection from '@/components/Skills/Skills'
import EducationSection from '@/components/Education/Education'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Certification from '@/components/Certification/Certification';

export const dynamic = 'force-static';

export default function AboutPage() {
	useEffect(() => {
		const initAOS = async () => {
			await import('aos');
			AOS.init({
				duration: 1000,
				easing: 'ease',
				once: false,
				anchorPlacement: "top-bottom",
			});
		};
		initAOS();
	}, []);

	return (
		<div className='overflow-x-hidden'>
			<AboutSection />
			<SkillsSection />
			<EducationSection />
			<Certification />
		</div>
	);
}
