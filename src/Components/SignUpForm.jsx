import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import './SignUpForm.styles.css';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formValue,setFormValue] =useState({
        name:'',
        email:'',
        password:''
    });
    const [isSubmit,setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate('/');
        }
    })

    const handleChange = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value});
    }

    const validate = (values) => {
        const errors = {};
        const nameRegex=/^[a-zA-Z]+$/i;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        const passwordRegex = /^[a-zA-Z0-9]+$/i;
        const passwordValue = Array.from(formValue.password);
        let passwordSum = 0;
        passwordSum= parseInt(passwordSum);
        passwordValue.forEach((element) => passwordSum+=+element);

        if(!values.name) {
            errors.name = 'Name is required!';
        } else if (!nameRegex.test(values.name)) {
            errors.name = 'PLease enter a valid Name!';
        }

        if(!values.email) {
            errors.email = 'Email is required!';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'This is not a valid email format';
        }

        if(!values.password) {
            errors.password = 'Password is required!';
        }else if (!passwordRegex.test(values.password)) {
            errors.password = 'Password must be alpha-numeric!';
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        localStorage.setItem('formValue',JSON.stringify(formValue));
        console.log('signup',formValue);
        setIsSubmit(true);
    };

    return(
        <form className='form' onSubmit={handleSubmit}>
            <h1> Sign Up </h1>
            <FormInput 
           name='name' 
           label='Name' 
           type='text' 
           placeholder='Name' 
           value={formValue.name} 
           onChange={handleChange}
           errorMessage = {formErrors.name}
           />
           <FormInput 
           name='email' 
           label='Email' 
           type='text' 
           placeholder='Email' 
           value={formValue.email} 
           onChange={handleChange}
           errorMessage = {formErrors.email}
           />
           <FormInput 
           name='password' 
           type='password' 
           label='Password' 
           placeholder='Password' 
           value={formValue.password} 
           onChange={handleChange}
           errorMessage = {formErrors.password} 
           />
           
           <button className='signup-btn'>Register</button>
           <div className="login-link-container">
            <span>Already Registered?</span>
            <span className="login-link" onClick={()=>navigate('/')}>Login now</span>
           </div>
        </form>
    )
}

export default SignUpForm;