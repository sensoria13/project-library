import React, {useState} from 'react';
import './App.css'
import {FormControl, InputGroup, Button,  Form, Col, Spinner} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookModal from './Components/BookModal';

function App() {

    const [maxResults, setMaxResults] = useState(12);
    const [startIndex, setStartIndex] = useState(1);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    const handleSubmit = () => {
        setLoading(true);
        if (maxResults > 30 || maxResults < 1) {
            toast.error('Вкажіть кількість результатів від 1 до 30');
        } else {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
                ).then(res => {
                if (startIndex > res.data.totalItems || startIndex < 1) {
                    toast.error(
                        `Введіть число від 1 до ${res.data.totalItems}`
                    );
                } else {
                    if (res.data.items.length > 0) {
                        setBooks(res.data.items);
                        setLoading(false);
                    }
                }
            }).catch(err => {
                setLoading(true);
                console.log(err.response);
            });
        }
    };

    const mainHeader = () => {
        return (
            <div className='main-image d-flex justify-content-center align-items-center flex-column'>
                {/* Overlay */}
                <h1
                    className='display-2 text-center text-white mb-3'
                    style={{ zIndex: 2 }}
                >
                    Твоя книга чекає на тебе!
                </h1>
                <div style={{ width: '60%', zIndex: 2 }}>
                    <InputGroup size='lg' className='mb-3'>
                        <FormControl
                            type='text'
                            placeholder='Пошук'
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant='primary' onClick={handleSubmit}>Пошук</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <div className='d-flex text-white justify-content-center'>
                        <Col xs="auto" className="my-1">
                            <Form>
                                <Form.Label  htmlFor='maxResults'>Кількість результатів</Form.Label>

                                <FormControl
                                    type='number'
                                    id='maxResults'
                                    placeholder='Max Results'
                                    value={maxResults}
                                    onChange={e => setMaxResults(e.target.value)}
                                />
                            </Form>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Form>
                                <Form.Label  htmlFor='startIndex'>Початковий індекс</Form.Label>

                                <FormControl
                                    type='number'
                                    id='startIndex'
                                    placeholder='Start Index'
                                    value={startIndex}
                                    onChange={e => setStartIndex(e.target.value)}
                                />
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>
        );
    };

    const handleBooks = () => {
        if (loading) {
            return (
                <div className='d-flex justify-content-center mt-3'>
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        } else {
            const items = books.map((item) => {
                let thumbnail = '';

                if (item.volumeInfo.imageLinks) {
                    thumbnail = item.volumeInfo.imageLinks.thumbnail;
                }

                return (
                    <div className='col-lg-4 mb-3' key={item.id}>
                        <BookModal
                            thumbnail={thumbnail}
                            title={item.volumeInfo.title}
                            pageCount={item.volumeInfo.pageCount}
                            language={item.volumeInfo.language}
                            authors={item.volumeInfo.authors}
                            publisher={item.volumeInfo.publisher}
                            description={item.volumeInfo.description}
                            previewLink={item.volumeInfo.previewLink}
                            infoLink={item.volumeInfo.infoLink}
                        />
                    </div>
                );
            });
            return (
                <div className='container my-5'>
                    <div className='row'>{items}</div>
                </div>
            );
        }
    };
    return (
        <div className='w-100 h-100'>
            {mainHeader()}
            {handleBooks()}
            <ToastContainer />
        </div>
    );
}

export default App;
