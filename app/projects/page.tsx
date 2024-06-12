
import { projectsData } from "@/constants";
import ProjectCard from "../components/ProjectCard";




const ProjectsPage = () => {
  return (
    <>
      <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">
          <h1 className="text-3xl font-bold">Projects</h1>

          <ul className='animated-list grid auto-rows md:grid-cols-1 gap-4 mb-10'>
            {projectsData.map((project, index) => (
              <li key={index} className='row-span-1 md:col-span-1 rounded-lg hover:bg-secondary'>
                <ProjectCard key={index} project={project} />
              </li>
            ))}

          </ul>

      </main>
    
    </>
  )
}

export default ProjectsPage;