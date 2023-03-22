import React, { useState } from 'react'

const ContactForm = ({contacts, setContacts}) => {

    const [name, setName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [phone, setPhone] = useState('');

    const submitHandler = (evt) => {
        evt.preventDefault();

        const newContact = {
            name,
            relationship,
            phone
        };
        setContacts([...contacts, newContact]);   
    };
    return (
        <form onSubmit={submitHandler} className="js-form">
            <label className="d-block">
                <input className="js-input form-control"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    required />
            </label>
            <label className="d-block">
                <input className="js-input-two form-control"
                    type="text"
                    placeholder="Relationship"
                    value={relationship}
                    onChange={(evt) => setRelationship(evt.target.value)}
                    required />
            </label>
            <label className="d-block">
                <input className="js-input-contact form-control"
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(evt) => setPhone(evt.target.value)}
                    required />
            </label>
            <button className="js-btn btn btn-primary col-12">Add contact</button>
        </form>)
}
export default ContactForm