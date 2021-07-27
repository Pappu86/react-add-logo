//Redux types
import { choosePositionType } from "../../modelTypes/store";

export const stepBarOne = (data) => {
    console.log("data-pappu:", data)
    return {
        payload: data,
        type: choosePositionType
    }
};