import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Srivasavi"
        };
    }

    changeState = () => {
        this.setState({name: 'Nalam Srivasavi'})
    }
    render() {
        return (
            <>
                <h1>
                    {this.state.name} 
                </h1>
                <button onClick={this.changeState}>Click me to change state</button>
            </>
        )
    }
}

export default ClassComponent;