const defaultState = {
    number:0
}
export default (state = defaultState,action)=>{
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state)) 
    switch (action.type) {
        
        case 'add':
            newState.number = newState.number + action.value
            return newState
        case 'sub':
            newState.number = newState.number - action.value
            return newState
        default:
            break;
    }
    console.log(state);
    
    return state
}