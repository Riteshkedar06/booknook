import React from 'react';
import './Card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BookCard(props) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desciption}
                </Card.Text>
                <Link to='/chat'>
                    <Button variant="primary">Request</Button>
                </Link>

            </Card.Body>
        </Card>

    );
}

export default BookCard;
