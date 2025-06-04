import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
type Props = {
    size: number;
}
const ContactIcons = ({size}:Props) => {
  return (
    <>
        <a href="https://github.com/JnaneshAmin25" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition" aria-label="GitHub">
            <FaGithub size={size} />
        </a>
        <a href="https://www.linkedin.com/in/jnanesh-amin-b84ab5313/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition" aria-label="LinkedIn">
            <FaLinkedin size={size} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition" aria-label="Twitter">
            <FaTwitter size={size} />
        </a>
    </>
  )
}
export default ContactIcons
