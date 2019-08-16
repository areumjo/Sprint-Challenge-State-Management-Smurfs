import {
    FETCHING_START, FETCHING_SUCCESS
} from '../actions';

const initialState = {
    smurfs: []
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_START: 
            return state;
        case FETCHING_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
}