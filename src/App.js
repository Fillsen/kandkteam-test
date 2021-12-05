import { Routes, Navigate, Route } from 'react-router-dom';
import { MainPage, SignInPage, SignUpPage, ProfilePage } from 'pages';
import { RequireAuthHoc } from 'hoc';
import { AppLayout } from 'layout';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="signin" element={<SignInPage/>}/>
                <Route path="signup" element={<SignUpPage/>}/>
                <Route path="profile" element={
                    <RequireAuthHoc>
                        <ProfilePage/>
                    </RequireAuthHoc>
                }/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Route>
        </Routes>
    );
};