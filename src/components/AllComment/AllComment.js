import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";
import CommentService from "../../service/CommentService";
import Comment from "../Comment/Comment";
class AllComment extends Component {
    state = {comments:[]}
    commentServise = new CommentService();
    async componentDidMount() {
        let comments = await this.commentServise.GetComments();
        this.setState({comments});
    }

    render() {
       let {comments}= this.state;
        return (
            <div>
                {comments.map((comment,index)=>index<20?<Comment item={comment} key={comment.id}/>:false)}
            </div>
        );
    }
}

export default withRouter(AllComment);