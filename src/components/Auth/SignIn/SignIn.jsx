import '../Auth.scss';
import { Button } from 'ui';
import { Link } from 'react-router-dom';

export const SignIn = (
    {
        handleSubmit,
        setUserName,
        setUserPassword,
        fromPage
    }
) => {

    return (
        <div className="container" onSubmit={handleSubmit}>
            <form className="form">
                <h2 className="form__title">Sign In</h2>
                <input
                    type="text"
                    className="form__input"
                    name="username"
                    placeholder="Username"
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    className="form__input"
                    name="password"
                    placeholder="Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
                <div className="form__text">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            value="remember-me"
                            id="rememberMe"
                            name="rememberMe"
                        />Remember me
                    </label>
                    <span>Need account? <Link to="/signup">Sign Up</Link></span>
                </div>
                <div className="form__actions">
                    <Button variant="primary" type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
};