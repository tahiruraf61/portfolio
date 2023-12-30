import { useState } from "react";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');




    function handleSubmit (e) {
        e.preventDefault();

       //form submission
        console.log('First name:', firstName)
        console.log('Last name:', lastName)
        console.log('Email:', email);
        console.log('Message:', message);

        //clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");

    }
    return(
        <>
        <div className="global-container">
        <div className="form-container">
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
               type="text"
               name="firstName"
               id="firstName"
               value={firstName}
               onChange={e => setFirstName(e.target.value)}
               required
               className="formInput"
                  placeholder="First name"
               />

            <label htmlFor="lastName">Last name</label>
            <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                  className="formInput"
                  placeholder="Last name"
            />

            <label htmlFor="email">Email</label>
            <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="formInput"
                  placeholder="Email"
                  />
        <label htmlFor="message">Message</label><br/>
        <textarea
        name="message"
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        maxLength={500}
        className="inputText"
        placeholder="Your message here"
        />

        <button type="submit" className="btn">Submit</button>

        </form>
        </div>
        </div>


        </>
    )
}
export default Contact;