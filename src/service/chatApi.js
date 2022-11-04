import axios from "axios";

const URL = "http://localhost:8000";

//Chat
export const chat = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while adding book", error)
    }
}

export const getChat = async () => {
    try {
        return await axios.get(`${URL}/chat`);
    } catch (error) {
        console.log("Error while getting book detail", error)
    }
}

export const getChatByID = async (id) => {
    try {
        return await axios.get(`${URL}/chat/${id}`);
    } catch (error) {
        console.log("Error while getting book detail", error)
    }
}