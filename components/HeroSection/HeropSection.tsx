
import MyName from '@/animatedComponents/MyName'
import Image from 'next/image'
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
	useEffect(() => {
	const handleScroll = () => {
	  const particles = document.querySelectorAll('[data-speed]')

	  particles.forEach((el) => {
		const speed = parseFloat(el.getAttribute('data-speed') || '1')
		const offset = window.scrollY * speed
		;(el as HTMLElement).style.transform = `translateY(${offset}px)`
	  })
	}

	const onScroll = () => requestAnimationFrame(handleScroll)
	window.addEventListener('scroll', onScroll)

	return () => {
	  window.removeEventListener('scroll', onScroll)
	}
  }, [])
  
  return (
		<section id="home" className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br  from-black to-gray-800 ">          
		   
			<div className="hero-bg-1 absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl transition-transform duration-700 ease-out"></div>
			<div className="hero-bg-2 absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-transform duration-700 ease-out"></div>
			<div className="hero-bg-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl transition-transform duration-700 ease-out"></div>
	
			{/* Fade Effect at Bottom */}
			<div className="hero-content container mx-10 md:mx-auto px-6 py-13 md:py-10 flex flex-col md:flex-row items-center ">
				<div className="order-2 p-0 xl:pl-20 md:order-1 md:w-1/2 mb-10 md:mb-0 mt-10 md:mt-0" data-aos="fade-right">
					<h1 className="hero-title text-3xl md:text-5xl font-bold text-white mb-4 text-center md:text-left">
						Hi, I&apos;m {" "} 
						<span className="ml-3 md:ml-0 inline-block">
							<MyName name="Jnanesh Amin" />
						</span>
					</h1>
					<h2 className="hero-subtitle text-2xl md:text-3xl text-gray-300 mb-6 text-center md:text-left">
						Full Stack Developer & UI Enthusiast
					</h2>
					<p className="hero-description text-gray-300 mb-8 max-w-lg text-center md:text-left">
						I build exceptional digital experiences with modern technologies.
						Currently specializing in MERN stack and Next.js applications.
					</p>
					<div className="flex flex-col space-y-6">
						<div className="flex space-x-4 justify-center md:justify-start">
							{/* GitHub */}
							<a href="https://github.com/JnaneshAmin25" target="_blank" rel="noopener noreferrer" className="social-icon group" aria-label="GitHub">
								<div className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full border border-gray-600 bg-transparent hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
									<FaGithub className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" size={34}  />
									<span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
								</div>
							</a>
							{/* LinkedIn */}
							<a href="https://www.linkedin.com/in/jnanesh-amin-b84ab5313/" target="_blank" rel="noopener noreferrer" className="social-icon group" aria-label="LinkedIn">
								<div className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full border border-gray-600 bg-transparent hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
									<FaLinkedin className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" size={34}  />
									<span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
								</div>
							</a>
							{/* Twitter/X */}
							<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon group" aria-label="Twitter">
								<div className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full border border-gray-600 bg-transparent hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
									<FaTwitter className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" size={34}  />
									<span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
								</div>
							</a>
						</div>
					</div>
				</div>
				
				<div className="order-1 md:order-2 md:w-1/2 flex justify-center" data-aos="fade-left">
					<div className=" relative w-80 h-80 md:w-[23rem] md:h-[23rem] lg:w-[32rem] lg:h-[32rem]  rounded-full shadow-xl p-[5px] overflow-hidden border-4 border-gray-800">
						<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 blur-xl opacity-60 animate-pulse z-9"></div>
						
						<Image src="/images/profile_jnanesh.png" alt="Jnanesh Amin" width={512} height={360} className="z-10 relative object-cover rounded-full group-hover:scale-105 transition-transform duration-500" priority/>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div data-speed="0.8" className="hero-particle-1 absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 transition-transform duration-1000 ease-out"></div>
				<div data-speed="0.5" className="hero-particle-2 absolute top-3/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full opacity-80 transition-transform duration-1000 ease-out"></div>
				<div data-speed="0.3" className="hero-particle-3 absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 transition-transform duration-1000 ease-out"></div>
			</div>
		</section>
  )
}