import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

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
        <div className="global-container" style={{backgroundColor:'#f8e60c'}}>
        <div className="form-container">
        <h1 style={{textAlign: 'center', fontSize: '45px',display: 'flex' ,justifyContent: 'center', alignItems: 'center' }}>Get in touch<br/> with us.</h1>
        <form method="post" onSubmit={handleSubmit} style={{backgroundColor: '#ffffff'}}>
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
        <div style={{marginLeft: '80px', marginTop: '30px', padding: '30px'}}>
            <h1>HAVE A QUESTION?<br/> CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ut elit tellus,
            luctus nec ullamcorper mattis,<br/>
            pulvinar dapibus leo</p>

            <h2 style={{marginTop: '80px'}}>Send us<br/> an email</h2>
            <div className="bg-icon2">
            <MdOutlineMailOutline  className="icon2"/>
             </div>
           <h4>mypodcast@gmail.com</h4>
           <h4>podcast@mail.com</h4>

           <div className="bg-icon2">
           <FaPhoneAlt className="icon2" />
           </div>
           <div>
           <h2>Call us</h2>
           <h4>+233-444-222</h4>
           <h4>+233-555-777</h4>
           </div>
        </div>
        </div>
        </div>


        </>
    )
}
export default Contact;