
const initialState = {
    buttonColors: '',
    language: 'english'
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_BTN_COLOR":
            return {
                ...state,
                buttonColors: payload
            }
        case "LANGUAGE":
            return {
                ...state,
                language: payload
            }

        default:
            return {
                ...state
            };
    }

}

export default rootReducer;