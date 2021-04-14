import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './BookModal.css';

const BookModal = ({
                      thumbnail,
                      title,
                      pageCount,
                      language,
                      description,
                      authors,
                      publisher,
                      infoLink
                  }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className=' mb-3 d-flex justify-content-center'>
                <img src={thumbnail} alt={title} style={{ height: '250px' }} />
            </div>

            <div className='mb-5 d-flex justify-content-center'>
                <Button className='d-flex justify-content-center' style={{ width: '200px' }} variant='outline-light' onClick={handleShow}>
                    Більше інформації
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='text-style' closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-bg'>
                    <img src={thumbnail} alt={title} style={{ height: '300px' }} />
                    <div>
                        <p>К-сть сторінок : {pageCount}</p>
                        <p>Мова : {language}</p>
                        <p>Автори : {authors}</p>
                        <p>Видавництво : {publisher}</p>
                        <p>Анотація : {description}</p>
                    </div>
                </Modal.Body>

                <Modal.Footer className='modal-bg'>
                    <Button variant='danger' onClick={handleClose}>
                        Закрити
                    </Button>

                    <Button variant='outline-info' onClick={handleClose}>
                        <a
                            href={infoLink}
                            className='btn-link'
                            color='white'
                            type='button'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Джерело
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
         </>
    );
};

export default BookModal;
