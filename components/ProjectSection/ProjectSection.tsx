import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
	const headingRef = useRef(null)
	const subheadingRef = useRef(null)
	const gridRef = useRef(null)
	const seeMoreRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(seeMoreRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay: 0.6,
				ease: "power2.out",
				scrollTrigger: {
				trigger: seeMoreRef.current,
				start: "top 85%",
				toggleActions: "play none none none",
				}
			}
		)


		gsap.fromTo(headingRef.current, 
			{ 
				opacity: 0, 
				y: 50 
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 85%",
					end: "bottom 15%",
					toggleActions: "play reverse play reverse"
				}
			}
		)

		gsap.fromTo(subheadingRef.current,
			{
				opacity: 0,
				y: 30
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: 0.2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: subheadingRef.current,
					start: "top 85%",
					end: "bottom 15%",
					toggleActions: "play reverse play reverse"
				}
			}
		)

		gsap.fromTo(gridRef.current,
			{
				opacity: 0,
				y: 40
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay: 0.2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top 85%",
					end: "bottom 15%",
					toggleActions: "play reverse play reverse"
				}
			}
		)
	}, [])

	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-6">
				{/* Simple header with coding touch */}
				<div className="text-center mb-16">
					<div ref={headingRef} className="heading-container opacity-0 transform translate-y-8 transition-all duration-800 ease-out">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
							&lt; My Projects /&gt;
						</h2>
						<div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
					</div>
					
					<div ref={subheadingRef} className="subheading-container opacity-0 transform translate-y-6 transition-all duration-800 ease-out delay-200">
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
							Here are some of my recent works. Each project was built to solve specific problems and improve user experiences.
						</p>
					</div>
				</div>
				
				{/*projects*/}
				<div ref={gridRef} className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{projects
					.sort((a,b) => a.ranking - b.ranking)
					.slice(0, 4)
					.map((project, index) => (
						<div key={project.id} className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms`}}>
							<ProjectCard project={project} index={index} />
						</div>
					))}
				</div>
			</div>

			{/* See More Button */}
			<div className="mt-5 sm:mt-7 md:mt-10 text-center" ref={seeMoreRef}>
				<Link href="/Projects" passHref>
					<div className="relative inline-flex items-center px-6 py-3 font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:translate-x-3.5 cursor-pointer focus:outline-none group overflow-hidden">
						<span className="z-10 flex items-center gap-2">
							See More
							<span className="relative flex items-center justify-center w-8 h-4 overflow-hidden">
								<span className="absolute animate-arrowSlide text-lg">→</span>
							</span>
						</span>
						<span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
					</div>
				</Link>
			</div>
		</section>
	)
}