import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import "./FullComment.css"
class FullComments extends Component {
    state = {comment:[]}
    commentService = new CommentService();
    async componentDidMount() {
        let {commentId} = this.props;
        let comment = await this.commentService.GetComment(commentId);
        this.setState({comment});
    }

    render() {
        let {comment} = this.state;

        return (
            <div>
                {
                    comment && <div className={"fullComments"}>
                        <div className={"info"}>Details</div>
                        <div><span className={"info"}>ID: </span> {comment.id}</div>
                        <div><span className={"info"}>E-mail: </span>{comment.email}</div>
                        <div><span className={"info"}>Body: </span>{comment.body}</div>
                    </div>
                }
            </div>
        );
    }
}

export default FullComments;