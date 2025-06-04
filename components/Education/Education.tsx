"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '../../data/education'

gsap.registerPlugin(ScrollTrigger)

export default function EducationSection() {
	const sectionRef = useRef(null)
	const headingRef = useRef(null)
	const timelineRef = useRef(null)
	const cardsRef = useRef<Array<HTMLDivElement | null>>([])

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(sectionRef.current, {
				backgroundPosition: "50% 30%",
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			})

			gsap.fromTo(headingRef.current, {
				opacity: 0,
				y: 30
			}, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 85%",
					toggleActions: "play none none reverse"
				}
			})

			gsap.fromTo(timelineRef.current, {
				scaleY: 0,
				transformOrigin: "top center"
			}, {
				scaleY: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: timelineRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse"
				}
			})

			gsap.fromTo(timelineRef.current, {
				scaleY: 0
			}, {
				scaleY: 1,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 60%",
					end: "bottom 40%",
					scrub: 1
				}
			})

			cardsRef.current.forEach((card, index) => {
				if (!card) return

				const isEven = index % 2 === 0
				
				gsap.fromTo(card, {
					opacity: 0,
					x: isEven ? -50 : 50,
					y: 20
				}, {
					opacity: 1,
					x: 0,
					y: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: card,
						start: "top 85%",
						toggleActions: "play none none reverse"
					}
				})

				const cardElement = card.querySelector('.education-card')
				
				if (cardElement) {
					cardElement.addEventListener('mouseenter', () => {
						gsap.to(cardElement, {
							scale: 1.02,
							duration: 0.3,
							ease: "power2.out"
						})
					})
					
					cardElement.addEventListener('mouseleave', () => {
						gsap.to(cardElement, {
							scale: 1,
							duration: 0.3,
							ease: "power2.out"
						})
					})
				}

				const textElements = card.querySelectorAll('h3, p')
				gsap.fromTo(textElements, {
					opacity: 0,
					y: 15
				}, {
					opacity: 1,
					y: 0,
					duration: 0.6,
					stagger: 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				})
			})

		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section ref={sectionRef} id="education" className="py-20 bg-gray-800 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div ref={headingRef} className="text-center mb-12">
					<h2 className="text-4xl font-bold text-white mb-4 transform-gpu">
						🎓 Education Journey
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						My academic journey and professional certifications
					</p>
				</div>
				<div className="relative">
					{/* Enhanced Timeline line */}
					<div ref={timelineRef} className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
					{education.map((item, index) => (
						<div key={item.id} ref={el => { cardsRef.current[index] = el }} className={`mb-12 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} transform-gpu`}>
							{/* Timeline dot */}
							<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
								<div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-md"></div>
							</div>

							<div className={`education-card md:w-1/2 p-6 rounded-xl shadow-md bg-gray-700 border border-gray-600 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} transform-gpu hover:shadow-lg transition-all duration-300`}>
								<div className="flex items-center mb-4">
									<div className="education-icon p-2 bg-blue-900 rounded-lg mr-4 transform-gpu">
										<item.icon className="text-blue-300 text-xl" />
									</div>
									<h3 className="text-xl font-semibold text-white">
										{item.degree}
									</h3>
								</div>
								<p className="text-gray-300 mb-1">{item.institution}</p>
								<p className="text-gray-400 text-sm mb-3">{item.duration}</p>
								<p className="text-gray-300">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}