import React, {Component} from 'react';
import Post from "../Post/Post";
import {PostService} from "../../service/PostService";

class AllPost extends Component {
    postService = new PostService();
    state ={posts:[],chosenPost:null}
    componentDidMount() {
        this.postService.getPosts().then(post=>this.setState({posts:post}))
    }
    selectedPost = (postId) => {
        // let {posts} = this.state;
        // let find = posts.find(value => value.id === postId);
        // this.setState({chosenPost: find});
        this.postService.getPostsById(postId).then(post=>this.setState({chosenPost:post}))
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