import {
    GetFacilitiesStart,
    GetFacilitiesSuccess,
    GetFacilitiesFailure
} from '../actions/facility';

export const initialState = {
    facilities: [],
    isLoading: false,
    error: "",
};

export default function(state = initialState, action) {
    switch(action.type){

        case GetFacilitiesStart:
            return {
                ...state,
                isLoading: true,
            };

        case GetFacilitiesSuccess:
            return {
                ...state,
                isLoading: false,
                facilities: action.payload,
                error: "",
            };

        case GetFacilitiesFailure:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default: 
            return state;
    }
}
