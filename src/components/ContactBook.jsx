import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactBook = () => {
    const [contacts, setContacts] = useState([]);

    return (
        <div className="container">
            <div className="tittle-div">
                <h1 className="tittle">Contact Book</h1>
            </div>
            <div className="contact-box row justify-content-center">
                <div className="form-div col-5">
                    <h2 className="form-title">New contact form</h2>
                    <ContactForm contacts={contacts} setContacts={setContacts}/>
                </div>
                <div className="div-list col-5">
                    <h2 className="form-title">Contacts</h2>
                    {contacts.map((contact, index) => (
                        <ContactCard 
                        key={index} 
                        contact={contact}
                        contacts={contacts}
                        setContacts={setContacts} />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ContactBook;