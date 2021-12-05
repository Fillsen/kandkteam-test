import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({variant, disabled, children, type, onClick, ...props}) => {

    let classNames = cn(
        {[styles[[`${variant}`]]]: variant !== undefined}
    );

    return (
        <button
            type={type}
            className={variant ? classNames : styles.initial}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};