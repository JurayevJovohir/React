import React from 'react'

const ContactCard = ({contact}) => {
    return (
        <div  className="card p-3">
            <h3 className="card-title">{contact.name}</h3>
            <p className="card-text">{contact.relationship}</p>
            <a className="card-tel" href="tel:+998902483105">{contact.phone}</a>
        </div>
    )
}

export default ContactCard