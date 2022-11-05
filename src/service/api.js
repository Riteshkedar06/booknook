import axios from "axios";

const URL = "http://localhost:8000";

//BOOK
export const addBook = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while adding book", error)
    }
}

export const getBookDetail = async (id) => {
    try {
        return await axios.get(`${URL}/explore/${id}`);
    } catch (error) {
        console.log("Error while getting book detail", error)
    }
}

export const getBook = async (id) => {
    try {
        return await axios.get(`${URL}/edit/${id}`);
    } catch (error) {
        console.log("Error While calling getbook", error)
    }
}

export const editBook = async (book, id) => {
    try {
        return await axios.post(`${URL}/edit/${id}`, book);
    } catch (error) {
        console.log("Error ehile calling editbook", error)
    }
}
export const deleteBook = async (id) => {
    try {
        return await axios.delete(`${URL}/edit/${id}`);
    } catch (error) {
        console.log("Error ehile calling deleteing", error)
    }
}


//User
export const authenticateSignUp = async (data) => {
    console.log("calling")
    try {
        console.log(data);
        return await axios.post(`${URL}/signup`, data);

    } catch (error) {
        console.log("Error while signup", error)
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log("Error while login", error)
    }
}

//Request Book
export const addRequestBook = async (data) => {
    try {
        return await axios.post(`${URL}/request`, data);
    } catch (error) {
        console.log("Error while adding Requested book", error);
    }
}
export const getRequestedBook = async () => {
    try {
        return await axios.get(`${URL}/request`);
    } catch (error) {
        console.log("Error While calling getbook", error)
    }
}
export const deleteReqestedBook = async (id) => {
    try {
        return await axios.delete(`${URL}/request/${id}`);
    } catch (error) {
        console.log("Error ehile calling deleteing", error)
    }
}

// export const addBook = async (data) => {
//     try {
//         return await axios.post(`${URL}/add`, data);
//     } catch (error) {
//         console.log("Error while adding book", error)
//     }
// }