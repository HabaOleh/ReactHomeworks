import React, {Component} from 'react';
import PostService from "../../service/PostService";
import {
    withRouter
} from "react-router-dom";
import "./FullPost.css"

class FullPost extends Component {
    state = {post: []};
    postService = new PostService();

    async componentDidMount() {
        let {postId} = this.props;
        let post = await this.postService.GetPost(postId);
        this.setState({post});

    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {
                    post && <div className={"fullPost"}>
                        <div className={"info"}>Details</div>
                        <div><span className={"info"}>ID: </span> {post.id}</div>
                        <div><span className={"info"}>Title: </span> {post.title}</div>
                        <div><span className={"info"}>Body: </span>{post.body}</div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(FullPost);