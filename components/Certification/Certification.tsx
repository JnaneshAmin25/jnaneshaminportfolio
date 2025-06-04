"use client";
import React from 'react'
import { certifications } from '../../data/certificates'
import CertificateCard from './CertificateCard'
import { motion } from 'framer-motion'

const Certification = () => {
	const headingVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5
			}
		}
	}

	return (
		<section className="p-6 bg-gray-800">

			{/* Heading */}
			<motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={headingVariants}>
				My Certifications
				<motion.span className="block w-20 h-1 bg-blue-500 mx-auto mt-4" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}/>
			</motion.h2>

			{/* Certificates Grid */}
			<motion.div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
				{certifications.map((certificate, index) => (
					<motion.div key={certificate.id} className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }} variants={itemVariants}>
						<CertificateCard certificate={certificate} index={index} />
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default Certification