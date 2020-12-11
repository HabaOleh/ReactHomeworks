import React, {Component} from 'react';
import UserService from "../../service/UserService";
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import User from "../User/User";
import FullUser from "../FullUser/FullUser";
import "./AllUser.css";


class AllUser extends Component {
    userService = new UserService();
    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.GetUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                <div>
                {
                    users.map(user => {
                        let clsName=user.id%2?"even":"odd"
                       return <User cls={clsName} item={user} key={user.id}/>})
                }
                </div>
                <div>
                <Switch>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullUser userId={id} key={id}/>
                    }}/>
                </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllUser);