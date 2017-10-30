// create initial state
//--------------------------------------------------------
const initState = {
    projects: []
}

export default (state = initState, action) => {
    switch(action.type){
        case "GET_PROJECTS":
            return {...state, projects: action.payload.projects}
        default:
            return {...state}
    }
};
