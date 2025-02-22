import ScrollAnimation from './ScrollAnimation';
import React, {useState} from 'react';
const Contact = () => {
  const [result, setResult] = useState('');
  const onSubmit = async event => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c9ce2fa2-5942-43ae-a841-c96606d9235e');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message Sent Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <>
      <span className="my-40 inline-block" id="contact"></span>
      <section className="relative sm:px-10 px-2 sm:py-16 py-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-white">
            Say Hello!
          </h2>
          <div className="bg-neutral-700/30 rounded-xl p-8 shadow-lg">
            <div className="sm:text-xl text-lg text-secondary tracking-wide leading-relaxed">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                  Contact Me
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">
                  I'm always free to discuss project ideas, job opportunities, or just saying hello!
                </p>
                <form className="space-y-8" onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-secondary"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-neutral-600/30 border border-neutral-600 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-secondary"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="name"
                      className="block p-3 w-full text-sm text-secondary bg-neutral-600/30 rounded-lg border border-neutral-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-secondary"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-secondary bg-neutral-600/30 rounded-lg shadow-sm border border-neutral-600 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Leave a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white bg-primary-700 rounded-full bg-primary-700/50 hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send message
                  </button>
                </form>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Contact;
