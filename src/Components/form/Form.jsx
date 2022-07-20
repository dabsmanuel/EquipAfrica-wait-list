import React, {useRef} from "react";
import './Form.css'
import logo from './../../Assets/home1logo.png'
import emailjs from 'emailjs-com'

const Form = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0s7kcjm",
      "template_htpib84",
      form.current,
      "jymc7E4wWndMBhd6b"
    );

    e.target.reset();
  }
  return (
    <section>
      <div className="container form-div">
        <div className="image-container">
          <a href="https://equip-africa.vercel.app" target='_blanc'>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="text-area">
          <h1>Do You Want To Be An Equipper?</h1>
          <h3>Join Our Wait List</h3>
        </div>

        <form ref={form} onSubmit = {sendEmail}>
          <input
            type="text"
            name="First name"
            placeholder="Your First Name"
            required
          />
          <input
            type="text"
            name="Last name"
            placeholder="Your Last Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="phone number"
            name="phone number"
            placeholder="Your Phone Number"
            required
          />
          <textarea
            name="Message"
            rows="7"
            placeholder="Tell us About Yourself"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
