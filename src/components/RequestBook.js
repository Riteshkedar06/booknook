import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavBar from './NavBar';
import { addRequestBook } from '../service/api';
import GetRequestedBook from './GetRequestedBook';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    requestbook: '',
    author: ''
}

function RequestBook() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (!user) navigate("/login");
    }, [navigate]);

    const [requestedBook, setRequestBook] = useState(defaultValue);

    const onValueChange = (e) => {
        setRequestBook({ ...requestedBook, [e.target.name]: e.target.value });
        console.log(requestBook);
    }
    const requestBook = async () => {
        await addRequestBook(requestedBook);
        window.location.reload(false);
    }

    return (
        <div className='requestbook'>
            <NavBar />
            <div className="requestbook__info">
                <Container className="requestbook__form" >
                    <Form>
                        <Form.Group className="mb-3" controlId="requestBook">
                            <Form.Label>Requested Book</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Title" onChange={(e) => onValueChange(e)} name="requestbook" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Auther</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Author" onChange={(e) => onValueChange(e)} name="author" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Button onClick={() => requestBook()}>Submit</Button>
                        </Form.Group>
                    </Form>

                </Container>
                <Container>
                    <GetRequestedBook />
                </Container>


            </div>


        </div>
    );
}

export default RequestBook;
