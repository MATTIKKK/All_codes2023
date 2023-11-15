

export const CountReducer = (state: any, action: any): any => {
    switch(action.type){
        case 'INCREASE':
            if(state.value < 10){
                state.value += 1;
                return {...state};
            }
            return state;
        case 'RESET':
            state.value = 0;
            return {...state};
        default:
            throw new Error("errooooor");
    }
}