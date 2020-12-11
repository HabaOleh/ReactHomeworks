export default class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts';

    async GetPosts() {
        return await fetch(this.url).then(value => value.json());
    }
    async GetPost(id) {
        return await fetch(this.url+"/"+id).then(value => value.json());
    }
};
