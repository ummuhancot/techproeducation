import React from 'react'
import { Button, Card, CardBody } from 'react-bootstrap';
import { PiConfetti } from 'react-icons/pi';


export const SinlePrograms = (props) => {
    const {title,img,SeeMore,button} = props;

  return (
    <Card
      className={`mb-4 mx-auto ${celebrated && "bg-info-subtle"}`}
      style={{ maxWidth: "540px" }}
    >
      <CardBody>
        <Row>
          <Col>
            <img src={`/img/programs/${img}`} floid roundedCircle />
          </Col>
          <Col xs={12} md={8}>
            <h5 className="card-title">{title}</h5>
            <a href={SeeMore} className="btn btn-primary">
              {button}
            </a>
          </Col>
          <Button
            variant="link"
            className="text-decoration-none text-primary"
            onClick={() => button(id)}
          >
            <PiConfetti
            size={32}/>
            <i className="bi bi-arrow-right"></i>
            {button}
          </Button>
        </Row>
      </CardBody>
    </Card>
  );
}
