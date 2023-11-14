type StateType = {
    [key: number]: Array<number>
}

type ActionType = {
    type: string
}

export const sum = (state: StateType, action: ActionType) => {

    switch(action.type) {
        
        case "PLUS":
            return state["a"] + state["b"];
        case "MINUS":
            return state["a"] - state["b"];
        case "MULTIPLY":
            return state["a"] * state["b"];
        case "DIVIDE":
            return state["a"] / state["b"];
        default:
            throw new Error("where are numbers");
    }
};
