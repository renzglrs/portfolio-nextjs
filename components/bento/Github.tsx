import CardTemplate from './CardTemplate'
import { BsGithub } from "react-icons/bs";


const Github = () => {
  return (
    <CardTemplate
        className="row-span-1 md:col-span-1"
        backgroundColor="bg-[#1d1d1d]"
    >
        <BsGithub className="text-7xl text-white"/>
    </CardTemplate>
  )
}

export default Github