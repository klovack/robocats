import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import { setSearchField, fetchRobots } from '../actions';

import './App.css';

const mapStateToProps = (state) => {
    return {
        // searchRobots reducer
        searchField: state.searchRobots.searchField,

        // fetchRobots reducer
        robots: state.fetchRobots.robots,
        isPending: state.fetchRobots.isPending,
        error: state.fetchRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

        // Why we pass dispatch here
        // componentDidMount -- will call --> onFetchChange --> fetchRobots (make API call)
        // --> fetchRobots (call dispatch function based on the respond)
        onFetchRobots: () => fetchRobots(dispatch)
    };
};

// Component which is class, called smartcomponent
class App extends Component {
    componentDidMount() {
        this.props.onFetchRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!isPending) {
            return(
                <div className="container tc">
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);