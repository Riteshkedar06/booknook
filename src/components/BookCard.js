import React from 'react';
import './Card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard(props) {
    console.log(props)
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desciption}
                </Card.Text>
                <Button variant="primary">Request</Button>
            </Card.Body>
        </Card>

    );
}

export default BookCard;
