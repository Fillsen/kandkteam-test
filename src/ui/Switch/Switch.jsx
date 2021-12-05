import './Switch.scss';

export const Switch = ({handleThemeSwitch}) => {
    return (
        <>
            <input
                className="input-switcher"
                type="checkbox"
                id="switch"
            />
            <label
                onClick={handleThemeSwitch}
                className="label-switcher"
                htmlFor="switch"
            />
        </>
    );
};