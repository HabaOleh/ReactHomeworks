export default class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    async GetComments() {
        return await fetch(this.url).then(value => value.json());
    }
    async GetComment(id) {
        return await fetch(this.url+"/"+id).then(value => value.json());
    }
};
