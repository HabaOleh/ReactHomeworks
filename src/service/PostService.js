export class PostService{
     url = 'https://jsonplaceholder.typicode.com/posts';
    getPosts(){
        return fetch(this.url)
            .then(value => value.json())
            .then(posts => posts);
    }
    getPostsById(id){
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(posts => posts);
    }

}