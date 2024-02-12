import React from 'react';

class UserClass2 extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
    }

    render() {
        const { userData } = this.props;
        const { count } = this.state;

        return (
            <>
                {userData.map((data) => (
                    <div className="user-card">
                        <h2>{count}</h2>
                        <button
                            onClick={() => {
                                this.setState({
                                    count: this.state.count + 1
                                })
                            }}
                        >Count Increase</button>
                        <h2>Name: {data.name}</h2>
                        <h3>Location: {data.location}</h3>
                        <h3>Contact: {data.contact}</h3>
                    </div>
                ))}
            </>
        )
    }
};

export default UserClass2;