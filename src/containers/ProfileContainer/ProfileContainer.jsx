import { Profile } from 'components';
import { useLocation, Navigate } from 'react-router-dom';

export const ProfileContainer = () => {
    const location = useLocation();
    const auth = false;
    if (!auth) {
        return <Navigate to="login" state={{from: location}}/>;
    }
    return (
        <Profile auth={auth} location={location}/>
    );
};