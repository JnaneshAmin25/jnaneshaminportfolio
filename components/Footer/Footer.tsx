import ContactIcons from '@/animatedComponents/ContactIcons'

export default function Footer() {
  return (
		<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-15">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-gray-600 dark:text-gray-300 text-center">
							© {new Date().getFullYear()} Jnanesh Amin. All rights reserved.
						</p>
					</div>
					<div className="flex space-x-6">
						<ContactIcons size={20}/>
					</div>
				</div>
			</div>
		</footer>
  )
}