import React from 'react';
import { useState, useEffect } from 'react';
import './AddBook.css'
import { FormControl, Rating } from '@mui/material';
import { addBook } from '../service/api';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Form, Button, FormSelect, FormLabel } from 'react-bootstrap';


const defaultBook = {
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    purchasedOn: '',
    usedBy: '',
    contact: '',
    condition: ''
}
function AddBook() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (!user) navigate("/login");
    }, [navigate]);


    const [book, setBook] = useState(defaultBook);

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
                <Form className='mb-3' >
                    <h1 className='addbook__title'>Add Book</h1>
                    <Form.Group className="mb-3" controlId="booktitle">
                        <Form.Label className='addbook__formLable'>Title</Form.Label>
                        <Form.Control className='addbook__formInput' type="Text" placeholder="Enter Book Title" onChange={(e) => onValueChange(e)} name="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author</Form.Label>
                        <Form.Control className='addbook__formInput' type="Text" placeholder="Author" onChange={(e) => onValueChange(e)} name="author" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Desciption</Form.Label>
                        <Form.Control className='addbook__formInput' as="textarea" placeholder="Desciption" onChange={(e) => onValueChange(e)} name="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control className='addbook__formInput' type='text' placeholder="Image Url" onChange={(e) => onValueChange(e)} name="imgUrl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Purchased On:</Form.Label>
                        <Form.Control className='addbook__formInput' type='text' placeholder="Enter a purchased date" onChange={(e) => onValueChange(e)} name="purchasedOn" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Used By:</Form.Label>
                        <Form.Control className='addbook__formInput' type='text' placeholder="" onChange={(e) => onValueChange(e)} name="usedBy" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact NO:</Form.Label>
                        <Form.Control className='addbook__formInput' type='text' placeholder="" onChange={(e) => onValueChange(e)} name="contact" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <FormLabel >Condition</FormLabel>
                        <FormSelect className='addbook__formInput' name="condition" onChange={(e) => onValueChange(e)} defaultValue={2} >
                            <option>Condition</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </FormSelect>
                    </Form.Group>
                    <Form.Group >
                        <Button variant='primary' onClick={() => addBookDetail()}>Add Book</Button>
                    </Form.Group>


                    {/* <FormControl>
                        <Form.Label>Condition:</Form.Label>
                        <Rating name="condition" onChange={(e) => onValueChange(e)} defaultValue={2} size="large" />
                    </FormControl>
                    <Form.Group>
                        <Button variant='contained' onClick={() => addBookDetail()}>Add Book</Button>
                    </Form.Group> */}
                </Form>
            </div>
            {/* <img src="https://images.unsplash.com/photo-1528459105426-b9548367069b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}

        </div >
    );
}

export default AddBook;
