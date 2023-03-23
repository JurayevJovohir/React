import React from 'react'

const ContactCard = ({ contact, contacts, setContacts }) => {

    const deleteHandler = () => {
        console.log(contact.id);

        const result = contacts.filter((element) => {
            if (element.id !== contact.id) {
                return true;
            };
        });
        setContacts(result);
    };

    return (
        <div className="card p-3 d-flex">
            <div className=''>
                <h3 className="card-title">{contact.name}</h3>
                <p className="card-text">{contact.relationship}</p>
                <a className="card-tel" href="tel:+998902483105">{contact.phone}</a>
            </div>
            <div className='d-inline-block ms-auto p-1'>
                <button className='btn btn-info'>Edit</button>
                <button className='btn btn-danger ms-2' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard