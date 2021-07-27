//Redux types
import { choosePositionType } from "../../modelTypes/store";

//Redux initial state
const initialState = {
    stepBarOne: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case choosePositionType:
            return {
                ...state,
                stepBarOne: action.payload
            }
        default:
            return state
    }
};