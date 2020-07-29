import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        let {count} = this.state;

        return(
            <div>
                <h1> You have clicked this button {count} times</h1>
                <span>
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;