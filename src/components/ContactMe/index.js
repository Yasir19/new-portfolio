import React, { useState } from "react";
import { validateEmail } from '../../utlis/helpers';
import './style.css'

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
    console.log('errorMessage', errorMessage);
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
  return (
    <div className="card-container">
        <div className="card">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea
            cols="50"
            name="message"
            rows="20"
            defaultValue={message}
            onBlur={handleChange}
          />
          {errorMessage && (
              <div>
                  <p className="error-text">{errorMessage}</p>
                  </div>
          )}
        </div>
        <button data-testid="btag" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};
export default ContactForm;
