import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addbook } from '../Redux/Slice/addSlice'

function AddBook() {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [book, setBook] = useState({
        name: '',
        price: '',
        author: '',
        
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    }

    const handleAddBook = () => {
        dispatch(addbook(book));
        handleClose();
    }

    return (
        <>
            <h2 className='fw-bolder text-info m-4'>Add Books <button className='btn btn-info' onClick={handleShow}><i className="fa-solid fa-upload"></i></button></h2>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="Enter Book Name :" 
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Book Price</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="price" 
                                placeholder="Enter Book Price :" 
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Book Author</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="author" 
                                placeholder="Enter Book Author :" 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                      
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddBook}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddBook;
