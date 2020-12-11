import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import "./User.css"
class User extends Component {
    render() {
        let {item,match:{url},cls}= this.props;
        return (
            <div>
                <div className={cls}>{item.name}</div>
                <div><Link className={"btn"} to={`${url}/${item.id}`}>Show details</Link></div>
            </div>
        );
    }
}

export default withRouter(User);