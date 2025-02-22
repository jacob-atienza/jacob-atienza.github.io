import ScrollAnimation from './ScrollAnimation';
const Contact = () => {
  return (
    <>
      <span className="absolute -top-20"></span>
      <section id="contact" className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">Say Hello!</h2>
          <div className="sm:text-xl text-lg text-secondary tracking-wide leading-relaxed">
            Coming Soon...
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Contact;
