import React, {Component} from 'react';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

export default class Books extends Component {
    render() {
        return (
            <Container>
                <TabContainer id = "ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <NavItem>
                                    <NavLink eventKey="first">Всі жанри</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Фентезі</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Фантастика</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="fourth">Романи</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="fifth">Дитячі</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent className="mt-3">
                                <TabPane eventKey="first">
                                    <img src="https://images.wallpaperscraft.ru/image/babochka_knigi_art_147399_1280x720.jpg" width="140%" alt=""/>
                                    <p>Text
                                    </p>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <img src="https://images.wallpaperscraft.ru/image/knigi_vintazh_bumaga_otkrytki_bloknot_retro_74362_1280x720.jpg" width="140%" alt=""/>
                                    <p>Text
                                    </p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img src="https://images.wallpaperscraft.ru/image/naushniki_knigi_obrazovanie_121501_1280x720.jpg" width="140%" alt=""/>
                                    <p>Text
                                    </p>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <img src="https://images.wallpaperscraft.ru/image/kot_son_zhurnaly_129465_1280x720.jpg" width="140%" alt=""/>
                                    <p>Text
                                    </p>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <img src="https://images.wallpaperscraft.ru/image/knigi_biblioteka_polki_kollektsiya_120472_1280x720.jpg" width="140%" alt=""/>
                                    <p>Text
                                    </p>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        )
    }
}