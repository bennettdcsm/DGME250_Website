import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-top-information">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about a specific program, reach out to the
          emails below.
        </p>
      </div>

      <div className="contact-main-boxes">
        <div className="contact-box">
          <img
            src="images/verafainshtein.png"
            alt="Professor Vera Fainshtein"
          />
          <div className="contact-box-text">
            <p className="contact-name">Vera Fainshtein</p>
            <p>Graphic Design</p>
            <p>(650) 574-6283</p>
            <a href="mailto:fainshteinv@smccd.edu">fainshteinv@smccd.edu</a>
          </div>
        </div>

        <div className="contact-box">
          <img
            src="images/michellebrown.png"
            alt="Professor Michelle M. Brown"
          />
          <div className="contact-box-text">
            <p className="contact-name">Michelle M. Brown</p>
            <p>Broadcast & Electronic Media</p>
            <p>(650) 574-6934</p>
            <a href="mailto:brownm@smccd.edu">brownm@smccd.edu</a>
          </div>
        </div>

        <div className="contact-box">
          <img
            src="images/dianabennett.png"
            alt="Professor Diana Bennett"
          />
          <div className="contact-box-text">
            <p className="contact-name">Diana Bennett</p>
            <p>UI/UX & Web Design</p>
            <p>(650) 359-6769</p>
            <a href="mailto:bennettd@smccd.edu">bennettd@smccd.edu</a>
          </div>
        </div>
      </div>

      <div className="contact-main-form">
        <div className="contact-form">
          <h3>Have a question?</h3>
          <p>
            We are here to help! Fill up our form to reach out to us via email
            or phone.
          </p>

          <form action="mailto:csmcass@smccd.edu" method="post">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your number"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Custom Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.7015281408567!2d-122.33766577279968!3d37.53553371784878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e35dc190833%3A0x1e0f19fa02fdcfa3!2sCollege%20Center!5e0!3m2!1sen!2sus!4v1745616685165!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;