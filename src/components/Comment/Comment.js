import React, {Component} from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import "./Comment.css"
class Comment extends Component {
    render() {
        let {item, match:{url} ,cls}= this.props;
        return (
            <div>
                <div className={cls}>{item.name}</div>
                <div><Link className={"btnComment"} to={`${url}/${item.id}`}>Show details</Link></div>
            </div>
        );
    }
}

export default withRouter(Comment);