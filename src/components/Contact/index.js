import React, { useState }  from "react";

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;
    return(
    <section>
      <h1>Contact me</h1>      
      <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" defaultValue={formState.name} name="name" onChange={handleChange}  />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" defaultValue={formState.email} name="email" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue={formState.message} rows="5" onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
    </section>)
    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
        console.log(formState);
      }
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }    

    
}

export default ContactForm;