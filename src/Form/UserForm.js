import React, {Component} from 'react';
import UserService from "../Service/UserService";
import User from "../User/User";

class UserForm extends Component {
    userService = new UserService();
    state = {users: [], inputValue: ''};
    inputMain = React.createRef();

    async componentDidMount() {
        let users = await this.userService.GetUsers();
        this.setState({users});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({inputValue: this.inputMain.current.value});
    };

    render() {
        let {users, inputValue} = this.state;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref={this.inputMain} type={'number'} max={10} min={1}/>
                    <button>send</button>
                </form>
                <div>
                    {
                        users.map((user,index)=>{
                            return index+1===+inputValue?<User item={user} key={user.id}/>:false;
                        })
                    }
                </div>

            </div>
        );
    }
}
export default UserForm;