import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { FaGithub, FaLink } from "react-icons/fa";


import img from "@/public/projects/footwork.png"
import Image from 'next/image'
import Link from "next/link"


// const bg = "./public/projects/footwork.png"

const ProjectsPage = () => {
  return (
    <>
      <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">
          <h1 className="text-3xl font-bold">Projects</h1>

          <ul className='animated-list grid auto-rows md:grid-cols-2 gap-4 mb-10'>
            <li className='row-span-1 md:col-span-1 rounded-lg hover:bg-secondary'>
              <CardHeader className=''>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>Badge</Badge>
                  <Badge>Badge</Badge>
                  <Badge>Badge</Badge>
                  <Badge>Badge</Badge>
                  <Badge>Badge</Badge>
                  <Badge>Badge</Badge>
                </div>
                <Image src={img} alt='img' className="rounded-sm" />
                {/* <p>Card Content</p> */}
              </CardContent>
              <CardFooter className="flex gap-3 text-2xl">
                <Link href={'/'}><FaGithub /></Link>
                <Link href={'/'}><FaLink /></Link>
              </CardFooter>
            </li>

            {/* <li className={`row-span-1 md:col-span-1 rounded-lg hover:bg-secondary`}>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img} alt='img' className="rounded-sm" />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </li>
            
            <li className={`row-span-1 md:col-span-1 rounded-lg hover:bg-secondary`}>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img} alt='img' className="rounded-sm" />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </li> */}

            
          </ul>
      </main>
    
    </>
  )
}

export default ProjectsPage;