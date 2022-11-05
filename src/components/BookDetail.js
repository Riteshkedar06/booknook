import React, { Fragment, useEffect } from 'react'
import { getBookDetails } from '../redux/actions/bookActions'
import './BookDetail.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Container, Image, Box, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../service/api'
import NavBar from './NavBar'
import { StarIcon } from '@chakra-ui/icons';


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
                                    <h1 className='bookdetail__title'>{book.title}</h1>
                                    <hr className='hr' />
                                    <p className='bookdetail__des'>{book.description}</p>
                                    <hr className='hr' />
                                    <h4 className='bookdetail__info'>Purchased on: {book.purchasedOn}</h4>
                                    <hr className='hr' />
                                    <h4 className='bookdetail__info'>Condition: {book.condition}</h4>
                                    <hr className='hr' />
                                    <h4 className='bookdetail__info'>Author: {book.author}</h4>
                                    <hr className='hr' />
                                    <h4 className='bookdetail__info'>Contact: {book.contact}</h4>
                                </div>

                            </div>
                            <div className="bookdetail__bottom">
                                <button className='button'><Link to={`/edit/${book._id}`}>Edit</Link></button>
                                <button className='button' onClick={() => deleteBooks(book._id)}>Delete</button>
                            </div>
                        </div>

                    </Fragment>
                )
            }</div>
    )
}

export default BookDetail