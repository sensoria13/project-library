import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, CardImg, Container} from "react-bootstrap";
//import Carousel from "react-bootstrap/Carousel";

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4"  >Text1</h2>
                    <CardDeck>
                        <Card bg="light" border="primary" text="primary">
                            <CardImg variant="top" wirth="100%"  src="https://images.wallpaperscraft.ru/image/knigi_biblioteka_fotoshop_127118_1280x720.jpg" />
                            <Card.Body>
                                <Card.Title>Text2</Card.Title>
                                <Card.Text>text3</Card.Text>
                                <Button variant="primary">Button1</Button>
                            </Card.Body>
                        </Card>

                        <Card bg="light" border="primary" text="primary">
                            <CardImg variant="top" wirth="100%"  src="https://images.wallpaperscraft.ru/image/biblioteka_knigi_chtenie_125466_1280x720.jpg" />
                            <Card.Body>
                                <Card.Title>Text2</Card.Title>
                                <Card.Text>text3</Card.Text>
                                <Button variant="primary">Button2</Button>
                            </Card.Body>
                        </Card>

                        <Card bg="light" border="primary" text="primary">
                            <CardImg variant="top" wirth="100%"  src="https://images.wallpaperscraft.ru/image/biblioteka_mnogoiarusnyj_arhitektura_139118_1280x720.jpg" />
                            <Card.Body>
                                <Card.Title>Text2</Card.Title>
                                <Card.Text>text3</Card.Text>
                                <Button variant="primary">Button3</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        )
    }
}