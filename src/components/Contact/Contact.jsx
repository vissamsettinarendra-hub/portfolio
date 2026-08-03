import "./Contact.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_gmail",
        "template_tcnvwf7",
        form.current,
        "v6S97TohWODWjXWgD"
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        alert(error.text || error.message || "❌ Failed to send message.");

        setLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            11 — Contact
          </span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project, internship opportunity, or collaboration in mind?
            Feel free to contact me.
          </p>

        </div>

        <div className="contact-wrapper">

          {/* LEFT */}

          <div className="contact-info">

            <div className="contact-item">

              <FaEnvelope className="contact-icon" />

              <div>

                <h4>Email</h4>

                <a href="mailto:vissamsettinarendra@gmail.com">
                  vissamsettinarendra@gmail.com
                </a>

              </div>

            </div>

            <div className="contact-item">

              <FaPhone className="contact-icon" />

              <div>

                <h4>Phone</h4>

                <a href="tel:+919391565186">
                  +91 9391565186
                </a>

              </div>

            </div>

            <div className="contact-item">

              <FaMapMarkerAlt className="contact-icon" />

              <div>

                <h4>Location</h4>

                <p>Andhra Pradesh, India</p>

              </div>

            </div>

            <div className="social-links">

              <a
                href="https://www.linkedin.com/in/visssamsettinarendra"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/vissamsettinarendra-hub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

            <p className="contact-note">
              Available for internships, freelance work,
              and full-time opportunities.
            </p>

          </div>

          {/* RIGHT */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;