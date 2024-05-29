import { BsGithub } from "react-icons/bs";
import Github from "./Github";
import Spotify from "./Spotify";
import Strava from "./Strava";
import Nba from "./Nba";


const data = [
  {
    title: '(image here)',
    value: 'Avatar?',
  },
  {
    title: 'Now Playing...',
    value: 'Spotify',
  },
  {
    title: 'Link',
    value: 'Github',
  },
  {
    title: 'PH',
    value: 'Mapbox',
  },
  // {
  //   title: 'Website Visits',
  //   value: 1000000,
  // },
  // {
  //   title: 'Customer Satisfaction',
  //   value: 0.95,
  // },
  // {
  //   title: 'Employee Count',
  //   value: 120,
  // },
];

const BentoGrid = () => {
  const boxStyle = "bg-neutral-100 rounded-lg p-10 flex flex-col items-center justify-center";

  return (
    <>
        <section id="bento-grid">
            {/* <h2 className="text-2xl font-medium pb-4">Bento Grid Test</h2> */}
            
            {/* Bento Grid example layout 1 */}
            <ul className="animated-list grid grid-rows-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {/* {data.map((item, i) => (
                  <div key={i} className={`${boxStyle} ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}>
                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                    <p className="font-bold text-2xl">{item.value}</p>
                  </div>
                ))} */}
                  <Github /> 
                  <Spotify />
                  <Strava />
                  <Nba />
                {/* <div className="row-span-1 md:col-span-1 bg-[#1d1d1d] rounded-md p-10 flex flex-col items-center justify-center">
                  <BsGithub className="text-7xl text-white"/>
                </div> */}
            </ul>




            {/* Bento Grid example layout 2 */}
            {/* <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 mb-10">
                {data.map((item, i) => (
                  <div key={i} className={`${boxStyle} ${i === 0 ||  i === 4 || i === 5 || i === 6  ? 'md:col-span-2' : ''} ${i === 2 ? 'md:row-span-2' : ''}`}>
                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                    <p className="font-bold text-2xl">{item.value}</p>
                  </div>
                ))}
            </div> */}
        </section>
    </>
  )
}

export default BentoGrid