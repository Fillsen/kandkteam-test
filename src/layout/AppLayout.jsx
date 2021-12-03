import '../App.scss';
import { Outlet } from 'react-router-dom';
import { FooterContainer, HeaderContainer } from 'containers';

export const AppLayout = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Outlet/>
            <FooterContainer/>
        </div>
    );
};