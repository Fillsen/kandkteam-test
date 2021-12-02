import styles from '../Header.module.scss';

export const User = (
    {
        className,
        avatar = 'Avatar',
        username = 'Username'
    }
) => {
    return (
        <div className={className}>
            <div className={styles.profile__avatar}>{avatar}</div>
            <div className={styles.profile__name}>{username}</div>
        </div>
    );
};