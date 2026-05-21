import {
    SiC,
    SiGit,
    SiJavascript,
    SiMysql,
    SiPython,
    SiSharp,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Showcase = () => {
    const skills = [
        { name: 'JavaScript', icon: SiJavascript, color: '#e7cd08' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C#', icon: SiSharp, color: '#239120' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        // { name: 'React.js' },
        // { name: 'HTML' },
        // { name: 'CSS' },
        { name: 'Java', icon: FaJava, color: '#f47004' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Spring Security', icon: SiSpringsecurity, color: '#6DB33F' },
        { name: 'Spring Data JPA', icon: SiSpring, color: '#6DB33F' },
        { name: 'Spring JDBC', icon: SiSpring, color: '#6DB33F' },
        { name: 'Spring Web', icon: SiSpring, color: '#6DB33F' },
        { name: 'SQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 py-12 xs:py-16 sm:py-20">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-10 xs:mb-12 sm:mb-16">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 font-marcellus mb-2 xs:mb-3 sm:mb-4">
                        Skills and Tools
                    </h2>
                    <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl">Technologies I work with</p>
                    <div className="w-16 xs:w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-3 xs:mt-3 sm:mt-4"></div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-5 md:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] border border-[#222222] rounded-lg xs:rounded-2xl p-2 xs:p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center hover:bg-[#181818] transition-all duration-300 hover:scale-105 cursor-pointer min-h-24 xs:min-h-40 sm:min-h-48"
                        >
                            <div className="w-8 xs:w-14 sm:w-16 md:w-20 h-8 xs:h-14 sm:h-16 md:h-20 bg-[#0d0d0d] rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 xs:mb-3 sm:mb-4 border border-[#232323]">
                                {skill.icon ? (
                                    <skill.icon
                                        className="w-5 xs:w-8 sm:w-10 md:w-12 h-5 xs:h-8 sm:h-10 md:h-12"
                                        style={{ color: skill.color }}
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <span className="text-xs text-gray-400">?</span>
                                )}
                            </div>
                            <p className="text-white font-medium text-center text-[10px] xs:text-sm sm:text-base leading-tight">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;