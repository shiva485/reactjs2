import React, { Component } from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup,CardSubtitle, CardBody} from 'reactstrap';

import img from '../images/img.jpg';
import pan from '../images/pan.jpg';
import adhar from '../images/adhar.jpg';
import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'


class Contact extends Component {
  render() {
    return (

      <>
      <CardGroup>

      <Card>
        <CardImg top height="200" width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>Shivashankar</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top  height="200" width="100%" src={pan}alt="Card image cap" />
        <CardBody>
          <CardTitle>Pancard</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top height="200" width="100%" src={adhar} alt="Card image cap" />
        <CardBody>
          <CardTitle>Adharcard</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top height="200" width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>shivashankar</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>


    </CardGroup>

<CardGroup>
<Card>
  <CardImg top width="100%"src={f1}  alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>
<Card>
  <CardImg top width="100%" src={f2} alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>
<Card>
  <CardImg top width="100%" src={f1} alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>
<Card>
  <CardImg top width="100%" src={f3} alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>
</CardGroup>
</>

    );
  }
}

export default Contact;