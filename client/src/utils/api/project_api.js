// Importing axios
import axios from "axios";

// Handle HTTP requests from clients
//--------------------------------------------------------
export default {

    findAll: (auth0Id) => axios.get("./api/project/user/" + auth0Id),

    findOne: (id) => axios.get("./api/project/" + id),

    create: (project, auth0Id) => axios.post("./api/project/user/"+ auth0Id, project),

    updateOne: (project, projectId) => axios.put("./api/project/" + projectId, project),

    saveOne: (project, projectId) => axios.put("./api/project/save/" + projectId, project),

    deleteOne: (projectId) => axios.delete("./api/project/" + projectId),

    compile: (project , projectId) => axios.put("./api/project/compile/" + projectId, project)
}