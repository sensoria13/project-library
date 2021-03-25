import React, {Component} from 'react';
import {Container, Nav, Navbar, NavLink, FormControl, Form, Button} from "react-bootstrap";
import logo from './book-logo-one.jpg'
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Books from "../Pages/Books";
import Authors from "../Pages/Authors";
import Genres from "../Pages/Genres";
import Contacts from "../Pages/Contacts";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            /> Бібліотека
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Nav className="mr-auto">
                                    <NavLink href="/"> Головна </NavLink>
                                    <NavLink href="/Books"> Книги </NavLink>
                                    <NavLink href="/Authors"> Автори </NavLink>
                                    <NavLink href="/Genres"> Жанри </NavLink>
                                    <NavLink href="/Contacts"> Контакти </NavLink>
                                </Nav>
                                <Form inline >
                                    <FormControl
                                        type="text"
                                        placeholder="Пошук"
                                        classname="mr-sm-2"
                                    />
                                    <Button variant="outline-info">Пошук</Button>
                                </Form>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Books" component={Books}/>
                        <Route exact path="/Authors" component={Authors}/>
                        <Route exact path="/Genres" component={Genres}/>
                        <Route exact path="/Contacts" component={Contacts}/>
                    </Switch>
                </Router>
            </>
        );
    }
}