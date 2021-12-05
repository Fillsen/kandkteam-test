import { SignIn } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SignInContainer = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = () => {
        if (localStorage.getItem('isToken') === 'true') {
            console.log('Alrdy!');
        } else {
            localStorage.setItem('isToken', JSON.stringify(true));
            localStorage.setItem('username', userName);
            console.log(`Your password: ${userPassword}`);
            navigate(fromPage || '/');
        }
    };

    return (
        <SignIn
            setUserName={setUserName}
            setUserPassword={setUserPassword}
            handleSubmit={handleSubmit}
            fromPage={fromPage}
        />
    );
};