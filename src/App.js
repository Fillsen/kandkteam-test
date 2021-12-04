import { Routes, Route } from 'react-router-dom';
import { MainPage, SignInPage, NotfoundPage, SignUpPage } from 'pages';
import { AppLayout } from 'layout';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="signin" element={<SignInPage/>}/>
                    <Route path="signup" element={<SignUpPage/>}/>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};