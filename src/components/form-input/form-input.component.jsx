import React from 'react';

const FormInput = ({ label, type, handleChange, ...otherProps }) => {
    return (
        <div className={`form-input ${otherProps.value.length ? 'active' : ""}`}>
            <input type={`${type}` || 'text'} className="form-input__input" onChange={handleChange} {...otherProps} />
            <span className='form-input__underline'></span>
            <label className='form-input__label'>{label}</label>
        </div>
    );
};

export default FormInput;
