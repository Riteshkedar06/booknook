import * as actionType from '../constants/bookConstant'


export const getBookReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case actionType.GET_BOOKS_SUCCESS:
            return { books: action.payload }

        case actionType.GET_BOOKS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const getBookDetailsReducer = (state = { book: {} }, action) => {
    switch (action.type) {
        case actionType.GET_BOOKDETAILS_REQUEST:
            return { loading: true };
        case actionType.GET_BOOKDETAILS_SUCCESS:
            return { loading: false, book: action.payload }

        case actionType.GET_BOOKDETAILS_FAIL:
            return { loading: false, error: action.payload }

        case actionType.GET_BOOKDETAILS_RESET:
            return { book: {} }
        default:
            return state
    }
}