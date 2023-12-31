import Link from "next/link";

const ChooseCategoryStepPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        ¿Qué producto vas a vender?
      </h1>
      <div className="flex justify-between p-4 mt-28">
        <Link
          href="/control_panel/products/create/choose_specific_category_step"
          className="category flex flex-col items-center bg-secondary rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
        >
          <img
            src="/vehiculos.png"
            alt="Vehículos"
            className="w-24 h-24 mb-2 rounded-full"
          />
          <p className="text-center font-semibold">Vehículos</p>
        </Link>
        <Link
          href="/control_panel/products/create/choose_specific_category_step"
          className="category flex flex-col items-center bg-secondary  rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
        >
          <img
            src="/productos.png"
            alt="Productos"
            className="w-24 h-24 mb-2 rounded-full"
          />
          <p className="text-center font-semibold">Productos</p>
        </Link>
        <Link
          href="/control_panel/products/create/choose_specific_category_step"
          className="category flex flex-col items-center bg-secondary  rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
        >
          <img
            src="/inmuebles.png"
            alt="Inmuebles"
            className="w-24 h-24 mb-2 rounded-full"
          />
          <p className="text-center font-semibold">Inmuebles</p>
        </Link>
        <Link
          href="/control_panel/products/create/choose_specific_category_step"
          className="category flex flex-col items-center bg-secondary  rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
        >
          <img
            src="/servicios.png"
            alt="Servicios"
            className="w-24 h-24 mb-2 rounded-full"
          />
          <p className="text-center font-semibold">Servicios</p>
        </Link>
      </div>
    </div>
  );
};
export default ChooseCategoryStepPage;
