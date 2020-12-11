export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async GetUsers() {
        return await fetch(this.url).then(value => value.json());
    }
    async GetUser(id){
        return await fetch(`${this.url}/${id}`).then(value => value.json());
    }
};
