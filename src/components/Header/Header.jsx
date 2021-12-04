import './Header.scss';
import icon from 'assets/resource/avatar.svg';
import { Button } from 'ui';
import { NavLink, Link } from 'react-router-dom';

export const Header = (
    {
        avatar = icon,
        username = 'Username'
    }
) => {
    const setActiveClassName = ({isActive}) => isActive ? 'header__logo__active' : 'header__logo';
    return (
        <header className="header">
            <NavLink to="/" className={setActiveClassName}>
                Simple App
            </NavLink>
            <div className="header__profile profile">
                <img className="profile__avatar" src={avatar} alt=""/>
                <div className="profile__name">{username}</div>
            </div>
            <Link className="header__action" to="signin">
                <Button variant="primary">Sign In</Button>
            </Link>
        </header>
    );
};