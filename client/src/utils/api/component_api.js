// Importing axios
import axios from "axios";

// Handle HTTP requests from clients
//--------------------------------------------------------
export default {
    findDefaults: () => axios.get("./api/component/group/all"),

    findCustoms: (id) => axios.get("./api/component/group/" + id),

    findAll: () => axios.get("./api/component"),

    findOne: compId => axios.get("./api/user/" + compId),
    
    create: (component, id) => axios.post("./api/component/", component),

    updateOne: (component, componentId) => axios.put("./api/component/" + componentId, component),

    deleteOne: (componentId) => axios.delete("./api/component/" + componentId)
}