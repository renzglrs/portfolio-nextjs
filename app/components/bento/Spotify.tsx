import CardTemplate from './CardTemplate';
import { FaSpotify } from "react-icons/fa";


const Spotify = () => {
  return (
    <CardTemplate
        className="row-span-1 md:col-span-2"
        backgroundColor="bg-accent"
    >
        <FaSpotify className="text-7xl text-[#1db954]"/>
    </CardTemplate>
  )
}

export default Spotify