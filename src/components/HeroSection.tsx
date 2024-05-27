import { headerDetails } from "@/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col gap-5 pt-16">
        <div className="bg-slate-200 w-24 h-24 flex items-center justify-center rounded-full">
            <Image 
                src="/images/me3.png" 
                alt="avatar" 
                width={100}
                height={100}
            />
        </div>

        <h1 className="text-3xl font-bold">Renz Glorioso</h1>
        <p className="max-w-md text-gray-800 text-base font-light dark:text-gray-300">
          {headerDetails.intro}
          <code className={headerDetails.className}>
            {headerDetails.codeText}
          </code>
          {headerDetails.location}
          {/* {headerDetails.description} */}
        </p>

    </section>
  )
}

export default HeroSection;