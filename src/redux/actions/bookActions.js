import axios from 'axios';
import * as actiontypes from '../constants/bookConstant'

const URL = "http://localhost:8000";

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/explore`);
        dispatch({ type: actiontypes.GET_BOOKS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actiontypes.GET_BOOKS_FAIL, payload: error.message })
    }
}
export const getBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actiontypes.GET_BOOKDETAILS_REQUEST })
        const { data } = await axios.get(`${URL}/explore/${id}`);
        dispatch({ type: actiontypes.GET_BOOKDETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actiontypes.GET_BOOKDETAILS_FAIL, payload: error.message })

    }
}
