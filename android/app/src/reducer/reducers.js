import {combineReducers} from 'redux';



import {DATA_GENRE, DATA_MOVIES} from "../action/actions"



let dataState = {gen: [], movies: []};



const dataReducer = (state = dataState, action) => {

    switch (action.type) {

        case DATA_GENRE:

            return {...state, gen: action.data};

        case DATA_MOVIES:

            return {...state, movies: action.data};

        default:

            return state;

    }

};



// Combine all the reducers

const rootReducer = combineReducers({

    dataReducer

})



export default rootReducer;