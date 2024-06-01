import React from 'react'
import BentoGrid from '../components/bento/BentoGrid';

const AboutPage = () => {
  return (
    <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">
      <h1 className="text-3xl font-bold">About</h1>

      <BentoGrid />
    </main>
  )
}

export default AboutPage;