import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

export default class Genres extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="mt-5">
                            <img width={150}
                                 className="mr-3"
                                 src="https://book-ye.com.ua/upload/resize_cache/iblock/a5e/520_860_1/908f1e91_ee9d_11ea_813d_000c29ae1566_44b6e779_ee9e_11ea_813d_000c29ae1566.jpg"
                                 alt=""
                            />
                            <Media.Body>
                                <h5>Заголовок</h5>
                                <p>Text</p>
                            </Media.Body>
                        </Media>

                        <Media className="mt-5">
                            <img width={150}
                                 className="mr-3"
                                 src="https://book-ye.com.ua/upload/iblock/688/6503b404_c197_11e8_810b_000c29ae1566_2e915422_94ff_11ea_8136_000c29ae1566.jpg"
                                 alt=""
                            />
                            <Media.Body>
                                <h5>Заголовок</h5>
                                <p>Text</p>
                            </Media.Body>
                        </Media>

                        <Media className="mt-5">
                            <img width={150}
                                 className="mr-3"
                                 src="https://book-ye.com.ua/upload/resize_cache/iblock/bfc/520_860_1/5ab32b8c_8558_11e6_80c0_000c29ae1566_734e41a5_1b0b_11e7_80c5_000c29ae1566.jpg"
                                 alt=""
                            />
                            <Media.Body>
                                <h5>Заголовок</h5>
                                <p>Text</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5" >Категорії</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Text</ListGroup.Item>
                                <ListGroup.Item>Text</ListGroup.Item>
                                <ListGroup.Item>Text</ListGroup.Item>
                                <ListGroup.Item>Text</ListGroup.Item>
                                <ListGroup.Item>Text</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>Text</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}