export const addButtonColor = (color) => {
    return {
        type: "ADD_BTN_COLOR",
        payload: color
    }
}

export const setLanguage = (language) => {
    return {
        type: "LANGUAGE",
        payload: language
    }
}