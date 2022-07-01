import { DECREMENT, INCREMENT, RESET } from "../constants/actionsConstants"

export const incrementActions = () => {
    return {
        type: INCREMENT
    }
}

export const decrementActions = () => {
    return {
        type: DECREMENT
    }
}

export const resetActions = () => {
    return {
        type: RESET
    }
}
