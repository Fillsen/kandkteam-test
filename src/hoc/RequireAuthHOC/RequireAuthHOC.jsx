import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuthHoc = ({children}) => {
    const location = useLocation();
    const auth = localStorage.getItem('username')?.length > 0;

    if (!auth) {
        return <Navigate to="/signin" state={{from: location}}/>;
    }

    return children;
};