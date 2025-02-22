import '../App.css';
import Typewriter from './Typewriter';
import ScrollAnimation from './ScrollAnimation';

const Jacob = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jacob-atienza',
      icon: 'assets/github-mark-white.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jacob-atienza-code/',
      icon: 'assets/InBug-White.png',
    },
    {
      name: 'Email',
      url: 'mailto:jacobatienza14@gmail.com',
      icon: 'assets/mail.png',
    },
  ];

  return (
    <section id="Jacob" className="relative min-h-screen flex items-center justify-center mx-auto">
      <div className="relative flex flex-col items-start justify-center mx-auto px-4 sm:px-16 max-w-3xl">
        <ScrollAnimation direction="down">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Jacob Atienza
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="down" className="w-full">
          <div className="flex flex-wrap items-center gap-2 text-[#dfd9ff] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6">
            <span>I am a</span>
            <span className="min-w-[200px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px] inline-block">
              <Typewriter />
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up">
          <div className="flex gap-6 mt-8">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.name}
              >
                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <img src={link.icon} alt={link.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up">
          <a
            href="#projects"
            className="mt-12 px-6 py-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full 
                     text-white transition-all duration-300 transform hover:-translate-y-1
                     flex items-center gap-2 group"
          >
            View My Work
            <svg
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Jacob;
