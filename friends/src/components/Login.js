import React, {useState} from "react";
import axiosWithAuth from "../tools/axiosWithAuth";
import {useHistory} from 'react-router-dom';


const Login = ()=>{


    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const {push} = useHistory();

    const handleChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axiosWithAuth().post('/login', credentials)
                       .then(res=>{
                           localStorage.setItem('token', res.data.payload);
                           push('/protected');
                       })
                       .catch(err=>{
                           console.log(err.response)
                       })
    }



    return (
        <div className='form-container'>
            <form className='nice-form'
                  onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text'
                           name='username'
                           value={credentials.username}
                           onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Password:
                    <input type='text'
                           name='password'
                           value={credentials.password}
                           onChange={handleChange}>
                    </input>
                </label>
                <button type='submit'
                        className='cute-button'>Log-in</button>
            </form>
        </div>
    )
}

export default Login;