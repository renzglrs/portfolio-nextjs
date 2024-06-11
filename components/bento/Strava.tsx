import CardTemplate from './CardTemplate';
import { FaStrava } from "react-icons/fa";


const Strava = () => {
  return (
    <CardTemplate
        className="row-span-1 md:col-span-2"
        backgroundColor="bg-accent"
    >
        <FaStrava className="text-7xl text-[#fc4c02]"/>
    </CardTemplate>
  )
}

export default Strava