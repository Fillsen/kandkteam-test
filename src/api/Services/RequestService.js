import FetchService from './FetchService';

class RequestService {
    allCharacters() {
        const url = 'https://rickandmortyapi.com/api/character/?page=1';
        return FetchService.getData(url);
    }
}

export default new RequestService();
