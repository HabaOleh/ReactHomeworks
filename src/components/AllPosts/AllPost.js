import React, {Component} from 'react';
import Post from "../Post/Post";

class AllPost extends Component {
    state ={posts:[],chosenPost:null}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    }
    selectedPost = (postId) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === postId);
        this.setState({chosenPost: find});
    };

    render() {
        let {posts,chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map((post)=><Post item={post} key={post.id} selectedPost={this.selectedPost}/>)
                }
                {
                    chosenPost &&<div><h3>{chosenPost.title}</h3><div>{chosenPost.body}</div></div>
                }
            </div>
        );
    }
}

export default AllPost;