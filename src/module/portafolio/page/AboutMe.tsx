
import { MapPin } from 'lucide-react';

const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML"],
    backend: ["NestJS", "C#", "Java", "Python", "C++", "NodeJS", "Express" ],
    tools: ["Git", "GitHub", "CI/CD", "Visual Basic", "Delphi"]
};

const AboutMe = () => {

    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Acerca de Mí</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Soy un desarrollador apasionado por la tecnología y la educación. Con experiencia
                            en desarrollo FullStack y como educador universitario, combino habilidades técnicas
                            sólidas con la capacidad de transmitir conocimiento de manera efectiva.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            He participado en proyectos académicos y hackatones, además de contribuir al
                            desarrollo de plataformas gubernamentales. Como creador de contenido, comparto
                            conocimientos de programación en redes sociales con más de 500 seguidores.
                        </p>
                        <div className="flex items-center text-gray-300 mb-4">
                            <MapPin size={20} className="mr-2" />
                            Santa Cruz, Bolivia
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.frontend.map((skill) => (
                                    <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Backend & Lenguajes</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.backend.map((skill) => (
                                    <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/Logos/facebook.svg"
                                        alt="Facebook"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/Logos/youtube.svg"
                                        alt="YouTube"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/Logos/instagram.svg"
                                        alt="Instagram"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/ronald-camino-puma-608261217/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/Logos/linkedin.svg"
                                        alt="LinkedIn"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                                <a href="https://www.tiktok.com/@ronaldcp2001" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/Logos/tiktok.svg"
                                        alt="TickTock"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutMe
