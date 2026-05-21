import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleCVDownload = () => {
        scrollToSection('resume');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 xs:pt-3 sm:pt-6 px-2 xs:px-3 sm:px-4">
            <nav className="bg-gray-100 rounded-full shadow-lg px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 flex items-center justify-between max-w-5xl w-full">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 font-marcellus">
                    Prajwal
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-3 lg:space-x-8 text-gray-700 font-medium text-sm lg:text-base">
                    <li>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="hover:text-red-600 transition-colors cursor-pointer h-10 flex items-center px-2"
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="hover:text-red-600 transition-colors cursor-pointer h-10 flex items-center px-2"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('achievements')}
                            className="hover:text-red-600 transition-colors cursor-pointer h-10 flex items-center px-2"
                        >
                            Achievements
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-red-600 transition-colors cursor-pointer h-10 flex items-center px-2"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                <button
                    onClick={handleCVDownload}
                    className="hidden md:flex items-center bg-gray-800 text-white px-3 lg:px-5 py-2 rounded-full hover:bg-gray-700 transition-colors h-10 text-sm lg:text-base"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    CV
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 h-10 w-10 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-5 h-5 xs:w-6 xs:h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-14 xs:top-16 sm:top-20 left-2 xs:left-3 sm:left-4 right-2 xs:right-3 sm:right-4 overflow-hidden rounded-2xl shadow-lg bg-gray-100 transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${isMenuOpen
                    ? 'max-h-[28rem] opacity-100 translate-y-0 pointer-events-auto'
                    : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                style={{
                    transformOrigin: 'top',
                }}
            >
                <div className="px-4 xs:px-6 py-3 xs:py-4">
                    <div className="space-y-2 xs:space-y-3 text-gray-700 font-medium text-sm xs:text-base">
                        <button
                            onClick={() => scrollToSection('skills')}
                            className={`block w-full text-left hover:text-amber-600 transition-all duration-300 h-10 flex items-center px-2 rounded-lg ${isMenuOpen ? 'opacity-100 translate-y-0 delay-75' : 'opacity-0 -translate-y-1'
                                }`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`block w-full text-left hover:text-amber-600 transition-all duration-300 h-10 flex items-center px-2 rounded-lg ${isMenuOpen ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-1'
                                }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('achievements')}
                            className={`block w-full text-left hover:text-amber-600 transition-all duration-300 h-10 flex items-center px-2 rounded-lg ${isMenuOpen ? 'opacity-100 translate-y-0 delay-125' : 'opacity-0 -translate-y-1'
                                }`}
                        >
                            Achievements
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block w-full text-left hover:text-amber-600 transition-all duration-300 h-10 flex items-center px-2 rounded-lg ${isMenuOpen ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-1'
                                }`}
                        >
                            Contact
                        </button>

                        <button
                            onClick={handleCVDownload}
                            className={`flex items-center justify-center w-full bg-gray-800 text-white px-4 xs:px-5 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 h-10 text-sm xs:text-base mt-2 xs:mt-3 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-1'
                                }`}
                        >
                            <svg
                                className="w-4 xs:w-5 h-4 xs:h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;