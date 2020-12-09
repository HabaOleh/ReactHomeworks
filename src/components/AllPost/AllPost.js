import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";
import PostService from "../../service/PostService";
import Post from "../Post/Post";
class AllPost extends Component {
    state={posts:[]}
    postService= new PostService()
    async componentDidMount() {
        let posts = await this.postService.GetPosts();
        this.setState({posts});
    }

    render() {
        let{posts}=this.state;
        return (
            <div>
                {
                    posts.map((post,index)=>index<20?<Post item={post} key={post.id}/>:false)
                }
            </div>
        );
    }
}

export default withRouter(AllPost);