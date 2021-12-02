import styles from './Header.module.scss';
import { Button, Switch } from 'ui';
import { User } from './User';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Switch className={styles.switch}/>
            <User className={styles.profile}/>
            <Button>Профиль</Button>
        </header>
    );
};