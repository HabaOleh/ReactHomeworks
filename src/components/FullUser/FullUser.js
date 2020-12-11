import React, {Component} from 'react';
import UserService from "../../service/UserService";
import {
    withRouter
} from "react-router-dom";
import "./FullUser.css"

class FullUser extends Component {
    state = {user: []};
    userService = new UserService();

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.userService.GetUser(userId);
        this.setState({user})
    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {
                    user && <div className={"fullUser"}>
                        <div className={"info"}>Details</div>
                        <div><span className={"info"}>ID: </span> {user.id}</div>
                        <div><span className={"info"}>Name: </span>{user.name}</div>
                        <div><span className={"info"}>E-mail: </span>{user.email}</div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(FullUser);