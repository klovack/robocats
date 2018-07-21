import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.updateCount = this.updateCount.bind(this);
    }

    /* 
        This preventing the update unnecessary render
        The drawbacks is that, the program has to do one more step
        and that is to call this function
    */
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    updateCount() {
        this.setState(state => { 
            return {count: this.state.count + 1}; 
        })
    }

    render() {
        console.log('CounterButton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>Counting</button>
        );
    }
}

export default CounterButton;