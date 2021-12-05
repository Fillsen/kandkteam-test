import { Link, useMatch } from 'react-router-dom';

export const CustomLink = ({children, to, ...props}) => {
    const match = useMatch();
    return (
        <Link
            to={to}
            style={{color: match ? 'white' : 'black'}}
            {...props}
        >
            {children}
        </Link>
    );
};