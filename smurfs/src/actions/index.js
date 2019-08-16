import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_START });
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log('Smurf API is working: ', res.data)
                dispatch({
                    type: FETCHING_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log('Smurf API is down: ', err)
                dispatch({
                    type: FETCHING_FAILURE
                })
            })
    }
}