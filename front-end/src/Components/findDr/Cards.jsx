import React, { Component } from 'react'
import "./Styles/Card.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Cards = ({ item }) => {
    const { name, pro, proInfo, year, location, add, fees, img } = item;
    const did = item.id;
    const history = useHistory();

    return (

        <div className="inset">
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={img} alt="" className="image" />
                        <Button color="info" className="buttonEffect" onClick={() => history.push({
                            pathname: '/BookNow',
                            state: { id: { did }, name: { name } }
                        })}
                            type="link"
                        > Book Now<br />No Booking fee</Button> <br />
                    </Col>
                    <Col md={8}>
                        <span className="details">
                            <p>{name}</p>
                            <p>{pro}</p></span><span>
                        
                            <p>{proInfo}</p>
                            <p>{year}</p>
                            <p>{location}</p>
                            <p>{add}</p>
                            <p>{fees}</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards;