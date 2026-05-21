import React, { useState, useEffect } from 'react';

const TypeWriter = ({ texts, speed = 100, delayBetween = 2000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timer;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                timer = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, speed);
            } else {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetween);
            }
        } else {
            if (charIndex > 0) {
                timer = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, speed / 2);
            } else {
                setIsDeleting(false);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex, texts, speed, delayBetween]);

    return (
        <span>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-10 xs:pb-12 sm:pb-16">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 md:gap-16 items-start md:items-center">
                {/* Left Content */}
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 order-2 md:order-1 text-center md:text-left max-w-xl mx-auto md:mx-0 pt-2 md:pt-0">
                    <div className="flex items-end justify-center md:justify-start flex-nowrap gap-1 xs:gap-2">
                        <p className="text-gray-300 text-[0.85rem] xs:text-base sm:text-lg leading-none whitespace-nowrap">
                            Hii, it's me
                        </p>
                        <h1 className="text-[1.15rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-red-600 font-marcellus leading-none whitespace-nowrap tracking-tight">
                            Prajwal Sharma
                        </h1>
                    </div>
                    <p className="text-sm xs:text-base sm:text-2xl md:text-3xl text-white font-marcellus h-8 xs:h-10 sm:h-14 md:h-16 flex items-center justify-center md:justify-start">
                        <TypeWriter
                            texts={['Full Stack Developer', 'Java Developer', 'Student']}
                            speed={80}
                            delayBetween={2000}
                        />
                    </p>
                    <p className="text-gray-300 text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                        I am a Java developer learning backend development with Spring Boot and Spring Web.
                        Familiar with building REST APIs, working with Spring Data JPA, Spring JDBC, SQL, and Spring Security.
                        Currently improving skills in building secure and scalable applications.
                    </p>

                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#121212] border border-[#222222] text-gray-400 px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm xs:text-base h-12 xs:h-11 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                    >
                        View My Projects
                    </button>

                    {/* Social Links Code Block */}
                    <div className="bg-[#121212] border border-[#222222] rounded-lg p-3 xs:p-4 sm:p-6 font-mono text-xs xs:text-sm max-w-xl lg:max-w-3xl xl:max-w-5xl w-full overflow-x-auto lg:whitespace-nowrap text-left mx-auto md:mx-0 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                        <div className="text-gray-400">// Connect with me</div>
                        <div className="mt-1 whitespace-normal lg:whitespace-nowrap break-words lg:break-normal">
                            <span className="text-red-500">instagram</span>:{' '}
                            <span className="text-blue-400">
                                "<a
                                    href="https://www.instagram.com/prajwalsharma__/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    https://instagram.com/prajwalsharma__/
                                </a>"
                            </span>
                        </div>
                        <div className="mt-2 whitespace-normal lg:whitespace-nowrap break-words lg:break-normal">
                            <span className="text-red-500">github</span>:{' '}
                            <span className="text-blue-400">
                                "<a
                                    href="https://github.com/prajwalsharmaa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    https://github.com/prajwalsharmaa/
                                </a>"
                            </span>
                        </div>
                        <div className="mt-1 whitespace-normal lg:whitespace-nowrap break-words lg:break-normal">
                            <span className="text-red-500">linkedin</span>:{' '}
                            <span className="text-blue-400">
                                "<a
                                    href="https://www.linkedin.com/in/prajwal-sharma-b97045361/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    https://linkedin.com/in/prajwal-sharma-b97045361/
                                </a>"
                            </span>
                        </div>
                    </div>

                    {/* <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#121212] border border-[#222222] text-gray-400 px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm xs:text-base h-12 xs:h-11 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                    >
                        View My Projects
                    </button> */}
                </div>

                {/* Right Content - Profile Image */}
                <div className="flex justify-center items-center relative order-1 md:order-2 mt-2 xs:mt-0 mb-2 md:mb-0">
                    <div className="relative">
                        {/* Profile Image Container */}
                        <div tabIndex={0} aria-label="Profile image of Prajwal Sharma" className="cursor-pointer transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-red-500/20 focus:outline-none focus:ring-4 focus:ring-red-500/20 w-48 h-48 xs:w-56 xs:h-56 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full overflow-hidden border-3 xs:border-4 border-gray-700 bg-gray-800 mx-auto">
                            <img
                                src="Profile.jpg"
                                alt="Prajwal Sharma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;