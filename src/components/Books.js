import React, { useEffect } from 'react'
// import './Explore.css'
import BookCard from './BookCard'
import { getBooks } from '../redux/actions/bookActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Books() {
    const { books } = useSelector(state => state.getBooks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);

    return (
        <div className='books'>
            {
                books.map(book => (
                    <Link to={`/explore/${book._id}`} style={{ textDecoration: 'none', display: 'inline-block', margin: "10px" }}>
                        <BookCard title={book.title} imgUrl={book.imgUrl}
                            desciption={book.description}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default Books;
