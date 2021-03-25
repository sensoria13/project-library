import React, {Component} from 'react';
//import Carousel from "bootstrap/js/src/carousel";
//import Carousel from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img3 from '../assets/img3.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Sandcube"
                    />
                    <Carousel.Caption>
                        <h3>Sandcube</h3>
                        <p>Sandcube</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Pinkcube"
                    />
                    <Carousel.Caption>
                        <h3>Pinkcube</h3>
                        <p>Pinkcube</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Darkcube"
                    />
                    <Carousel.Caption>
                        <h3>Darkcube</h3>
                        <p>Darkcube</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;