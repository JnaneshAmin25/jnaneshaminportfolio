"use client"
import { Suspense } from 'react'
// import { useSearchParams } from 'next/navigation'

function NotFoundContent() {
//   const _params = useSearchParams()
  return <div>Not found</div>
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}