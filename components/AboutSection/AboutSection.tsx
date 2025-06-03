"use client"
import Image from 'next/image'
import { FaLaptopCode, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa'
import SkillItem from './SkillItem'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
	const sectionRef = useRef<HTMLElement | null>(null)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const aboutRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		// Set initial state
		gsap.set([aboutRef.current, contentRef.current], { 
			opacity: 0,
			y: 20
		})

		// Check if mobile view
		const isMobile = window.innerWidth < 768

		if (isMobile) {
			// Mobile animation sequence
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none none"
				}
			})

			tl.to(aboutRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out"
			})
			.to(contentRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out"
			}, "+=0.2") 
		} else {
			gsap.to(aboutRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: aboutRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				}
			})

			gsap.to(contentRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				}
			})
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])

	return (
		<section ref={sectionRef} id="about" className="py-25 relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<Image src="/images/about_bg.png" alt="UI/UX Design Workspace" fill className="object-cover" fetchPriority="high" loading="eager"/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 relative">
				<div className="flex flex-col md:flex-row items-center md:justify-start md:pl-15 md:gap-8">
					{/* Content Div - Comes first in DOM for mobile */}
					<div ref={aboutRef} className="opacity-0 z-20 order-2 md:order-1 max-w-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							About <span className="text-blue-500">Me</span>
						</h2>
						
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
							Passionate full-stack developer with 3+ years of experience building modern web applications. 
							I specialize in creating performant, accessible, and visually appealing digital experiences.
						</p>

						{/* Skills Grid */}
						<div className="grid grid-cols-2 gap-4">
							<SkillItem icon={<FaLaptopCode className="text-blue-500 text-2xl" />}label={<><span className="hidden sm:inline">Web</span> Dev</>}/>
							<SkillItem icon={<FaPalette className="text-purple-500 text-2xl" />}label="UI/UX"/>
							<SkillItem icon={<FaMobileAlt className="text-green-500 text-2xl" />}label="Mobile"/>
							<SkillItem icon={<FaRocket className="text-orange-500 text-2xl" />}label="Perf"/>
						</div>
					</div>

					{/* Image Div */}
					<div ref={contentRef} className="sm:hidden opacity-0 order-1 md:order-2 flex h-full justify-center w-full md:w-auto mt-8 md:mt-0">
						<Image src="/images/about_hero.png" alt="Profile" width={550} height={400} className="w-full max-w-lg md:max-w-none"/>
					</div>
				</div>
			</div>
		</section>
	)
}