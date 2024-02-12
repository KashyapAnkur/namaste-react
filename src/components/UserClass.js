import React from 'react';

class UserClass extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: ""
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/KashyapAnkur");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
    }

    render() {
        const { userData } = this.props;
        const { userInfo } = this.state;

        return (
            <>
                <div className="user-card">
                    <h3><img src={userInfo.avatar_url} height={120} width={150} /></h3>
                    <h2>Name: {userInfo.name}</h2>
                    <h3>Location: {userInfo.location}</h3>
                </div>
            </>
        )
    }
};

export default UserClass;