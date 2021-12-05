import { Header } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderContainer = () => {
    const [isToken, setToken] = useState();
    const navigate = useNavigate();
    const userName = localStorage.getItem('username');

    const handleDelToken = () => {
        localStorage.removeItem('isToken');
        localStorage.removeItem('username');
        navigate('/');
    };
    const setActiveClassName = ({isActive}) => {
        return isActive ? 'header__logo__active' : 'header__logo';
    };

    useEffect(() => {
        setToken(localStorage.getItem('isToken'));
    }, []);

    return (
        <Header
            setActiveClassName={setActiveClassName}
            handleDelToken={handleDelToken}
            userName={userName}
        />
    );
};