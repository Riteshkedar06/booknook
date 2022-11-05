import axios from "axios";

const URL = "http://localhost:8000";

//Chat
export const getAccessChats = async (data, config) => {
    console.log(config)
    try {
        return await axios.post(`${URL}/chat`, data, config);
    } catch (error) {
        console.log("Error while accessing chat", error)
    }
}

export const getChat = async () => {
    try {
        return await axios.get(`${URL}/chat`);
    } catch (error) {
        console.log("Error while getting book detail", error)
    }
}
