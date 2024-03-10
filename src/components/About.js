
import React from 'react';
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    Logged In User: <br />
                    <UserContext.Consumer>
                        {(contextData) => {
                            return (
                                <strong>{contextData.loggedInUser}</strong>
                            )
                        }}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name="child 1" />
                {/* <UserClass userData={userData} name="child 2" />
                <UserClass2 userData={userData} name="child 3" /> */}
            </div>
        )
    }
}

export default About;