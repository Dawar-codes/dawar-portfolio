'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ScrollDownIcon() {
  const handleScroll = () => {
    const section = document.getElementById('about')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center -mt-10 animate-bounce cursor-pointer" onClick={handleScroll}>
      <ChevronDownIcon className="h-8 w-8 text-gray-500 hover:text-text transition duration-300" />
    </div>
  )
}
