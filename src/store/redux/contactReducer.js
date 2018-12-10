import {ADD_CONTACT, REMOVE_CONTACT } from '../action/actionTypes'
const initState = [
    {
        name: 'Mohiuddin',
        email: 'mohiu@example.com',
        phone: '01719969283',
        id:1
    },
    {
        name: 'rashed',
        email: 'mohiu@example.com',
        phone: '01719969283',
        id:2
    },
    {
        name: 'roman',
        email: 'mohiu@example.com',
        phone: '01719969283',
        id:3
    },
    {
        name: 'kawsar',
        email: 'mohiu@example.com',
        phone: '01719969283',
        id:4
    },
    {
        name: 'hasan',
        email: 'mohiu@example.com',
        phone: '01719969283',
        id:5
    }
]

const contactReducer = (state=initState, action)=>{
    switch(action.type) {

        case ADD_CONTACT: {
            const contacts = state.concat(action.payload)
            return contacts
        }
        case REMOVE_CONTACT:{
            const contacts = state.filter(c => c.id !== action.payload)
            return contacts

        }
        default: return state
    }
}
export default contactReducer