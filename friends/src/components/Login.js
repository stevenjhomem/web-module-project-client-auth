import React, {useState} from "react";


const Login = ()=>{


    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.targt.value,
        })
    }

    return (
        <div className='form-container'>
            <form className='nice-form'>
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