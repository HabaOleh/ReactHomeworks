import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
class User extends Component {
    render() {
        let {item}= this.props;
        return (
            <div>
                {item.name}
            </div>
        );
    }
}

export default withRouter(User);