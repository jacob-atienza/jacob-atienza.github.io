import '../App.css';
import Typewriter from './Typewriter';

const Jacob = () => {
  return (
    <section id="Jacob" className="min-h-screen flex items-center justify-center mx-auto">
      <div className="flex flex-col items-start justify-center mx-auto px-4 sm:px-16 mt-10 max-w-3xl">
        {/* Name */}
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Jacob Atienza
        </h1>

        {/* Typewriter Effect */}
        <p className="text-[#dfd9ff] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mt-3 flex">
          I am a{' '}
          <span className="ml-2 w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] inline-block whitespace-nowrap">
            <Typewriter />
          </span>
        </p>

        {/* Social Links */}
        <div className="flex gap-5 mt-4">
          <a href="https://github.com/jacob-atienza" target="_blank" rel="noopener noreferrer">
            <img
              src="assets/github-mark-white.svg"
              alt="Github"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-atienza-code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/InBug-White.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="mailto:jacobatienza14@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="assets/mail.png" alt="Mail" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jacob;
