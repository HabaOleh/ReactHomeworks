import React, {Component} from 'react';
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import CommentService from "../../service/CommentService";
import Comment from "../Comment/Comment";
import FullComments from "../FullComments/FullComments";
import "./AllComments.css"
class AllComment extends Component {
    state = {comments:[]}
    commentService = new CommentService();
    async componentDidMount() {
        let comments = await this.commentService.GetComments();
        this.setState({comments});
    }

    render() {
       let {comments}= this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                <div>
                {
                    comments.map((comment,index)=>{
                        let clsName=index%2?"evenComment":"oddComment"
                        return index<10?<Comment cls={clsName} item={comment} key={comment.id}/>:false
                    })
                }
                </div>
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props)=>{
                            let {match:{params:{id}}} = props;
                            return <FullComments commentId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComment);