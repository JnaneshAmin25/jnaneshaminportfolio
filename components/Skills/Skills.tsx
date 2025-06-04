import { useEffect, useRef } from 'react'
import { skills } from '../../data/skills'
import { gsap } from 'gsap'

export default function SkillsCarousel() {
	const carouselRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (!carouselRef.current) return;
			const totalWidth = carouselRef.current.scrollWidth / 2 // since we’ll duplicate the list

			gsap.to(carouselRef.current, {
				x: `-=${totalWidth}`,
				ease: 'none',
				duration: 20,
				repeat: -1,
			})
		}, carouselRef)

		return () => ctx.revert()
	}, [])

	return (
		<section id="skills" className="py-16 bg-gray-900 overflow-hidden">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-white">Tech Stack</h2>
				<p className="text-gray-300 max-w-xl mx-auto">
					My current tools of the trade — on a non-stop loop 🌀
				</p>
			</div>

			<div className="relative w-full overflow-hidden">
				<div className="flex w-max" ref={carouselRef}>
					{[...skills, ...skills].map((skill, index) => (
						<div key={`${skill.name}-${index}`} className="flex flex-col items-center justify-center px-6 sm:px-10 py-4">
							<skill.icon className="text-4xl text-blue-300 mb-2" />
							<span className="text-sm font-medium text-gray-200">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
