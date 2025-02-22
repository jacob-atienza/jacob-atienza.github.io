const Cards = ({
  projectName,
  projectLink,
  projectDescription,
  projectTechnologies,
  projectImage,
  githubLink,
}) => {
  return (
    <div className="h-full">
      <div className="bg-neutral-700/30 rounded-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative group">
          <img src={projectImage} alt={projectName} className="w-full h-48 sm:h-64 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={projectLink}
              className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{projectName}</h3>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <img src="assets/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
              </a>
            )}
          </div>

          <p className="text-secondary leading-relaxed">{projectDescription}</p>

          <div className="space-y-2">
            <p className="font-semibold text-white">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(projectTechnologies)
                ? projectTechnologies.map(tech => (
                    <span
                      key={tech}
                      className="bg-neutral-600/50 px-3 py-1 rounded-full text-sm hover:bg-neutral-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))
                : projectTechnologies.split(', ').map(tech => (
                    <span
                      key={tech}
                      className="bg-neutral-600/50 px-3 py-1 rounded-full text-sm hover:bg-neutral-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
