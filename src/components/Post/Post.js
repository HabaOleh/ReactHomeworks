import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item,selectedPost}=this.props;
        return (
            <div>
                {item.id} - {item.title}
                <button onClick={()=>selectedPost(item.id)}>View Post</button>
            </div>
        );
    }
}

export default Post;