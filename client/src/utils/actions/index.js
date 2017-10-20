// LOGIN ACTION
//--------------------------------------------------------
import API from "../api";

export const login = (auth0Id) => {
    return(
        dispatch => {
            API.user.findOne(auth0Id)
                .then( user => {
                    if(user.status !== 204){
                        dispatch(type: "NEW_USER")
                    }else{
                        dispatch({type: "LOGIN", playload: user.data})
                    }
                })
        }
    )
}