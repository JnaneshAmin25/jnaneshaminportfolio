'use client'

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { gsap } from 'gsap'

export default function ContactSection() {

const headingRef = useRef(null)
const leftgridRef = useRef(null)
const rightgridRef = useRef(null)

useEffect(() => {
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

		gsap.fromTo(leftgridRef.current,
			{
				opacity: 0,
				x: -60
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.8,
				delay: 0.4,
				ease: "power2.out",
				scrollTrigger: {
					trigger: leftgridRef.current,
					start: "top 85%",
					end: "bottom 15%",
					toggleActions: "play reverse play reverse"
				}
			}
		)

		gsap.fromTo(rightgridRef.current,
			{
				opacity: 0,
				x: 60
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.8,
				delay: 0.4,
				ease: "power2.out",
				scrollTrigger: {
					trigger: rightgridRef.current,
					start: "top 85%",
					end: "bottom 15%",
					toggleActions: "play reverse play reverse"
				}
			}
		)
	}, [])

	const formRef = useRef<HTMLFormElement>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [message, setMessage] = useState({ text: '', type: '' })

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!formRef.current) return

		emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
			formRef.current,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
		)
		
		.then(() => {
			setMessage({ text: 'Message sent successfully!', type: 'success' })
			formRef.current?.reset()
		}, () => {
			setMessage({ text: 'Failed to send message. Please try again.', type: 'error' })
		})
		.finally(() => {
			setIsSubmitting(false)
			setTimeout(() => setMessage({ text: '', type: '' }), 5000)
		})
	}

	return (
		<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-gray-900 to-transparent pointer-events-none z-0" />
			<div className="container mx-auto px-6">
				{/* Contact Heading */}
				<div ref={headingRef} className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Feel free to reach out!
					</p>
				</div>
				
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Contact Details */}
					<div ref={leftgridRef} className="order-2 md:order-1 lg:w-1/2">
						<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
							
							<div className="space-y-4">
								{/* Email */}
								<div className="flex items-start">
									<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
										<svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
										</svg>
									</div>
									<div>
										<h4 className="text-gray-600 dark:text-gray-300 font-medium">Email</h4>
										<a href="mailto:jnaneshamin25@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">jnaneshamin25@gmail.com</a>
									</div>
								</div>
								
								{/* Phone Number */}
								<div className="flex items-start">
									<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
										<svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
										</svg>
									</div>
									<div>
										<h4 className="text-gray-600 dark:text-gray-300 font-medium">Phone</h4>
										<a href="tel:8123834047" className="text-blue-600 dark:text-blue-400 hover:underline">+91 8123834047</a>
									</div>
								</div>
								
								{/* Address */}
								<div className="flex items-start">
									<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
										<svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
									</div>
									<div>
										<h4 className="text-gray-600 dark:text-gray-300 font-medium">Location</h4>
										<p className="text-gray-700 dark:text-gray-300">Udupi, Karnataka, India</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					

					{/* Form Section */}
					<div ref={rightgridRef} className="order-1 md:order-2 lg:w-1/2">
						<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
							<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
								{message.text && (
									<div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
										{message.text}
									</div>
								)}
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Name Input */}
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
											Name
										</label>
										<input type="text" name="user_name" id="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
									</div>
									{/* Email Input */}
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
											Email
										</label>
										<input type="email" name="user_email" id="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"/>
									</div>
								</div>
								
								{/* Email-Subject */}
								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
										Subject
									</label>
									<input type="text" name="subject" id="subject" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"/>
								</div>
								{/* Email Message */}
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
										Message
									</label>
									<textarea name="message" id="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"></textarea>
								</div>
								
								{/* Submit */}
								<button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}