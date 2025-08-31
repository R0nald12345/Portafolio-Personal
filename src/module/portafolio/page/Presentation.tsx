import imagenPerfil from '../../../../public/imagenPerfil.jpg';

const Presentation = () => {
  return (
    <>
         <div className="container mx-auto px-4">
          <div className="text-center">
            {/* <div className="w-70 h-70 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"> */}
            <div className="w-70 h-70 mx-auto mb-8 rounded-full border-8 border-gray-500">

              <img 
                src={imagenPerfil}
                alt="Ronald Camino Puma"
                className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center"
              />
                {/* <User size={80} className="text-white" /> */}
              {/* </div> */}

            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ronald Camino Puma
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-8">
              Desarrollador de Software FullStack
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Desarrollador con 3 años de experiencia, especializado en FullStack. 
              Auxiliar de Cátedra en la UAGRM, enseñando programación y estructuras de datos.
            </p>
      
          </div>
        </div>
    </>
  )
}

export default Presentation
