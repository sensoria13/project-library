import React, {Component} from 'react';
import {Form, Container, FormGroup, FormLabel, FormControl, FormText, FormCheck, Button} from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Зв'яжіться з нами</h1>
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="Введіть email"/>
                        <FormText>
                            Ми ніколи та нікому не розголошуємо вашу приватну інформацію.
                        </FormText>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <FormLabel>Напишіть сюди своє повідмлення</FormLabel>
                        <FormControl as="textarea" rows="3"/>
                    </FormGroup>

                    <FormGroup controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="Я не робот"/>
                    </FormGroup>
                    <Button variant="primary" type="submit">Підтвердити</Button>
                </Form>
            </Container>
        )
    }
}