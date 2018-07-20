import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

import './App.css';

// Component which is class, called smartcomponent
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
            .catch(error => {
                console.log(error);
                this.setState({ robots: robots });
            });
    }

    onSearchChange(event) {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if (robots.length > 0 ) {
            return(
                <div className="container tc">
                    <h1 className="page-title">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        } else {
            return (
                <div className="container tc">
                    <h1 className="page-title">RoboFriends</h1>
                    <div className="spinner-loader"></div>
                </div>
            )
        }
    }
};

export default App;