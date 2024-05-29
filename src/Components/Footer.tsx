export default function Footer() {
  return (
    <div className="bg-primary grid grid-cols-12 h-28">
      <div className=" text-white font-sans grid content-center justify-items-center text-4xl min-[300px]:col-span-12 min-[300px]:m-[6px] sm:col-span-2 xl:col-span-2">
        <h1>IN-GAMES</h1>
      </div>
      <div className="col-span-7"></div>
      <div className=" col-span-3">
        <div className="grid grid-cols-12 mt-3">
          <ul className="col-span-4">
            <li>Contacto</li>
            <li>Acerca de</li>
          </ul>
          <ul className="col-span-4">
            <li>Politicas de privacidad</li>
          </ul>
          <ul className="col-span-4">
            <li>Redes sociales</li>
            <li>Terminos y condiciones</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
