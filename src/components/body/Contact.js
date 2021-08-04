import React, {useState} from 'react';
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";
import Warning from "../../assets/icons/warning.png";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Please enter a valid email');
      } else {
        setErrorMessage('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="page-div">
      <h2>Contact Me</h2>
      <form className="contact-form page-body" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="contact-el">Name:</label><br />
          <input type="text" name="name" className="contact-el" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label><br />
          <input type="email" name="email" className="contact-el" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message" className="contact-el">Message:</label><br />
          <textarea name="message" className="contact-el" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text contact-el">
              <img src={Warning} alt="Exclamation point" className="warning-icon"/>
              {errorMessage}</p>
          </div>
        )}
        <button type="submit" className="submit-contact contact-el">Submit</button>
      </form>
      <div className="my-info-div">
        <h3 className="my-info-h3">Get in Touch:</h3>
        <p className="my-info-p">Sara.M.Adamski@gmail.com</p>
        <p className="my-info-p">715-302-4913</p>
      </div>
    </div>
  );
}

export default Contact;