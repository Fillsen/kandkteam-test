import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({children, className, ...props}) => {
    return (
        <button className={cn(styles.btn__primary, className)} {...props}>
            {children}
        </button>
    );
};