import React, {Component} from 'react';
import UserService from "../../service/UserService";
import {withRouter} from "react-router-dom";
import User from "../User/User";


class AllUser extends Component {
    userService = new UserService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.userService.GetUsers();
        this.setState({users});
    }

    render() {
        let {users}=this.state;
        return (
            <div>
                {
                    users.map(user=><User item={user} key={user.id}/>)
                }

            </div>
        );
    }
}
export default withRouter(AllUser);