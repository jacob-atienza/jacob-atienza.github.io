import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <>
      <span className="my-40 inline-block" id="about"></span>
      <section className="relative min-h-screen sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
        <span id="about" className="absolute -top-20"></span>

        <ScrollAnimation direction="up">
          <h3 className="text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-12">
            About Me
          </h3>
        </ScrollAnimation>

        <div className="flex flex-col sm:flex-row gap-12 items-center justify-center">
          <ScrollAnimation direction="left">
            <div className="relative">
              <img
                src="/assets/jacob_atienza.jpg"
                alt="Jake"
                className="rounded-full object-cover border-4 border-white w-96 h-96 min-w-[256px] min-h-[256px] shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-pulse"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="max-w-xl space-y-6">
              <p className="sm:text-xl text-lg text-secondary tracking-wide leading-relaxed">
                Hey! My name is <span className="text-[rgb(220,208,255)] font-semibold">Jake</span>,
                and I am a software engineering student with a deep passion for learning new
                technologies.
              </p>

              <div className="space-y-4">
                <div className="bg-neutral-700/30 p-6 rounded-lg">
                  <h4 className="text-white text-lg font-semibold mb-2">Hobbies</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Gaming',
                      'Guitar',
                      'Coding',
                      'Time with Friends & Family',
                      'Skateboarding',
                    ].map(hobby => (
                      <span
                        key={hobby}
                        className="bg-neutral-600/50 px-3 py-1 rounded-full text-sm"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-700/30 p-6 rounded-lg">
                  <h4 className="text-white text-lg font-semibold mb-2">Technical Skills</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-secondary mb-2">Languages</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'C',
                          'C++',
                          'C#',
                          'Java',
                          'Python',
                          'JavaScript',
                          'PHP',
                          'SQL',
                          'HTML',
                          'CSS',
                        ].map(lang => (
                          <span
                            key={lang}
                            className="bg-neutral-600/50 px-3 py-1 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-secondary mb-2">Frameworks & Libraries</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React',
                          'Node.js',
                          'Express',
                          'ASP.NET',
                          'jQuery',
                          'pandas',
                          'NumPy',
                          'Bootstrap',
                          'Tailwind',
                        ].map(tech => (
                          <span
                            key={tech}
                            className="bg-neutral-600/50 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default About;
