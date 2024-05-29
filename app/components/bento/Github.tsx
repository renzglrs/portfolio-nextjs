import Link from 'next/link';
import CardTemplate from './CardTemplate'
import { BsGithub } from "react-icons/bs";


const Github = () => {
  return (
      <CardTemplate
          className="row-span-1 md:col-span-1"
          backgroundColor="bg-[#1d1d1d]"
      >
        <Link href="https://github.com/renzglrs" target='_blank'>
              <BsGithub className="text-7xl text-white"/>
        </Link>
      </CardTemplate>
  )
}

export default Github