import CardTemplate from './CardTemplate'
import { FaBasketballBall } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";


const Nba = () => {
  return (
    <CardTemplate
        className="row-span-1 md:col-span-1"
        backgroundColor="bg-secondary"
    >
        <MdSportsBasketball className="text-7xl text-primary"/>
    </CardTemplate>
  )
}

export default Nba