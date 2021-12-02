import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({variant, disabled, children, ...props}) => {

    let classNames = cn(
        {[styles[[`${variant}`]]]: variant !== undefined}
    );

    return (
        <button
            className={variant ? classNames : styles.initial}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};