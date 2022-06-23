import React from "react";
import './FormInput.styles.css';


const FormInput = (props) =>{
    const {label,onChange,errorMessage,...inputProps} = props;
    return(
        <div className="form-input">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;