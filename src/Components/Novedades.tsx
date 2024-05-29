import Destiny2 from '../assets/img/Destiny2.webp'
import Destiny2logo from '../assets/img/Destiny2logo.png'

export default function Novedades() {
    return(
        <div className="bg-nav-color">
            <div className="grid grid-cols-12">
            <div className="lg:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 ">
              <img src={Destiny2} alt="" className='h-full'/>
            </div>  
            <div className="bg-nav-color p-10 g:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 md:place-items-center lg:place-content-center ">
              <div className="flex justify-center lg:p-0">
              <div className="w-64">
                <img
                  src={Destiny2logo}
                  alt=""
                  className="z-10 relative"
                />
              </div>
              </div>
              <div className=" font-monserat">
                <div className="justify-self-center text-center p-3">
                  <h1 className="text-white z-10 relative text-2xl font-regular p-1">
                  How to make the most of Destiny 2 Expansion Open Access
                  </h1>
                  <p className="text-white z-10 relative font-thin p-1 text-center">
                  Whether you’re new to Destiny 2 or haven’t played in a while,<br />
                   this could go down in history as the best month yet to hop in the game. <br />
                   From May 7 to June 3, Bungie is giving all players access to The Witch Queen, <br /> Beyond Light,
                    and Shadowkeep expansions (plus Lightfall if you’re a PlayStation Plus member) along with the past four Seasons of content!
                  </p>
                  <button className="text-white z-10 relative bg-primary rounded-lg p-2 m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    Mas informacion
                  </button>
                </div>
              </div>
            </div>
            
            </div>
        </div>
    )
}