// create initial state
//--------------------------------------------------------
const initState = {
    defaults: {},
    customs: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case "GET_DEFAULTS":
            return {...state, defaults: action.payload.defaults}
        case "GET_CUSTOMS":
            return {...state, customs: action.payload.customs}  
        default:
            return {...state}
    }
};
