import "./Contact.css";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function Contact() {
  const fromRef = useRef();
  const [done, setDone] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ro687uh",
        "template_6v5f8j5",
        fromRef.current,
        "user_oIczsNvZVcbLkMIidkqP6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            <div className="contact-info-text">
              <img src={Email} alt="email" className="contact-icon" />
              Shareq1996@gmail.com
            </div>
            <div className="contact-info-text">
              <img src={Address} alt="address" className="contact-icon" />
              23 Dr Sudhir Bose Road, Kolkata 23
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contactme">Get in touch.</p>
          <form ref={fromRef} onSubmit={handelSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Sumbit</button>
            {done && " Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
}
