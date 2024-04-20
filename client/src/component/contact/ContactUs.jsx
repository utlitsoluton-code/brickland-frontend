import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send-email", {
        name,
        email,
        city,
        mobile,
        message,
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setCity("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact-us-container">
        <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required="true"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            name="IN"
            required="true"
            title="Enter a valid number"
            pattern="[1-9]{1}[0-9]{9}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="investors-clinic-info md:w-1/2 md:mr-10">
          <h2>BRICKLAND CONSULTING AT A GLANCE</h2>
          <p>
            Brickland Consulting, A Certified Real Estate Company is a Paramount
            in the real estate realm with an Experience of 10+ years. Brickland
            Consulting has managed to Build Stronger Connections in the
            Industry.
          </p>
          <p>
            We specialise in proffering Proficient Consultation Services
            Professionally & Independently to Investors World widely.
          </p>
          <p>
            Brickland Consulting is committed to offer Advanced and New-Fangled
            approach with Technical Strategies to help out Our Customers with
            Satisfactory Investments. Today Investors Clinic stands tall with
            1.5 Lacs Customers and 100+ Leading Developers with whom we have
            reached Bigger Milestones of Success.
          </p>
        </div>
        <div
          className="relative md:w-1/2 mt-5 md:mt-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <a
              href="https://maps.app.goo.gl/s7FzrkiF3j2kmGa1A"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg md:text-xl"
            >
              Open Map
            </a>
          )}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/map.png?alt=media&token=abf06135-c351-4249-a8a2-564f01749d07"
            alt="Map Image"
            className="w-full h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
