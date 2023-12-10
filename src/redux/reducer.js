
const initialState = {
    buttonColors: ''
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_BTN_COLOR":
            return {
                ...state,
                buttonColors: payload
            }

        default:
            return {
                ...state
            };
    }

}

export default rootReducer;