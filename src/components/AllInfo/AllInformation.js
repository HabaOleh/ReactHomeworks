import React, {Component} from 'react';
import AllUser from "../AllUser/AllUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPost from "../AllPost/AllPost";
import AllComment from "../AllComment/AllComment";
class AllInformation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>Show Users</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>Show Posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>Show Comments</Link>
                    </div>
                    <div>
                        <Switch>
                            <Route path={'/users'} render={() => <AllUser/>}/>

                            <Route path={'/posts'} render={()=><AllPost/>}/>

                            <Route path={'/comments'} render={()=><AllComment/>}/>

                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default AllInformation;