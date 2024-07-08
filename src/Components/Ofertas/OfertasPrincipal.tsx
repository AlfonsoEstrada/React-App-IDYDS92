

export default function OfertasPrincipal() {
  return (
    <div className="">
      <div className="p-2">
        <div className=" mt-8 text- ml-6 ">

          <h1 className="text-2xl font-bold">Inventario Producto</h1>
          <h3 className="text-lg">Total Familias</h3>
          <h3 className="text-lg">Total SKU:</h3>
        </div>
        <div className="ml-6">
          <h1>Ubicacion:</h1>
          <h1 className="bg-green-700 text-white text-center py-2 w-12 rounded shadow">
            PA01
          </h1>
        </div>

        <div className="mb-5 m-6">
          <h1>Codigo:</h1>
          <h1 className="bg-blue-500 text-white text-center py-2 w-20 rounded shadow">
            7701432
          </h1>
        </div>

        <div className=" mt-12 ml-6">
          <h1 className="bg-red-500 text-white text-center py-2 w-20  rounded shadow">
            Cerras Inv
          </h1>
        </div>
      </div>
      <div className="m-3 mt-0 pt-0 grid grid-cols-12">
        <div className="md:col-span-6 min-[300px]:col-span-12 bg-green-100 m-3  border-slate-400 border-opacity-40 border-2 p-8  rounded-xl">
          <div className="grid grid-cols-2 text-center">
            <div className=" row-auto text-start">
              <h1 className="font-bold">SKU:</h1>
              <h1>AC-SAE 15W40 API CI-4/SL T</h1>
              <h1 className="font-bold">EXISTENCIA</h1>
              <h1>13</h1>
              <h1 className="font-bold">CONTEO</h1>
              <h1>13</h1>
              <h1 className="font-bold">CUADRE(Pz)</h1>
              <h1>0</h1>
            </div>
            <div className="row-auto text-end">
              <h1 className="font-bold">ESTATUS</h1>
              <h1>Completo</h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 min-[300px]:col-span-12 bg-red-100 m-3  border-slate-400 border-opacity-40 border-2 p-8  rounded-xl">
          <div className="grid grid-cols-2 text-center">
            <div className=" row-auto text-start">
              <h1 className="font-bold">SKU:</h1>
              <h1>AC-SAE 15W40 API CI-4/SL T</h1>
              <h1 className="font-bold">EXISTENCIA</h1>
              <h1>13</h1>
              <h1 className="font-bold">CONTEO</h1>
              <h1>5</h1>
              <h1 className="font-bold">CUADRE(Pz)</h1>
              <h1>-8</h1>
            </div>
            <div className="row-auto text-end">
              <h1 className="font-bold">ESTATUS</h1>
              <h1>Incompleto</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
