import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import './LoginForm.styles.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formValue,setFormValue] =useState({
        email:'',
        password:''
    });
    const [isAuthValid,setIsAuthValid] = useState({
        isLogin:false,
        authError:""
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isAuthValid.isLogin) {
            navigate('/home');
        }
    })

    const handleChange = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value});
    }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        const passwordRegex = /^[a-zA-Z0-9]+$/i;

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
        let auth=JSON.parse(localStorage.getItem('formValue'));
        if(auth.email===formValue.email && auth.password===formValue.password){
        setIsAuthValid({...isAuthValid,isLogin:true});
        }
        else if(auth.email!==formValue.email && auth.password!==formValue.password){
            setIsAuthValid({...isAuthValid,authError:'Invalid email or password!'});
        } 
        console.log(isAuthValid);    
    };

return (
        <form className='form' onSubmit={handleSubmit}>
            <h1> Login </h1>
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
           <button className='login-btn'>Submit</button>
           { Object.keys(formErrors).length === 0 && isAuthValid.authError!=='' &&
               <p> {isAuthValid.authError}</p>}
            <div className='signup-link-container'>
                <span>New to My Movies?</span>
                <span className="signup-link" onClick={()=>navigate('/signup')}>Sign up now</span>
            </div>
        </form>
)
}

export default LoginForm;
