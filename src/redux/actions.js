import { ADD_BTN_COLOR } from "./action-types";

export const addButtonColor = (color) => {
    return {
        type: ADD_BTN_COLOR,
        payload: color
    }
}