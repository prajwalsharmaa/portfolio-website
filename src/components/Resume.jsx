const Resume = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 py-12 xs:py-16 sm:py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-10 xs:mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-red-700 font-marcellus mb-2 xs:mb-3 sm:mb-4">
            My Resume
          </h2>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl">The latest resume is shared directly on request to keep the site fast and reliable.</p>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-red-700 mx-auto mt-3 xs:mt-3 sm:mt-4"></div>
        </div>

        <div className="bg-[#121212] border border-[#222222] rounded-lg xs:rounded-xl sm:rounded-2xl p-6 xs:p-8 sm:p-12 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="text-5xl xs:text-6xl sm:text-8xl mb-4 xs:mb-5 sm:mb-6">📄</div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">Resume available on request</h3>
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Use the contact section if you want the latest copy. The header CV button jumps here so there is no broken file download or blank page.
          </p>

          <div className="mt-6 xs:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-gray-900 font-semibold transition-colors w-full sm:w-auto"
            >
              Contact Me
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#232323] text-white font-semibold transition-colors w-full sm:w-auto"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;