import { Content } from 'components';
import { useEffect, useState } from 'react';
import RequestService from 'api/Services/RequestService';

export const ContentContainer = () => {
    const [chars, setChars] = useState({});

    useEffect(() => {
        RequestService.allCharacters().then(res => setChars(res));
    }, []);

    return (
        <Content chars={chars}/>
    );
};