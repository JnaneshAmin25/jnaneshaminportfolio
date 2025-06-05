"use client"
import { certificate } from '@/types/certificate'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface CertificationProps {
	certificate: certificate
	index: number
}

const CertificateCard = ({ certificate }: CertificationProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isTapped, setIsTapped] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	// Check if mobile on component mount
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkIfMobile()
		window.addEventListener('resize', checkIfMobile)
		return () => window.removeEventListener('resize', checkIfMobile)
	}, [])

	const showDetails = isHovered || isTapped

	const handleTap = () => {
		if (isMobile) {
			setIsTapped(!isTapped)
		}
	}

	return (
		<div 
			className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" onMouseEnter={() => !isMobile && setIsHovered(true)} onMouseLeave={() => !isMobile && setIsHovered(false)} onClick={handleTap}>
			{/* Certificate image */}
			<div className="absolute inset-0">
				<Image src={certificate.image} alt={certificate.certificateName} fill className="object-cover" loading="lazy"/>
			</div>

			{/* Overlay */}
			<div className={`absolute inset-0 transition-all duration-300 ${showDetails ? 'bg-black/60' : 'bg-black/0'}`} />

			{/* Info panel */}
			<div className={`absolute right-0 top-0 h-full ${showDetails ? 'w-full md:w-2/3 opacity-95' : 'w-0 opacity-0'} bg-gray-900/95 backdrop-blur-sm overflow-hidden transition-all duration-300 flex flex-col justify-center p-4 md:p-6 space-y-2 md:space-y-3`}>
				<div className="space-y-2 md:space-y-3">
					<h3 className="text-white text-lg md:text-xl font-bold">
						{certificate.certificateName}
					</h3>
					<p className="text-blue-300 text-sm font-medium">
						{certificate.institution}
					</p>
					<p className="text-gray-300 text-xs md:text-sm">
						{certificate.duration}
					</p>
					<p className="text-gray-200 text-xs md:text-sm">
						{certificate.description}
					</p>
				</div>
			</div>

			{/* Mobile tap indicator */}
			{!showDetails && isMobile && (
				<div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-md">
					<span className="text-xs font-medium text-gray-800">
						Tap to view details
					</span>
				</div>
			)}
		</div>
	)
}

export default CertificateCard