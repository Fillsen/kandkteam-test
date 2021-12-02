import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({children, disabled, variant, ...props}) => {
    
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