
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

        // case "ADD_FAV":
        //     let copy1 = state.myFavorites
        //     copy1.push(payload)
        //     return {
        //         ...state, myFavorites: copy1
        //     }

        // case "REMOVE_FAV":
        //     let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload))

        //     return {
        //         ...state,
        //         myFavorites: copy2
        //     }

        default:
            return {
                ...state
            };
    }

}

export default rootReducer;