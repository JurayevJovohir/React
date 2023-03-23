import React, { useRef, useState } from 'react'

const ContactForm = ({contacts, setContacts}) => {

    const elName = useRef();
    const elRelationship = useRef();
    const elPhone = useRef();

    const submitHandler = (evt) => {
        evt.preventDefault();

        const newContact = {
            name: elName.current.value,
            relationship: elRelationship.current.value,
            phone: elPhone.current.value,
        };
        setContacts([...contacts, newContact]);  
        
        elName.current.value = '';
        elRelationship.current.value = '';
        elPhone.current.value = '';
    };
    return (
        <form onSubmit={submitHandler} className="js-form">
            <label className="d-block">
                <input className="js-input form-control"
                    type="text"
                    placeholder="Name"
                    ref={elName}
                    required />
            </label>
            <label className="d-block">
                <input className="js-input-two form-control"
                    type="text"
                    placeholder="Relationship"
                    ref={elRelationship}
                    required />
            </label>
            <label className="d-block">
                <input className="js-input-contact form-control"
                    type="tel"
                    placeholder="Phone"
                    ref={elPhone}
                    required />
            </label>
            <button className="js-btn btn btn-primary col-12">Add contact</button>
        </form>)
}
export default ContactForm