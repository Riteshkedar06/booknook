import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { getRequestedBook, deleteReqestedBook } from '../service/api';

function GetRequestedBook() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate('');

    useEffect(() => {
        getBook();
    }, []);
    const getBook = async () => {
        let res = await getRequestedBook();
        setBooks(res.data);
    }
    const deleteBook = async (id) => {
        await deleteReqestedBook(id)
        navigate('/addbook')
    }
    return (
        <div className='getRequestedBook'>
            <ListGroup as="ol" numbered>

                {
                    books.map(book => (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{book.requestbook}</div>
                            {book.author}
                        </div>
                        <Button onClick={() => deleteBook(book._id)}>I Have</Button>

                    </ListGroup.Item>))
                }

            </ListGroup>
        </div>
    );
}

export default GetRequestedBook;
