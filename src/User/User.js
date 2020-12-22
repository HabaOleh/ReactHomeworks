import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item}= this.props;
        return (
            <div>
                 {item.name} - {item.username} - {item.email}
            </div>
        );
    }
}

export default User;