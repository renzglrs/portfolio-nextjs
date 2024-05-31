import Link from 'next/link';
import CardTemplate from './CardTemplate'
import { BsGithub } from "react-icons/bs";


const Github = () => {
  return (
    <Link href="https://github.com/renzglrs" target='_blank'>
      <CardTemplate
          className="row-span-1 md:col-span-1"
          backgroundColor="bg-secondary"
      >
              <BsGithub className="text-7xl text-primary"/>
      </CardTemplate>
    </Link>
  )
}

export default Github