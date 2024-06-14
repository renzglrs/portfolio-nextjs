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
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


type Project = {
    id: number;
    title: string,
    description?: string,
    imageUrl: string,
    technology: string[] ,
    links:{
        live: string,
        github: string,
    }
}

const ProjectCard: React.FC<{ project: Project }> = ({project}) => {
  return (
    <Card className="border-0 shadow-none hover:bg-secondary">
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 hover:bg-secondary">
            <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index)=> (
                    <Badge key={index} variant="outline">{tech}</Badge>
                ))}
            </div>
            <Image 
                src={project.imageUrl} 
                width={500} 
                height={300} 
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                alt='project-image' 
                className="rounded-sm" 
            />
        </CardContent>
        <CardFooter className="flex gap-3 text-2xl">
            <Link href={project.links.github} target="_blank">
                {/* <FaGithub /> */}
                <Button variant="default">Github</Button>
            </Link>
            <Link href={project.links.live} target="_blank">
                {/* <FaLink /> */}
                <Button variant="default">Link</Button>
            </Link>
        </CardFooter>
    </Card>
  )
}

export default ProjectCard