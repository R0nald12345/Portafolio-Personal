import { useState } from "react";
import { Menu, X, } from 'lucide-react';

const Header = () => {
    const [activeSection, setActiveSection] = useState<string>('inicio');

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>

            {/* Header */}
            <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">Ronald Camino Puma</h1>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {['inicio', 'acerca', 'experiencia', 'proyectos', 'contacto'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize transition-colors ${activeSection === section
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {section === 'acerca' ? 'Acerca de Mí' : section}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4">
                            {['inicio', 'acerca', 'experiencia', 'proyectos', 'contacto'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="block w-full text-left py-2 capitalize text-gray-300 hover:text-white transition-colors"
                                >
                                    {section === 'acerca' ? 'Acerca de Mí' : section}
                                </button>
                            ))}
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}
export default Header
