import ScrollAnimation from "./ScrollAnimation";
const Work = () => {
  return (
    <>
      <span className="my-40 inline-block" id="work"></span>
      <section className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-white">
            Work Experience
          </h2>
          <div className="bg-neutral-700/30 rounded-xl p-8 shadow-lg">
            <ol className="relative border-s border-neutral-600">
              <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
              <ScrollAnimation direction="left">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal text-secondary">
                    September 2025 - Present
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Student Researcher - Software Developer Co-Op
                  </h3>
                  <p className="text-base font-normal text-secondary">
                    Prototyping a 3D VR training simulation in Unity C# with
                    modular architecture, enabling rapid addition of future
                    training scenarios. Engineered extensible player interaction
                    scripts, improving developer efficiency for integrating new
                    modules.
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation direction="left">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal text-secondary">
                    May 2025 - August 2025
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Student Researcher - Software Developer Co-Op
                  </h3>
                  <p className="text-base font-normal text-secondary">
                    Delivered an AI-powered quotation system combining local LLM
                    RAG pipelines and API integrations. Built a full-stack
                    FastAPI + MongoDB application that streamlines current
                    processes. Designed and deployed a JWT-secured REST API,
                    enabling authenticated management of RAG document
                    embeddings.
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation direction="left">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal text-secondary">
                    June 2022
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    General Laborer - Hardware Department
                  </h3>
                  <p className="text-base font-normal text-secondary">
                    Assembled hardware according to blueprint design
                    specifications. Wrapped cabinet parts ensuring safe delivery
                    and installation.
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation direction="left">
                <li className="ms-4 mb-10">
                  <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal text-secondary">
                    April 2023
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Primer Sander
                  </h3>
                  <p className="text-base font-normal text-secondary">
                    Handled, sanded and inspected custom, high end cabinetry.
                    Required extreme attention to detail and precision to ensure
                    quality finishes.
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation direction="left">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-neutral-500 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal text-secondary">
                    May 2023 - December 2024
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Computer Numerical Control Machinist
                  </h3>
                  <p className="text-base font-normal text-secondary">
                    Managed CNC machine production schedule, ensuring timely
                    task completion. Increased sheet count production by 15%
                    through preventative maintenance and machine optimizations.
                    Automated stock management to maximize machine efficiency
                    and reduce downtime.
                  </p>
                </li>
              </ScrollAnimation>
            </ol>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Work;
