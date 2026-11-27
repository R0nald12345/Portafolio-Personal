import Carrusel from './Carrusel';

interface ProyectoProps {
  imagenes: string[];
  title: string;
}

const Proyecto = ({ imagenes, title }: ProyectoProps) => {
  if (imagenes.length === 0) {
    return null;
  }

  return <Carrusel imagenes={imagenes} title={title} />;
};

export default Proyecto;
