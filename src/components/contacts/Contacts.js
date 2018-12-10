import React, { Component } from 'react'
import {connect} from 'react-redux'
import ContactItem from './ContactItem';
import { REMOVE_CONTACT } from '../../store/action/actionTypes';

const Contacts = ({contacts, remove})=>{
    return (
        <ul className="list-group">
            {contacts.map(contact=> <ContactItem contact={contact} remove={remove} key={contact.id} />)}
        </ul>
    )
}

const mapStateToProps = state =>({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    remove: (id)=> dispatch({type: REMOVE_CONTACT, payload:id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)

