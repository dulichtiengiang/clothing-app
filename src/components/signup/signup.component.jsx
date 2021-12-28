import React from 'react';
//! firebase
import firebase from '../../firebase/firebase.utils';
//! comps
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
    const [formData, setFormData] = React.useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormData({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SignUp -> submit');
        if (formData.password !== formData.confirmPassword) {
            alert('Password dont match');
            return;
        }
        //! Register
        try {
            const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password);
            console.log(`user: `, user); //dbg
            //! args: (user, dataObject)
            const userRef = await firebase.createUserProfileDocument(user, { displayName });

            if (userRef) {
                resetForm();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="sign-up">
            <div className="title">
                <h2>I dont not have a account</h2>
                <span>Sign up with your email and password</span>
            </div>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" label="Display Name" onChange={handleChange} value={displayName} required />
                <FormInput name="email" type="email" label="email" onChange={handleChange} value={email} required />
                <FormInput name="password" type="password" label="password" onChange={handleChange} value={password} required />
                <FormInput name="confirmPassword" type="password" label="Confirm Password" onChange={handleChange} value={confirmPassword} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
