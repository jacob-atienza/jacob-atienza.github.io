import ScrollAnimation from './ScrollAnimation';
import Cards from './Card';

const Projects = () => {
  const projects = [
    {
      projectName: 'Pokemon TCGP Pack Simulator',
      projectLink: 'https://poke-packer.onrender.com/',
      projectDescription:
        'A Pokemon TCGP Pack Opening Simulator I created while following the Full Stack Open course.',
      projectTechnologies: ['React', 'Express', 'Node.js', 'MongoDB'],
      projectImage: 'assets/pokepack.png',
      githubLink: 'https://github.com/jacob-atienza/poke-packer',
    },
    {
      projectName: 'MP3 Player',
      projectLink: 'https://github.com/jacob-atienza/Console-Based-MP3-Player',
      projectDescription:
        'A console-based MP3 player created for Data Structures course with Luke Alkema & Dylan Shouldice.',
      projectTechnologies: ['C', 'C++', 'Data Structures', 'Algorithms', 'SFML'],
      projectImage: 'assets/MP3.png',
      githubLink: 'https://github.com/jacob-atienza/Console-Based-MP3-Player',
    },
  ];

  return (
    <>
      <span className="my-40 inline-block" id="projects"></span>
      <section className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">Projects</h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.projectName} direction="up" className="h-full">
              <Cards {...project} />
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
