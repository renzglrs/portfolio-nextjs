import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import img from "@/public/projects/footwork.png"
import Image from 'next/image'


// const bg = "./public/projects/footwork.png"

const ProjectsPage = () => {
  return (
    <>
      <section className="container max-w-[700px] pt-16">
        <h1 className="text-3xl font-bold">Projects</h1>
      </section>

      <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">
          <ul className='animated-list grid auto-rows md:grid-cols-2 gap-4 mb-10'>
            <li className='row-span-1 md:col-span-1 rounded-lg hover:bg-gray-200'>
              <CardHeader className=''>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img} alt='img' className="rounded-sm" />
                {/* <p>Card Content</p> */}
              </CardContent>
              <CardFooter>
                {/* <p>Card Footer</p> */}
              </CardFooter>
            </li>

            <li className={`row-span-1 md:col-span-1 rounded-lg hover:bg-gray-200`}>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img} alt='img' className="rounded-sm" />
                {/* <p>Card Content</p> */}
              </CardContent>
              <CardFooter>
                {/* <p>Card Footer</p> */}
              </CardFooter>
            </li>
            
            <li className={`row-span-1 md:col-span-1 rounded-lg hover:bg-gray-200`}>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img} alt='img' className="rounded-sm" />
                {/* <p>Card Content</p> */}
              </CardContent>
              <CardFooter>
                {/* <p>Card Footer</p> */}
              </CardFooter>
            </li>
          </ul>
      </main>
    
    </>
  )
}

export default ProjectsPage;