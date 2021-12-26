import React from 'react';

const FormInput = ({ label, type, handleChange, ...otherProps }) => {
    return (
        <div className="form-input">
            <input type={`${type}` || 'text'} className="form-input__input" onChange={handleChange} {...otherProps} />
            <span></span>
            {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input__label`}>{label}</label> : null}
        </div>  
    );
};

export default FormInput;
