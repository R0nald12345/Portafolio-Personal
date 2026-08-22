import { MapPin } from 'lucide-react';

const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML"],
    backend: ["NestJS", "Node.js", "Express", "Python", "C#", "Java", "C++"],
    databases: ["PostgreSQL", "TypeORM"],
    devops: ["Docker", "Nginx", "CI/CD", "GitHub Actions", "Terraform", "AWS"],
    erp: ["Odoo 17", "Odoo 18", "Python (Odoo)", "QWeb"]
};

const AboutMe = () => {

    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Acerca de Mí</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Soy un desarrollador FullStack apasionado por construir soluciones de software reales.
                            Trabajo en Ribentek SRL como desarrollador e implementador Odoo, participando en
                            proyectos para clínicas, ópticas y comercios con módulos ERP personalizados.
                            Paralelamente llevo adelante proyectos freelance con clientes reales usando
                            Next.js, NestJS y PostgreSQL.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Soy Auxiliar de Cátedra en la UAGRM, en las facultades de Ingeniería en
                            Computación y Ciencias de la Computación, y Tecnología y Ciencias Exactas,
                            donde enseño programación, algoritmos y estructuras de datos. Cuento con un
                            Diplomado en Arquitectura de Software y me encuentro en la penúltima etapa
                            de un Diplomado en DevOps. Comparto mi proceso de aprendizaje en mi canal
                            de YouTube <span className="text-blue-300 font-medium">Buscando el Código</span>.
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
                            <h3 className="text-xl font-semibold text-white mb-4">Bases de Datos & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {[...skills.databases, ...skills.devops].map((skill) => (
                                    <span key={skill} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">ERP & Odoo</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.erp.map((skill) => (
                                    <span key={skill} className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/Logos/facebook.svg" alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/Logos/youtube.svg" alt="YouTube" className="w-8 h-8 hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/Logos/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/in/ronald-camino-puma-608261217/" target="_blank" rel="noopener noreferrer">
                                    <img src="/Logos/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.tiktok.com/@ronaldcp2001" target="_blank" rel="noopener noreferrer">
                                    <img src="/Logos/tiktok.svg" alt="TikTok" className="w-8 h-8 hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;