import GOW from '../assets/img/GOW.webp';
import Spiderman2 from '../assets/img/Spiderman2.jpeg';
import DBSZ from '../assets/img/DBSZ.webp';
import Stary from '../assets/img/Stary.jpg';
import JediSurvivor from '../assets/img/JediSurvivor.webp'
import Destiny2 from '../assets/img/Destiny2.webp'
import HFW from '../assets/img/HFW.jpeg'
import ETG from '../assets/img/ETG.jpg'


export default function Ofertas() {
  return (
    <div className='my-9'>
      <h1 className="text-center text-4xl font-semimonserat font-bold font-monserat mb-5">OFERTAS</h1>
      <div className="grid grid-cols-12 gap-4 place-items-center p-3 ">
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={GOW} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">God of War: Ragnarok</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={Spiderman2} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Spider-Man 2</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={Stary} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Stray</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={DBSZ} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">BD: Sparking Zero</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={JediSurvivor} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Jedi Survivor</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={HFW} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Horizon Forbidden West</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={ETG} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Enter the gungeon</h2>
            <p>$50</p>
        </div>
        </div>
        <div className="m-4 w-64  text-black rounded-md min-[300px]:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-250">
          <img className="w-full rounded-lg" src={Destiny2} alt="" />
          <div className="p-1 text-start">
            <h2 className="font-monserat font-bold">Destiny 2</h2>
            <p>$50</p>
        </div>
        </div>
      </div>
    </div>
  )
}