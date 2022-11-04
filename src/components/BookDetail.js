import React, { Fragment, useEffect } from 'react'
import { getBookDetails } from '../redux/actions/bookActions'
import './BookDetail.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../service/api'
import NavBar from './NavBar'

function BookDetail(props) {

    const { id } = useParams();
    const { book } = useSelector(state => state.getBook);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookDetails(id))
    }, [dispatch, id])

    const deleteBooks = async (id) => {
        await deleteBook(id);
        navigate('/explore');
    }

    const valid = book && Object.keys(book).length

    return (
        <div>

            {
                valid && (
                    <Fragment>
                        <NavBar />
                        <div className="bookdetail">
                            <div className="bookdetail__top">
                                <div className="bookdetail__topLeft">
                                    <img src={book.imgUrl} alt="" />
                                </div>
                                <div className="bookdetail__topRight">
                                    <h1>{book.title}</h1>
                                    <hr />
                                    <p>{book.description}</p>
                                    <hr />
                                    <h4>Purchased on: {book.purchasedOn}</h4>
                                    <hr />
                                    <h4>Condition: {book.condition}</h4>
                                    <hr />
                                    <h4>Author: {book.author}</h4>
                                </div>

                            </div>
                            <div className="bookdetail__bottom">
                                <button><Link to={`/edit/${book._id}`}>Edit</Link></button>
                                <button onClick={() => deleteBooks(book._id)}>Delete</button>
                                <button>Request</button>
                            </div>
                        </div>

                    </Fragment>
                )
            }</div>
    )
}

export default BookDetail