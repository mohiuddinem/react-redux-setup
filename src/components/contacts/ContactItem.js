import React, { Component } from 'react'

const contactItem = ({contact, remove}) => {
    return (
        <li className="list-group-item d-flex">
            <div>
                {contact.name} <span>{contact.phone}</span>
            </div>
            <div className="ml-auto">
                <button 
                    className="btn btn-danger"
                    onClick={()=> remove(contact.id)}
                    > Delete</button>
            </div>

        </li>
    )
}

export default contactItem
