import React, { JSX } from 'react'

type Props = {
	icon: JSX.Element;
	label: string | JSX.Element;
};

const SkillItem = ({icon,label}:Props) => {
  return (
		<div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-700">
			<div className="text-blue-400 text-xl">
				{icon}
			</div>
			<span className="text-gray-300 font-medium">{label}</span>
		</div>
  )
}

export default SkillItem
