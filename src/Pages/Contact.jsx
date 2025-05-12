import React from "react";

const Contact = () => {
  return (
      <div className="min-h-[1100px] max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6">
        <div className="text-l mb-8">
          <h2 className="text-2xl">Contact Us</h2>
          <p className="text-base">
            If you have any questions about a specific program, reach out to the
            emails below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 p-5">
          {[
            {
              name: "Vera Fainshtein",
              role: "Graphic Design",
              phone: "(650) 574-6283",
              email: "fainshteinv@smccd.edu",
              img: "images/verafainshtein.png",
            },
            {
              name: "Michelle M. Brown",
              role: "Broadcast & Elec. Media",
              phone: "(650) 574-6934",
              email: "brownm@smccd.edu",
              img: "images/michellebrown.png",
            },
            {
              name: "Diana Bennett",
              role: "UI/UX & Web Design",
              phone: "(650) 359-6769",
              email: "bennettd@smccd.edu",
              img: "images/dianabennett.png",
            },
          ].map((contact, index) => (
              <div
                  key={index}
                  className="flex flex-col gap-5 bg-gray-200 p-6 rounded-lg border border-gray-300 mb-6  transition-transform duration-300 transform hover:translate-y-[-5px] shadow-md"
              >
                <img
                    src={contact.img}
                    alt={`Professor ${contact.name}`}
                    className="rounded-lg w-[100px] h-[100px] object-cover"
                />
                <div className="w-full">
                  <p className="font-bold mb-1 truncate">{contact.name}</p>
                  <p className="mb-1 truncate">{contact.role}</p>
                  <p className="mb-1 truncate">{contact.phone}</p>
                  <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline truncate"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-16">
          <div className="w-full p-5 bg-white border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Have a question?</h3>
            <p className="text-base mb-4">
              We are here to help! Fill up our form to reach out to us via email
              or phone.
            </p>

            <form action="mailto:csmcass@smccd.edu" method="post">
              <label htmlFor="name" className="block font-bold mb-2">
                Name:
              </label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-2 mb-5 border border-gray-300 rounded-md"
              />

              <label htmlFor="phone" className="block font-bold mb-2">
                Phone:
              </label>
              <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your number"
                  required
                  className="w-full p-2 mb-5 border border-gray-300 rounded-md"
              />

              <label htmlFor="email" className="block font-bold mb-2">
                Email:
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-2 mb-5 border border-gray-300 rounded-md"
              />

              <label htmlFor="message" className="block font-bold mb-2">
                Custom Message:
              </label>
              <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  className="w-full p-2 mb-5 border border-gray-300 rounded-md resize-vertical"
              ></textarea>

              <button
                  type="submit"
                  className="w-full p-3 bg-blue-900 text-white rounded-md text-lg hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>


        </div>

        <div >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.7015281408567!2d-122.33766577279968!3d37.53553371784878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e35dc190833%3A0x1e0f19fa02fdcfa3!2sCollege%20Center!5e0!3m2!1sen!2sus!4v1745616685165!5m2!1sen!2sus"
              width="100%"
              height="auto"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  );
};

export default Contact;