import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import "./Post.css"
class Post extends Component {

    render() {
        let {item, match: {url}, cls} = this.props;
        return (
            <div >
                <div className={cls}>{item.title}</div>
                <div><Link className={"btnPost"} to={`${url}/${item.id}`}>Show details</Link></div>

            </div>
        );
    }
}

export default withRouter(Post);