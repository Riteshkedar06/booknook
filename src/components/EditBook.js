import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button, Rating } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditBook.css'
import { editBook, getBook } from '../service/api';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


const Container = styled(FormGroup)`
    width:100%;
    margin-left:auto;
    margin-right:auto;
    margin-top:5%;
    margin-bottom:10%;

    & > div {
        margin-top:20px;
    }

`
const defaultBook = {
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    purchasedOn: '',
    usedBy: '',
    condition: ''
}
function EditBook() {

    const [book, setBook] = useState(defaultBook);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadBookDetail(id);
    }, [id])

    const onValueChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }


    const loadBookDetail = async (id) => {
        const response = await getBook(id);
        setBook(response.data)

    }
    const editBookDetail = async () => {
        await editBook(book, id);
        navigate('/explore');
    }



    return (
        <div className='editbook'>
            <NavBar />
            <div className="editbook__form">
                <Container>
                    <Typography variant='h4'>Edit Book</Typography>
                    <FormControl>
                        <InputLabel>Title</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="title" value={book.title} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Author</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="author" value={book.author} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Desciption</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="description" value={book.description} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Image Url</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="imgUrl" value={book.imgUrl} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Purchased On:</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="purchasedOn" value={book.purchasedOn} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>User By:</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="usedBy" value={book.usedBy} />
                    </FormControl>
                    <FormControl>
                        <Label>Condition</Label>
                        <Rating name="condition" onChange={(e) => onValueChange(e)} defaultValue={2} size="large" value={book.condition} />
                    </FormControl>
                    <FormControl>
                        <Button variant='contained' onClick={() => editBookDetail()}>Edit Book</Button>
                    </FormControl>
                </Container>
            </div>


        </div>
    );
}

export default EditBook;
