import { MainPage, AuthPage, NotfoundPage } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from 'layout';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="signin" element={<AuthPage/>}/>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};