import React, {Component} from 'react';
import AllUser from "../AllUser/AllUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AllPost from "../AllPost/AllPost";
import AllComment from "../AllComment/AllComment";
import "./AllInfo.css"

class AllInformation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={"menu"}>
                        <div className={"link"}>
                            <Link className={"txt-link"} to={'/users'}>Show Users</Link>
                        </div>
                        <div className={"link"}>
                            <Link className={"txt-link"} to={'/posts'}>Show Posts</Link>
                        </div>
                        <div className={"link"}>
                            <Link className={"txt-link"} to={'/comments'}>Show Comments</Link>
                        </div>
                    </div>
                    <div>
                        <Switch>
                            <Route path={'/users'} render={() => <AllUser/>}/>

                            <Route path={'/posts'} render={() => <AllPost/>}/>

                            <Route path={'/comments'} render={() => <AllComment/>}/>

                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default AllInformation;