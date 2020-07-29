import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        super (props);

    }

    componentWillMount(props, state){

    }
    componentDidMount(props,state){
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props){

    }
    componentWillUpdate(props, state){
        if(this.props.name !== props.name){
            //do something
        }
    }
    componentDidUpdate(props, state){
        
    }

}

export default Application;