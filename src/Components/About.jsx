const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto"
    >
      <span id="about" className="absolute -top-20"></span>

      <h3 className="text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        About Me
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <img
          src="/assets/jacob_atienza.jpg"
          alt="Jake"
          className="rounded-full object-cover border-4 border-white w-64 h-64"
        />

        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
            Hey! My name is <span style={{color: 'rgb(220, 208, 255)'}}>Jake</span>, and I am a
            software engineering student with a deep passion for learning new technologies.
            <br />
            <br />
            Hobbies: Gaming, Guitar, Coding, Time with Friends & Family.
          </p>
          <p className="sm:text-[16px] text-[12px] leading-[30px] text-secondary tracking-wider">
            Languages: C/C++, C#, Java, Python, JavaScript, PHP, SQL, HTML, CSS
            <br />
            Frameworks & Libraries: React, Node.js, Express, ASP.NET, jQuery, pandas, NumPy,
            Bootstrap, Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
