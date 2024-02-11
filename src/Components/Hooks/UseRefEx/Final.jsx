import React, { useRef } from 'react';

const MyForm = () => {
    console.log("MyForm rendered");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };
    // Do something with formData, for example, send it to an API
    console.log(formData);
    // Clear form after submission
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" ref={firstNameRef} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" ref={lastNameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Message:
        <textarea ref={messageRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
