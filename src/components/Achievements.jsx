import { createPreviewImage } from '../utils/createPreviewImage';

const Achievements = () => {
  const certificates = [
    {
      title: 'Certificate 1',
      description: 'Achievement description pending.',
      previewImage: createPreviewImage({
        title: 'Certificate 01',
        subtitle: 'Achievement',
        accent: '#60a5fa',
      }),
    },
    {
      title: 'Certificate 2',
      description: 'Achievement description pending.',
      previewImage: createPreviewImage({
        title: 'Certificate 02',
        subtitle: 'Achievement',
        accent: '#f97316',
      }),
    },
    {
      title: 'Certificate 3',
      description: 'Achievement description pending.',
      previewImage: createPreviewImage({
        title: 'Certificate 03',
        subtitle: 'Achievement',
        accent: '#a855f7',
      }),
    },
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 py-12 xs:py-16 sm:py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10 xs:mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 font-marcellus mb-2 xs:mb-3 sm:mb-4">
            Achievements
          </h2>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl">Some of my accomplishments</p>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-3 xs:mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#222222] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 bg-[#1a1a1a]">
                <img
                  src={cert.previewImage}
                  alt={`${cert.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 xs:p-5 sm:p-6">
                <h3 className="text-lg xs:text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm xs:text-base mt-2">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
