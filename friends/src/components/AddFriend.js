import React, {useState} from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../tools/axiosWithAuth';

const AddFriend = () => {

    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        age:"",
        email: "",
    })

    const {push}=useHistory();

    const add = (event) => {
        event.preventDefault();

        setFormValues({
            ...formValues,
            id: Math.floor(Math.random()*1000000)
        });

        axiosWithAuth().post('/friends', formValues)
                       .then(res =>{
                           push('/protected')
                       })
                       .catch(err=>{
                           console.log(err.response)
                       });
    }

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className='add_page'>
            <form className='nice_form'
                  onSubmit={add}>
                <label>Name:
                    <input type='text'
                           name='name'
                           value={formValues.name}
                           onChange={handleChange}>
                    </input>
                </label>
                <label>Age:
                    <input type='text'
                           name='age'
                           value={formValues.age}
                           onChange={handleChange}>
                    </input>
                </label>
                <label>Email:
                    <input type='text'
                           name='email'
                           value={formValues.email}
                           onChange={handleChange}>
                    </input>
                </label>
                <button type='submit'>
                    Submit!
                </button>
            </form>
        </div>
    )


};

export default AddFriend;