import React, { useContext, useState } from 'react';
import './SingUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SingUp = () => {
const [error, setError] = useState('');
const {createUser}= useContext(AuthContext);


const handleSubmit = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    

    console.log(email, password, confirm)

     setError('')
    if(password !== confirm){
        setError('your password did not match')
        return

       
    }
    else if(password.length < 6){
        setError('password must be 6 characters or longer')
        return
    }

    createUser(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
    })
    .catch(error => {
        console.log(error)
        setError(error.message);
    })
}


    return (
        <div className="form-container">
        <h2 className="form-title">SingUp</h2>
        <form onSubmit={handleSubmit}> 
            <div className="form-control">
             <label htmlFor="">Email</label>
             <input type="email" name="email" id="" required/>

            </div>
            <div className="form-control">
             <label htmlFor="">Password</label>
             <input type="password" name="password" id="" required/>
            </div>
            <div className="form-control">
             <label htmlFor="">Confirm</label>
             <input type="password" name="confirm" id="" required/>
            </div>
            <input className='btn-submit' type="submit" value="Login" />
            </  form>
            <p> <small>Allready have an account <Link to="/login" >Login</Link> </small> </p>
            <p className='text-error' >{error}</p>
    </div>

    );
};

export default SingUp;