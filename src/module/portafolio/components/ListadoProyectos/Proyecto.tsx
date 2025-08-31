import Carrusel from "./Carrusel"

const slides: string[] = [
//   "https://scontent.fsrz4-1.fna.fbcdn.net/v/t39.30808-6/481944037_660155700002644_3730470607405700475_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WhCtdTGDFzoQ7kNvwH9JHXD&_nc_oc=AdlpJSrotwUc700oPqGZlyKnsU8lwlqNAGnQ82Fiu1rYOdiBcYHg4FT4-g9BLIqWQgM&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=kcWt7ezI81eY5MtMBzwrxQ&oh=00_AfQ_XhSaadbpgqXHx634DCivErzWHVrB0mnuDO0Bp15yBA&oe=68918223",
//   "https://scontent.fsrz4-1.fna.fbcdn.net/v/t39.30808-6/481072497_658065476878333_4387421184965633888_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=lcXRYcAy8UwQ7kNvwF-2zXm&_nc_oc=Adl7mmwlTlruyiJGGHzJi0Z7baHpAyPlz2w874hL8m77fbAVpbppZy4mefokGgwDnQQ&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=lMfj9RjL6CAuCiPBQf_y3Q&oh=00_AfRbhQRrPN-Q_dBF2PzfD0ke0vpFnDPb0EAU0sURK2768g&oe=68915AD4"
    "/proyectosGitHub/GitExpertApp/CelularGitApp.png",
    "/proyectosGitHub/GitExpertApp/laptopGitApp.png"
];

interface ProyectoProps {
  imagenes: string[];
}


const Proyecto = ({imagenes}: ProyectoProps) => {
  return (
    <div>
      <div className="max-w-lg">
        <Carrusel>
          {imagenes?.map((slide, idx) => (
            <img
              key={idx}
              src={slide}
              alt={`slide-${idx}`}
              className="w-full object-cover"
            />
          ))}
        </Carrusel>
      </div>
    </div>
  );
};

export default Proyecto