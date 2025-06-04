import { useRef, useEffect, useState } from 'react'
import { MdOpenInNew } from "react-icons/md";
import Image from 'next/image'
import { Project } from '@/types/project'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link' 
import NProgress from 'nprogress';

gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
	project: Project
	index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	const cardRef = useRef(null)
	const [isHovered, setIsHovered] = useState(false)
	const [ripple, setRipple] = useState(false)

	const handleCardClick = () => {
	setRipple(true)
	setTimeout(() => setRipple(false), 600) 
	}

	useEffect(() => {
		const element = cardRef.current

		gsap.fromTo(
			element,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.8,
				ease: 'power3.out',
				delay: index * 0.2,
				scrollTrigger: {
					trigger: element,
					start: 'top 85%',
					toggleActions: 'play none none none',
				},
			}
		)
	}, [index])
    
	const handleLinkClick = () => {
			NProgress.start();
	};
	return (
			<div ref={cardRef} className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-1 hover:border-blue-600 border-blue-900" onClick={() =>{handleCardClick(); handleLinkClick()}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				
				{/* Ripple effect */}
				{ripple && (
					<span className="pointer-events-none absolute inset-0 z-0 animate-ripple bg-blue-500/20 rounded-xl"></span>
				)}

				{/* Enhanced Demo Button - Single Line Classes */}
				{
					project.isArcheived ? (
						<div className={`absolute top-4 right-4 ${isHovered ?'md:opacity-100 md:translate-y-0':'md:opacity-0 md:translate-y-1'} opacity-100 translate-y-0 text-red-400 text-sm font-medium rounded-full px-4 py-1.5 shadow-inner z-10 user-select-none`}>
							Demo unavailable
						</div>
					) : (
						project.liveLink ? (
							<Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`absolute top-4 right-4 flex items-center justify-between px-4 py-1.5 z-10 bg-gradient-to-r from-blue-600 to-blue-800 cursor-pointer text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 hover:brightness-110 group text-sm font-medium ${isHovered ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-1'} opacity-100 transl;ate-y-0`}>
									<span className="flex items-center gap-1.5">
										Demo <MdOpenInNew className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</span>
									<span className="absolute inset-0 bg-white opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-10"></span>
							</Link>
						) : null
					)
				}

				{/* Main content */}
				<Link href={`/Projects/${project.id}`} className="custom-cursor block p-4" title='Click to view details'>
					
					{/* Icon  */}
					<div className="flex items-center space-x-3 mb-4">
						<div className="flex items-center bg-white rounded-full p-1">
							<Image src={project.icon} width={25} height={25} className="rounded-full" alt=""/>
						</div>
					</div>

					{/* Project Details */}
					<h3 className={`${isHovered?'':''} text-xl transition-all duration-300 font-bold text-blue-200 mb-2`}>
						{project.cardTitle}
					</h3>
					<p className="text-gray-300 mb-4">
						{project.smallDescription}
					</p>
					<div className="flex flex-wrap gap-2 mb-4">
						{project.technologies.slice(0, 3).map((tech, index) => (
							<span key={index} className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
								{tech}
							</span>
						))}
					</div>

					{/* Image Preview */}
					<div className="rounded-xl overflow-hidden">
						<Image src={project.image} alt={project.cardTitle} width={400} height={200} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
					</div>
				</Link>
			</div>
	);
}