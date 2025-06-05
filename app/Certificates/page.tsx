import CertificateCard from '@/components/Certification/CertificateCard'
import { certifications } from '@/data/certificates'
import React from 'react'

const certificates = () => {
  return (
    <div className='overflow-x-hidden bg-gray-900 text-white py-25 md:py-36 px-6'>
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{certifications
				.map((certificate, index) => (
					<div key={certificate.id} className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
						<CertificateCard certificate={certificate} index={index} />
					</div>
				))}
			</div>
    </div>
  )
}

export default certificates
