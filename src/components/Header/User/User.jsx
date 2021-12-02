import styles from '../Header.module.scss';
import icon from 'assets/resource/avatar.svg';

export const User = (
    {
        className,
        avatar = icon,
        username = 'Username'
    }
) => {
    return (
        <div className={className}>
            <img src={avatar} className={styles.profile__avatar} alt="ava"/>
            <div className={styles.profile__name}>{username}</div>
        </div>
    );
};