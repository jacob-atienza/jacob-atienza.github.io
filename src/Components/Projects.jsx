import ScrollAnimation from "./ScrollAnimation";
import Cards from "./Card";

const Projects = () => {
  const projects = [
    {
      projectName: "MediScribe AI",
      projectLink:
        "https://devpost.com/software/mediscribe-zby95c?ref_content=my-projects-tab&ref_feature=my_projects",
      projectDescription:
        "Winner/1st place at IT Club Hackathon 2.0 (80+ participants)." +
        " MediScribe AI is a web portal that automates medical documentation by recording and transcribing consultations," +
        " then uses Gemini AI to generate structured reports. Built with React and FastAPI, it securely stores reports in a PostgreSQL database for easy access by doctors and patients.",
      projectTechnologies: [
        "OpenAI Whisper",
        "Googles Gemini AI",
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
      ],
      projectImage: "assets/MediScribeAI.png",
      githubLink: "https://github.com/DylanShouldice/IT-Hackathon",
    },
    {
      projectName: "Pokemon TCGP Pack Simulator",
      projectLink: "https://poke-packer.onrender.com/",
      projectDescription:
        "A Pokemon TCGP Pack Opening Simulator I created while following the Full Stack Open course.",
      projectTechnologies: ["React", "Express", "Node.js", "MongoDB"],
      projectImage: "assets/pokepack.png",
      githubLink: "https://github.com/jacob-atienza/poke-packer",
    },
    {
      projectName: "MP3 Player",
      projectLink: "https://github.com/jacob-atienza/Console-Based-MP3-Player",
      projectDescription:
        "A console-based MP3 player created for Data Structures course with Luke Alkema & Dylan Shouldice.",
      projectTechnologies: [
        "C",
        "C++",
        "Data Structures",
        "Algorithms",
        "SFML",
      ],
      projectImage: "assets/MP3.png",
      githubLink: "https://github.com/jacob-atienza/Console-Based-MP3-Player",
    },
    {
      projectName: "Trivia Now",
      projectLink: "https://trivia.jacobatienza.me",
      projectDescription:
        "A React + Vite Typescript application which fetches data from the Open Trivia DB public API. Allows for sorting by category, question type and difficulty. Styled using Tailwind CSS",
      projectTechnologies: [
        "JavaScript",
        "React",
        "Vite",
        "Axios",
        "Tailwind CSS",
      ],
      projectImage: "assets/TriviaNow.png",
      githubLink: "https://github.com/jacob-atienza/trivia-now",
    },
  ];

  return (
    <>
      <span className="my-40 inline-block" id="projects"></span>
      <section className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">
            Projects
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.projectName}
              direction="up"
              className="h-full"
            >
              <Cards {...project} />
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
