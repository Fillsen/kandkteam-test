import '../Auth.scss';
import { Button } from 'ui';

export const SignUp = () => {
    return (
        <div className="container">
            <form className="form">
                <h2 className="form__title">Registration form</h2>
                <input
                    type="text"
                    className="form__input"
                    name="username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    className="form__input"
                    name="password"
                    placeholder="Password"
                />

                <input
                    type="password"
                    className="form__input"
                    name="password"
                    placeholder="Repeat Password"
                />
                <div className="form__actions">
                    <Button variant="secondary" type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
};