import Link from 'next/link';
import CardTemplate from './CardTemplate'
import { BsGithub } from "react-icons/bs";


const Github = () => {
  return (
    <Link href="https://github.com/renzglrs" target='_blank'>
      <CardTemplate
          className="row-span-1 md:col-span-1"
          backgroundColor="bg-[#1d1d1d]"
      >
              <BsGithub className="text-7xl text-white"/>
      </CardTemplate>
    </Link>
  )
}

export default Github