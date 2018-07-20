import { 
    CHANGE_SEARCHFIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_SUCCESS,
    FETCH_ROBOTS_FAILED
} from './constant';

// Action to carry the changes in the search field
export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,               // This is the action name
    payload: text                           // This is the action event
});

// Action when fetching the robots
export const fetchRobots = (dispatch) => {
    dispatch({ type: FETCH_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: users }))
        .catch(error => dispatch({ type: FETCH_ROBOTS_FAILED, payload: error }));
};