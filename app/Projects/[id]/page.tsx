import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map(project => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const project = projects.find(p => p.id === Number(id))

	if (!project) {
		return notFound()
	}

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 pt-30 pb-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Project Content*/}
					<div className="lg:w-1/2 order-2 lg:order-1">
						<div className="p-6 h-full flex flex-col">
							<h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
								{project.title}
							</h1>
							
							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech, index) => (
									<span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
										{tech}
									</span>
								))}
							</div>
							
							<p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
								{project.description}
							</p>
							
							<div className="mb-8">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
									Key Features
								</h3>
								<ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
									{project.features.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</div>
							
							{/* Action Buttons */}
							<div className="flex flex-wrap gap-4 mt-auto">
								{project.githubLink && (
									<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
										<FaGithub className="mr-2" /> View Code
									</a>
								)}
								{project.liveLink ? (
									<a href={project.isArcheived ? undefined : project.liveLink} target="_blank" rel="noopener noreferrer" className={`${project.isArcheived ? 'cursor-not-allowed': 'dark:hover:bg-gray-700'} flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg  transition`}>
										<FaExternalLinkAlt className="mr-2" /> Live Demo
									</a>
								) : (
									<button className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg transition cursor-not-allowed opacity-60">
										<FaExternalLinkAlt className="mr-2" /> Live Demo
									</button>
								)}
							</div>
						</div>
					</div>

					{/* Project Image */}
					<div className="lg:w-1/2 order-1 lg:order-2 lg:sticky lg:self-start lg:top-24">
						<div className="rounded-xl overflow-hidden h-full bg-gray-100 dark:bg-gray-800 shadow-lg">
							<div className="relative w-full aspect-video">
								<Image src={project.image} alt={project.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" priority/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}