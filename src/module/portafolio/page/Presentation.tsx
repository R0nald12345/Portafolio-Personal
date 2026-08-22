import imagenPerfil from '../../../../public/imagenPerfil.jpg';

const Presentation = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-70 h-70 mx-auto mb-8 rounded-full border-8 border-gray-500">
            <img
              src={imagenPerfil}
              alt="Ronald Camino Puma"
              className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ronald Camino Puma
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-8">
            Desarrollador FullStack · Implementador Odoo · Auxiliar Docencia Universitario
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Desarrollador FullStack con experiencia en proyectos reales: implementación de ERPs
            con Odoo 17/18, desarrollo de plataformas web con Next.js y NestJS, y despliegue
            en producción con Docker y VPS. Auxiliar de Cátedra en la UAGRM y diplomado en
            Arquitectura de Software y DevOps.
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentation;