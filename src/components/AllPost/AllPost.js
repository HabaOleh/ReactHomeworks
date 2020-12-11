import React, {Component} from 'react';
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import PostService from "../../service/PostService";
import Post from "../Post/Post";
import FullPost from "../FullPosts/FullPost";
import "./AllPost.css"
class AllPost extends Component {
    state={posts:[]}
    postService= new PostService()
    async componentDidMount() {
        let posts = await this.postService.GetPosts();
        this.setState({posts});
    }

    render() {
        let{posts}=this.state;
        const {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map((post,index)=>{
                        let clsName=post.id%2?"evenPost":"oddPost"
                       return  index<10?<Post cls={clsName} item={post} key={post.id}/>:false
                    })
                }
                <div>
                <Switch>
                    <Route path={`${url}/:id`} render={(props)=>{
                        let {match:{params:{id}}}= props;
                        return <FullPost postId={id} key={id}/>
                    }} />
                </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPost);