import React from 'react';

//! comps
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//! firebase
import firebase from '../../firebase/firebase.utils';

const SignIn = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    const handleSubmit = (e) => {
        console.log('SignIn -> submit');
        e.preventDefault();
        //! Logined
        resetForm();
    };

    return (
        <div className="sign-in">
            <div className="center">
                <div className="title">
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                </div>
                <form className='sign-in-form' onSubmit={handleSubmit}>
                    <FormInput name="email" type="email" label="email" onChange={handleChange} value={email} required />
                    <FormInput name="password" type="password" label="password" onChange={handleChange} value={password} required />
                    <div className="pass">Forgot Password?</div>

                    <div className="buttons">
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={firebase.signInWithGoogle} isGoogleSignIn>Signin Google</CustomButton>
                    </div>

                    <div className="signup_link">
                        Not a member?
                        <a href="#/">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
