import styles from './App.module.scss';
import { ContentContainer, FooterContainer, HeaderContainer } from 'containers';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderContainer/>
            <ContentContainer/>
            <FooterContainer/>
        </div>
    );
};