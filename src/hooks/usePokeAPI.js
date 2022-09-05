import React from "react";
import axios from "axios";

const ACTIONS = {
    fetchRequest: "FETCH_REQUEST",
    fetchSuccess: "FETCH_SUCCESS",
    fetchFailure: "FETCH_FAILURE"
};

const createInitialState = (initialState) => ({
    data: undefined,
    isFetching: true,
    error: undefined,
    ...initialState
});

const fetchReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case ACTIONS.fetchSuccess: 
            return {
                ...state, 
                payload, 
                isFetching: false
            };
        case ACTIONS.fetchRequest:
            return {
                ...state, 
                isFetching: true, 
                error: undefined
            };
        case ACTIONS.fetchFailure:
            return {
                ...state, 
                payload, 
                isFetching: false
            };
        default:
            throw new Error();
    }
};

export const usePokeAPI = (endpoint, initialState = {}, config = {}) => {
    const[state, dispatch] = React.useReducer(
        fetchReducer,
        createInitialState(initialState)
    );

    React.useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: ACTIONS.fetchRequest });

            try {
                const {data} = await axios.get(endpoint, config);
                dispatch({ type:ACTIONS.fetchSuccess, payload: { data } });
            } catch(error) {
                dispatch({
                    type: ACTIONS.fetchFailure,
                    payload: {error: error.message}
                });
            }
        }

        fetchData();
    }, [config, endpoint])

    return state;
};