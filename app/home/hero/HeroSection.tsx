import { headerDetails } from "@/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col gap-5 pt-16">
        <div className="bg-secondary w-24 h-24 flex items-center justify-center rounded-full">
            <Image 
                src="/images/me3.png" 
                alt="avatar" 
                width={100}
                height={100}
            />
        </div>

        <div>
          <h1 className="text-3xl text-primary font-bold">Renz Glorioso</h1>
          <p className="max-w-md text-muted-foreground text-base font-light">
            {headerDetails.description}
          </p>
        </div>

    </section>
  )
}

export default HeroSection;