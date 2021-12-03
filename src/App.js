import 'App.scss';
import 'ui/Switch/Switch.scss';
import { ContentContainer, FooterContainer, HeaderContainer } from 'containers';

export const App = () => {

    return (
        <div className="wrapper">
            <HeaderContainer/>
            <ContentContainer/>
            <FooterContainer/>
        </div>
    );
};