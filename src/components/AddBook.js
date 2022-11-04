import React from 'react';
import { FormControl, Button, Rating } from '@mui/material';
import { useState } from 'react';
import './AddBook.css'
import { addBook } from '../service/api';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Form } from 'react-bootstrap';


const defaultBook = {
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    purchasedOn: '',
    usedBy: '',
    condition: ''
}
function AddBook() {

    const [book, setBook] = useState(defaultBook);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const addBookDetail = async () => {
        await addBook(book);
        navigate('/explore');
    }



    return (

        <div className='addbook'>
            <NavBar />
            <div className="addbook__form">
                <Form className='mb-3'>
                    <h1>Add Book</h1>
                    <Form.Group className="mb-3" controlId="booktitle">
                        <Form.Label className='addbook__formLable'>Title</Form.Label>
                        <Form.Control className='addbook__formInput' type="Text" placeholder="Enter Book Title" onChange={(e) => onValueChange(e)} name="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="Text" placeholder="Author" onChange={(e) => onValueChange(e)} name="author" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Desciption</Form.Label>
                        <Form.Control as="textarea" placeholder="Desciption" onChange={(e) => onValueChange(e)} name="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type='text' placeholder="Image Url" onChange={(e) => onValueChange(e)} name="imgUrl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Purchased On:</Form.Label>
                        <Form.Control type='text' placeholder="Enter a purchased date" onChange={(e) => onValueChange(e)} name="purchasedOn" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User By:</Form.Label>
                        <Form.Control type='text' placeholder="" onChange={(e) => onValueChange(e)} name="usedBy" />
                    </Form.Group>
                    <FormControl>
                        <Form.Label>Condition:</Form.Label>
                        <Rating name="condition" onChange={(e) => onValueChange(e)} defaultValue={2} size="large" />
                    </FormControl>
                    <Form.Group>
                        <Button variant='contained' onClick={() => addBookDetail()}>Add Book</Button>
                    </Form.Group>
                </Form>
            </div>
            <img src="https://images.unsplash.com/photo-1528459105426-b9548367069b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />

        </div >
    );
}

export default AddBook;
