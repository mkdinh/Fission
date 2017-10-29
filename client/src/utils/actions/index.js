// LOGIN ACTION
//--------------------------------------------------------

import API from "../api";

// USER REDUCERS

export default {
    login: (auth0Id) => {
        return(
            dispatch => {
                API.user.findOne(auth0Id)
                    .then( user => {
                        if(user.status === 204){
                            dispatch({type: "NEW_USER"})
                        }else{
                            dispatch({type: "LOGIN", payload: user.data})
                        }
                    })
            }
        )
    },

// COMPONENT REDUCERS
//--------------------------------------------------------
    getDefaults: () => {
        return(
            dispatch => {
                API.component.findDefaults()
                .then( db => {
                    dispatch({type: "GET_DEFAULTS", payload:{defaults: db.data}})
                })
                .catch( err => console.log(err))
            }
        )
    },

    getCustoms: (id) => {
        return(
            dispatch => {
                API.component.findCustoms(id)
                .then( db => {
                dispatch({type: "GET_CUSTOMS", payload: {customs: db.data}})
                })
                .catch( err => console.log(err))
            }
        )
    },

// PROJECT REDUCERS
//--------------------------------------------------------
    getProjects: (auth0Id) => {
        return(
            dispatch => {
                API.project.findAll(auth0Id)
                    .then( db => {
                        dispatch({type: "GET_PROJECTS", payload: {projects: db.data}})
                    })
                    .catch(err => console.log(err))
            }
        )
    }
}
