import { Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Contacto</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-300 text-lg mb-8">
                        ¿Interesado en trabajar juntos? No dudes en contactarme.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <a
                            href="mailto:pumaronal2016@gmail.com"
                            className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
                        >
                            <Mail size={40} className="mx-auto text-blue-400 mb-4" />
                            <p className="text-white font-semibold">Email</p>
                            <p className="text-gray-300 text-sm">pumaronal2016@gmail.com</p>
                        </a>
                        <a
                            href="tel:+59169003180"
                            className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
                        >
                            <Phone size={40} className="mx-auto text-green-400 mb-4" />
                            <p className="text-white font-semibold">Teléfono</p>
                            <p className="text-gray-300 text-sm">+591 69003180</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ronald-camino-puma-608261217/"
                            className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
                        >
                            <Linkedin size={40} className="mx-auto text-blue-500 mb-4" />
                            <p className="text-white font-semibold">LinkedIn</p>
                            <p className="text-gray-300 text-sm">Ver perfil</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
