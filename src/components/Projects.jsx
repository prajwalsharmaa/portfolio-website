import { createPreviewImage } from '../utils/createPreviewImage';

const Projects = () => {
  const projects = [
    {
      title: 'Bid2BuyAuctionPlatform',
      description: 'Auction platform project with a Spring Boot backend and server-rendered pages.',
      tags: ['Thymeleaf', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
      previewImage: createPreviewImage({
        title: 'Bid2Buy',
        subtitle: 'Auction Platform',
        accent: '#ef4444',
      }),
      github: 'https://github.com/prajwalsharmaa/Bid2BuyAuctionPlatform/',
    },
    {
      title: 'Nepathon-KalaChain',
      description: 'Blockchain-themed concept project combining Solidity, Python, and web UI pieces.',
      tags: ['Solidity', 'Typescript', 'Python', 'HTML', 'JavaScript'],
      previewImage: createPreviewImage({
        title: 'Nepathon',
        subtitle: 'KalaChain',
        accent: '#f59e0b',
      }),
      github: 'https://github.com/prajwalsharmaa/Nepathon-KalaChain/',
    },
    {
      title: 'PharmaTracker-QrApp',
      description: 'QR-oriented app concept with a simple front-end-first workflow.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      previewImage: createPreviewImage({
        title: 'PharmaTracker',
        subtitle: 'QR App',
        accent: '#22c55e',
      }),
      github: 'https://github.com/prajwalsharmaa/PharmaTracker-QrApp/',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 py-12 xs:py-16 sm:py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10 xs:mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 font-marcellus mb-2 xs:mb-3 sm:mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl">Some of my highlight projects</p>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-3 xs:mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#222222] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-40 xs:h-48 sm:h-56 md:h-64 bg-[#1a1a1a] overflow-hidden">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Project Content */}
              <div className="p-3 xs:p-4 sm:p-5 md:p-6 bg-[#111111]">
                <div className="flex items-center justify-between mb-2 xs:mb-2.5 sm:mb-3">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-red-500 flex items-center flex-wrap">
                    <svg
                      className="w-4 xs:w-5 sm:w-6 md:w-6 h-4 xs:h-5 sm:h-6 md:h-6 mr-1.5 xs:mr-2 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors h-9 w-9 xs:h-10 xs:w-10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      className="w-5 xs:w-6 h-5 xs:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <p className="text-gray-400 text-xs xs:text-sm mb-2 xs:mb-3 sm:mb-4">{project.date}</p>

                <p className="text-gray-300 mb-2 xs:mb-3 sm:mb-4 leading-relaxed text-xs xs:text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800 text-red-500 px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full text-xs xs:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;