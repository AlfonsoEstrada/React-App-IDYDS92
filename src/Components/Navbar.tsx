import { NavLink } from "react-router-dom";


export default function navbar() {
  return (
    <div className=" bg-white grid grid-cols-12 h-24 w-full z-20">
      <h1 className="font-sans text-primary  grid content-center justify-items-center text-4xl min-[300px]:col-span-12 min-[300px]:m-[6px] sm:col-span-2 lg:col-span-2" >IG</h1>
        <NavLink  to='' className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lm:col-span-2 lg:col-span-1">Mas Populares</NavLink>
        <NavLink  to='./Ofertas' className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lg:col-span-1">Ofertas</NavLink>
        <NavLink  to='' className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lg:col-span-1" >Novedades</NavLink> 
        <div className=" min-[300px]:col-span-1 sm:col-span-1 lg:col-span-4"></div> 
        <input type="text" placeholder="Buscar"  className=" bg-[#3A2E99] flex self-center p-1 ps-4 rounded-md md:col-span-2 min-[300px]:col-span-4 sm:col-span-2"/>
    </div>
  );
}
