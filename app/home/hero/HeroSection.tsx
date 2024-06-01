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



        <div className="flex flex-col gap-5">
          <h1 className="text-3xl text-primary font-bold">Renz Glorioso</h1>

          {/* Terminal CSS Animation */}
          <div className="terminal-loader max-w-md">
              <div className="terminal-header">
                  <div className="terminal-controls">
                      <div className="control close"></div>
                      <div className="control minimize"></div>
                      <div className="control maximize"></div>
                  </div>
                  <div className="terminal-title">Status</div>
              </div>
              <div className="content flex gap-2 pt-0 text-sm">
                <span className="text-green-300">computer:~$</span><p className="text text-white">Greetings, my name is Renz!</p>
              </div>
          </div>

          
          <p className="max-w-md text-muted-foreground text-base font-light">
            {headerDetails.description}
          </p>
        </div>

    </section>
  )
}

export default HeroSection;