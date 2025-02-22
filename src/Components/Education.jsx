import ScrollAnimation from './ScrollAnimation';

const Education = () => {
  return (
    <>
      <span className="absolute -top-20"></span>
      <section id="education" className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">Education</h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up">
          <div className="bg-neutral-700/30 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="space-y-4">
                  <img
                    src="/assets/conestoga-logo.png"
                    alt="Conestoga College"
                    className="h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-2xl text-white">Conestoga College</h3>
                    <p className="text-secondary italic">Software Engineering Technology</p>
                    <p className="text-secondary">Waterloo, ON, Canada</p>
                  </div>

                  <a
                    href="https://gdg.community.dev/gdg-on-campus-conestoga-college-waterloo-campus-waterloo-canada/"
                    className="inline-block mt-4 px-4 py-2 bg-neutral-600/50 hover:bg-neutral-600 rounded-lg transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/google-dev-logo.svg"
                        alt="Google Developer"
                        className="w-6 h-6"
                      />
                      <span>Google Developer Student Club</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <div className="bg-neutral-600/30 p-6 rounded-lg">
                  <blockquote className="text-secondary italic leading-relaxed">
                    "As one of the strongest programs of its type in Ontario, its focused, hands-on
                    approach will let you learn a broad base of languages and technologies,
                    including web development, databases, business intelligence, and cybersecurity."
                  </blockquote>
                </div>

                <div className="bg-neutral-600/30 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4 text-white">Academic Achievements</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <span className="text-green-400 font-bold text-xl">100%</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Data Structures</p>
                        <p className="text-secondary text-sm">Perfect Score</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <span className="text-green-400 font-bold text-xl">99%</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Web Design and Development</p>
                        <p className="text-secondary text-sm">Top Student Position</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-600/30 p-6 mt-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4 text-white">Current Focus</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'Game Development',
                  'Mobile Development',
                  'Data Structures',
                  'Algorithms',
                  'Database Design',
                  'Systems Programming',
                  'Network Application Development',
                  'Cyber Security',
                ].map(skill => (
                  <span
                    key={skill}
                    className="bg-neutral-700/50 px-3 py-1 rounded-full text-sm hover:bg-neutral-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Education;
