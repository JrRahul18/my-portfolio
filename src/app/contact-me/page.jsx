"use client";
import React, { useRef, useState } from "react";
import styles from "./contactMe.module.css";

const Contact = () => {
  const initialInputValue = {
    user_name: "",
    user_email: "",
    user_message: "",
  };
  const formRef = useRef();
  const [formState, setFormState] = useState(initialInputValue);
  const [formErrors, setFormErrors] = useState({});

  const inputChangeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    // console.log(formState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let getFormErrors = formValidation();
    setFormErrors(getFormErrors);
    // console.log("Form Errors: ", getFormErrors);
    // console.log("Form State: ", formState);
    // console.log("FOrmRef.current: ", formRef.current);
    if (Object.keys(getFormErrors).length === 0) {
      const mailBody = `<h2>Message Recieved from ${formState.user_email}</h2>
                        <br>
                        <h3>Name: </h3> <p>${formState.user_name}</p>
                        <h3>Email: </h3> <p>${formState.user_email}</p>
                        <h3>Message: </h3>  <p>${formState.user_message}</p>
                        <br>
                        Have a good day!`;

      const mailTemplate = {
        SecureToken: process.env.NEXT_PUBLIC_SECURE_TOKEN,
        To: "rahuljeena16@gmail.com",
        From:"rahuljeenaworkspace@gmail.com",
        Subject: `New message from ${formState.user_email}`,
        Body: mailBody,
      };

      if (window.Email) {
        window.Email.send(mailTemplate)
          .then((message) => alert(message))
          .then(setFormState(initialInputValue));
      } else {
        alert("Unable to Send");
      }
    }
  };

  const formValidation = () => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formState.user_name.trim() === "") {
      errors.user_name = "Username is Required! ";
    }
    if (formState.user_email.trim() === "") {
      errors.user_email = "Email is Required! ";
    }
    if (!regex.test(formState.user_email)) {
      errors.user_email = "Invalid Email Format! ";
    }
    if (formState.user_message.trim() === "") {
      errors.user_message = "Message is Required! ";
    }
    return errors;
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Contact Me</h1>
      </div>
      <div className={styles.contactContainer}>
        <form
          ref={formRef}
          action=""
          className={styles.formBox}
          onSubmit={formSubmitHandler}
        >
          <div className={styles.nameBox}>
            <label htmlFor="" className={styles.nameLabel}>
              Name
            </label>
            <input
              name="user_name"
              value={formState.user_name}
              onChange={inputChangeHandler}
              className={styles.nameInput}
              type="text"
              placeholder="Enter Your Name"
            />
            <div className={styles.errorBox}>
              <p>{formErrors.user_name}</p>
            </div>
          </div>
          <div className={styles.emailBox}>
            <label htmlFor="" className={styles.emailLabel}>
              Email
            </label>
            <input
              name="user_email"
              value={formState.user_email}
              onChange={inputChangeHandler}
              className={styles.emailInput}
              type="email"
              placeholder="Enter Your Email"
            />
            <div className={styles.errorBox}>
              <p>{formErrors.user_email}</p>
            </div>
          </div>
          <div className={styles.messageBox}>
            <label htmlFor="" className={styles.messageLabel}>
              Your Message
            </label>
            <textarea
              name="user_message"
              value={formState.user_message}
              onChange={inputChangeHandler}
              className={styles.messageInput}
              placeholder="Enter Your Message"
              id=""
              rows="6"
            ></textarea>
            <div className={styles.errorBox}>
              <p>{formErrors.user_message}</p>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.myBtn}> Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
