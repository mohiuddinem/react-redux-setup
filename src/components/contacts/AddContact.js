import React from 'react'
import { connect } from 'react-redux'
import { ADD_CONTACT } from '../../store/action/actionTypes';
const initState = {
    name: '',
    email: '',
    phone: '',
    id: ''
}
class AddContact extends React.Component {
    state = initState
    changeHandler = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        
    } 
    submitHandler = event =>{
        event.preventDefault()
        let id = parseInt(this.state.id)
        this.props.add(this.state)
        this.setState({
            ...initState,
            id
        })
    }
    
    render(){
        let {name, email, phone, id} = this.state

        return(
            <form onSubmit={this.submitHandler}>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="enter your id" 
                    value={id}
                    name='id'
                    onChange={this.changeHandler}
                />
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="enter your name" 
                    value={name}
                    name='name'
                    onChange={this.changeHandler}
                />
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="enter your phonr" 
                    value={phone}
                    name='phone'
                    onChange={this.changeHandler}
                />
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="enter your email" 
                    value={email}
                    name='email'
                    onChange={this.changeHandler}
                />
                <button type="submit" className="btn btn-primary">Add Element</button>
            </form>

        )
        }
}
const mapDispatchToProps = dispatch => ({
    add: contact => dispatch({type: ADD_CONTACT, payload: contact})
})

export default connect(null, mapDispatchToProps)(AddContact)