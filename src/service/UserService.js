export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async GetUsers() {
        return await fetch(this.url).then(value => value.json());
    }
};
