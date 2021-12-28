import React from 'react';

//comps
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SigninSignupPage = () => {

    return (
        <div className="signin-signup-page">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SigninSignupPage;