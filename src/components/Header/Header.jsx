import './Header.scss';
import icon from 'assets/resource/avatar.svg';
import { Button } from 'ui';
import { NavLink, Link } from 'react-router-dom';

export const Header = (
    {
        avatar = icon,
        userName,
        setActiveClassName,
        handleDelToken
    }
) => {
    return (
        <header className="header">

            <NavLink to="/" className={setActiveClassName}>
                Simple App
            </NavLink>

            <div className="header__profile profile">
                {!userName ? null : (
                    <Link to="profile" className="header__profile profile">
                        <img className="profile__avatar" src={avatar} alt=""/>
                        <div className="profile__name">{userName}</div>
                    </Link>
                )}
            </div>
            <div className="header__action">
                {userName ? (
                    <Link to="/">
                        <Button
                            variant="secondary"
                            onClick={handleDelToken}
                        >
                            Exit
                        </Button>
                    </Link>
                ) : (
                    <Link className="header__action" to="signin">
                        <Button variant="primary">Sign In</Button>
                    </Link>
                )}
            </div>
        </header>
    );
};