// Importing axios
import axios from "axios";

// Handle HTTP requests from clients
//--------------------------------------------------------
export default {
    findGroups: () => axios.get("./api/component/group/all"),

    findAll: () => axios.get("./api/component"),

    findOne: compId => axios.get("./api/user/" + compId),
    
    create: component => axios.post("./api/component", component)
}