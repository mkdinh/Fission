// Importing axios
import axios from "axios";

// Handle HTTP requests from clients
//--------------------------------------------------------
export default {
    findOne: auth0Id => axios.get("./api/user/" + auth0Id),
    
    create: user => axios.post("./api/user", user)
}