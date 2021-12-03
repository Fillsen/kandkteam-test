import './Header.scss';
import icon from 'assets/resource/avatar.svg';
import { Button, Switch } from 'ui';

export const Header = (
    {
        avatar = icon,
        username = 'Username',
    }
) => {
    return (
        <header className="header">
            <div className="header__switch">
                <Switch/>
            </div>
            <div className="header__profile profile">
                <img className="profile__avatar" src={avatar} alt=""/>
                <div className="profile__name">{username}</div>
            </div>
            <div className="header__action">
                <Button variant="primary">Sign In</Button>
            </div>
        </header>
    );
};