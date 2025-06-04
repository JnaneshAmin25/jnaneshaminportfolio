import React from 'react'
type Props = {
		 name: string;
}
const MyName = ({name}:Props) => {
	return (
		<div className="group inline-block cursor-pointer perspective-1000">
			<span className="inline-block text-4xl md:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-teal-300 to-purple-400 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-[-1deg] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
				{name}
			</span>
		</div>
	)
}
export default MyName
