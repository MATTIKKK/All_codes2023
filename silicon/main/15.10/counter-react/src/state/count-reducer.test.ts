import { CountReducer } from "./count-reducer";

test('Counter should be increased', () => {

    const startState: any = {
        'value': 0
    };

    const endState = CountReducer(startState, {
        type: 'INCREASE',
    })

    expect(endState.value).toBe(1);
})

test('Counter should be reseted', () => {

    const startState: any = {
        'value': 4
    };

    const endState = CountReducer(startState, {
        type: 'RESET',
    })

    expect(endState.value).toBe(0);
})