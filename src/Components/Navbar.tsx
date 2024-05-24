
export default function navbar() {
  return (
    <div className=" bg-white grid grid-cols-12 h-24">
      <h1 className="font-sans text-primary  grid content-center justify-items-center text-4xl min-[300px]:col-span-2 sm:col-span-2 xl:col-span-2" >IG</h1>
        <h2 className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lm:col-span-2 lg:col-span-1">Mas Populares</h2>
        <h2 className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lg:col-span-1">Ofertas</h2>
        <h2 className=" text-black font-coolvetica grid content-center justify-items-center min-[300px]:col-span-2 sm:col-span-2 lg:col-span-1" >Novedades</h2> 
        <div className="sm:col-span-1 lg:col-span-4"></div> 
        <input type="text" placeholder="Buscar"  className=" bg-[#3A2E99] flex self-center p-1 ps-4 rounded-md col-span-2 "/>
    </div>
  );
}
