import { RiAlignRight } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import imagenPerfil from '../../../../public/imagenPerfil.jpg'

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import { FaHome } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";


const Sidebar = () => {


  const [sidebar, setSidebar] = useState(false);
  //const location = useLocation();
  const pathname = location.pathname;

 


  // ✅ Menú base con paths sin /dashboard/
  const menuItems = [
    { icon: FaHome, text: "Inicio", path: "" },
    { icon: IoPerson, text: "Aserca de Mi", path: "postulantes" },
    { icon: GoProjectRoadmap, text: "Proyectos", path: "estudiantes" },
    { icon: CgMail, text: "Contacto", path: "docentes" },
 
  ];

/*   // ✅ Filtrar menú por rol
  const filteredItems = menuItems.filter((item) => {
    if (rol === "estudiante" || rol === "docente") {
      return item.text === "Dashboard";
    }
    return true;
  });

  // ✅ Agregar botón "Votos" solo para docente y estudiante
  if (rol === "docente" || rol === "estudiante") {
    filteredItems.push({ icon: FaSheetPlastic, text: "Votos", path: "votos" });
  } */

  return (
    <>
      <div
        className={`p-5 fixed lg:static w-[330px] top-0 z-50 h-full transition-all duration-300 ${
          sidebar ? "left-0" : "-left-full lg:left-0"
        } bg-black text-white flex flex-col border-r border-black/70`}
      >
        <div className="mx-auto p-6 border-b border-gray-600">
          <img
            src={imagenPerfil}
            className="rounded-full border-8 border-gray-600 bg-yellow-300 mx-auto"
            width={150}
            height={100}
          />
          <h1 className="text-3xl font-bold text-center mt-3">Ronald Camino Puma</h1>
          <div className="flex justify-center items-center text-3xl gap-3 mt-3">
            <FaFacebookSquare 
              className="hover:text-blue-700 hover:cursor-pointer"
              onClick={()=>window.open("https://www.facebook.com/ronald.camino.puma.559022/", "_blank")}
              />
            <FaInstagramSquare className="hover:text-pink-800 hover:cursor-pointer"
              onClick={()=>window.open("https://www.instagram.com/ronald_camino_p/", "_blank")}
            
            />
            <FaLinkedin className="hover:text-blue-900 hover:cursor-pointer"/>
            <FaSquareGithub className="hover:text-purple-800 hover:cursor-pointer"/>
            <FaYoutubeSquare className="hover:text-red-700 hover:cursor-pointer"/>
          </div>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const fullPath =
                item.path === "" ? "/dashboard" : `/dashboard/${item.path}`;
              const isActive = pathname === fullPath;

              return (
                <li key={index}>
                  <div
                    //to={fullPath}
                    className={`flex items-center px-6 py-3 text-lg transition-colors hover:bg-gray-600 ${
                      isActive ? "bg-blue-800 border-r-4 border-blue-400" : ""
                    }`}
                    onClick={() => setSidebar(false)}
                  >
                    <Icon className="text-xl" />
                    <span className="ml-3">{item.text}</span>
                  </div> 
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <button
        onClick={() => setSidebar(!sidebar)}
        className="lg:hidden fixed top-4 left-4 bg-blue-900 p-2 text-white rounded-lg text-xl z-50 shadow-lg"
      >
        {sidebar ? <IoMdClose /> : <RiAlignRight />}
      </button>

      {sidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={() => setSidebar(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
