import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GOW from '../../../assets/img/GOW.webp';
import GOWLOGO from '../../../assets/img/GOWLOGO.webp';
import LogoSP from '../../../assets/img/LogoSP.webp';
import Spiderman2 from '../../../assets/img/Spiderman2.jpeg';
import DBSZ from '../../../assets/img/DBSZ.webp';
import DBSZLOGO from '../../../assets/img/DBSZLOGO.png';
import Stary from '../../../assets/img/Stary.jpg';
import Straylogo from '../../../assets/img/Straylogo.webp';


export default function Slider() {
  return (
      <Carousel 
        showArrows={true} 
        showStatus={false} 
        showIndicators={false} 
        showThumbs={true} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={5000} 
        stopOnHover={true} 
        transitionTime={1000} 
        swipeable={true} 
        emulateTouch={true} 
        centerSlidePercentage={80} 
      >
        {[
          <div>
          <div key='slide1'>
            <div className="grid grid-cols-12">
            <div className="bg-black lg:col-span-5 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 md:place-items-center lg:place-content-center ">
              <div className="flex justify-center lg:p-0">
              <div className="w-96">
                <img
                  src={GOWLOGO}
                  alt=""
                  className="z-10 relative"
                />
              </div>
              </div>
              <div className=" font-monserat ">
                <div className="justify-self-center text-center p-3">
                  <h1 className="text-white z-10 relative text-4xl font-regular p-1">
                    God of War Ragnarok
                  </h1>
                  <p className="text-white z-10 relative font-thin p-1">
                    God of War Ragnarok es la secuela del juego de 2018 <br />
                    God of War desarrollado por Santa Monica Studio y <br />
                    publicado por Sony Interactive Entertainment.
                  </p>
                  <button className="text-white z-10 relative bg-primary rounded-lg p-2 m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    Mas informacion
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 ">
              <img src={GOW} alt="" />
              <div className="absolute inset-0 min-[300px]:bg-gradient-to-b sm:bg-gradient-to-b md:bg-gradient-to-b lg:bg-gradient-to-r from-black/100 from-45% via-transparent  to-transparent "></div>
            </div>
          </div>
          </div>
        </div>,
        <div key='slide2'>
          <div className="grid grid-cols-12">
            <div className="bg-black lg:col-span-5 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 place-content-center">
              <div className="flex justify-center">
              <div className=" w-96 ">
                <img
                  src={LogoSP}
                  alt=""
                  className="z-10 relative"
                />
              </div>
              </div>
              <div className=" font-monserat ">
                <div className="justify-self-center text-center p-3">
                  <h1 className="text-white z-10 relative text-4xl font-regular p-1">
                    SPIDER-MAN 2
                  </h1>
                  <p className="text-white z-10 relative font-thin p-1">
                  Proin et porttitor est, quis commodo magna. <br /> In at convallis arcu. 
                   Maecenas vestibulum euismod <br /> lorem eu bibendum. 
                  </p>
                  <button className="text-white z-10 relative bg-primary rounded-lg p-2 m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    Mas informacion
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12">
              <img src={Spiderman2} alt="" />
              <div className="absolute inset-0 min-[300px]:bg-gradient-to-b sm:bg-gradient-to-b md:bg-gradient-to-b lg:bg-gradient-to-r from-black/100 from-45% via-transparent  to-transparent "></div>
            </div>
          </div>
        </div>,
        <div key='slide3'>
        <div className="grid grid-cols-12">
          <div className="bg-black lg:col-span-5 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 place-content-center ">
            <div className="flex justify-center">
            <div className=" w-64 ">
              <img
                src={DBSZLOGO}
                alt=""
                className="z-10 relative"
              />
            </div>
            </div>
            <div className=" font-monserat">
              <div className="justify-self-center text-center p-3">
                <h1 className="text-white z-10 relative text-4xl font-regular p-1">
                  DRAGON BALL: <br />SPARKING ZERO
                </h1>
                <p className="text-white z-10 relative font-thin p-1">
                Proin et porttitor est, quis commodo magna. <br /> In at convallis arcu. 
                 Maecenas vestibulum euismod <br /> lorem eu bibendum. 
                </p>
                <button className="text-white z-10 relative bg-primary rounded-lg p-2 m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12" >
            <img src={DBSZ} alt=""  />
            <div className="absolute inset-0 min-[300px]:bg-gradient-to-b sm:bg-gradient-to-b md:bg-gradient-to-b lg:bg-gradient-to-r from-black/100 from-50% via-transparent  to-transparent "></div>
          </div>
        </div>
      </div>,
      <div key='slide3'>
      <div className="grid grid-cols-12 ">
        <div className="bg-black lg:col-span-5 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12 place-content-center ">
          <div className="flex justify-center">
          <div className=" w-56 ">
            <img
              src={Straylogo}
              alt=""
              className="z-10 relative"
            />
          </div>
          </div>
          <div className=" font-monserat">
            <div className="justify-self-center text-center p-3">
              <h1 className="text-white z-10 relative text-4xl font-regular p-1">
               STRAY
              </h1>
              <p className="text-white z-10 relative font-thin p-1">
              Proin et porttitor est, quis commodo magna. <br /> In at convallis arcu. 
               Maecenas vestibulum euismod <br /> lorem eu bibendum. 
              </p>
              <button className="text-white z-10 relative bg-primary rounded-lg p-2  m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                Mas informacion
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 min-[300px]:col-span-12 sm:col-span-12 md:col-span-12">
          <img src={Stary} alt="" />
          <div className="absolute inset-0 min-[300px]:bg-gradient-to-b sm:bg-gradient-to-b md:bg-gradient-to-b lg:bg-gradient-to-r from-black/100  from-55% via-transparent  to-transparent "></div>
        </div>
      </div>
    </div>

        
        ]}
      </Carousel>
  );
}
