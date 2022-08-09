import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const AddStudent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8080/student", {
            id: id,
            name: name,
            address: address
          })
          .then((response) => {
            console.log(response)
          });
    }
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();

    const changeValue = (e) => {
        if(e.target.name === "id"){
            setId(e.target.value)
        } else if(e.target.name === "name"){
            setName(e.target.value)
        } else if(e.target.name === "address"){
            setAddress(e.target.value)
        }
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Id</Form.Label>
          <Form.Control value={id} name="id" onChange={changeValue} type="text" placeholder="Enter Id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} name="name" onChange={changeValue} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control value={address} name="address" onChange={changeValue} type="text" placeholder="Enter Address" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  )
}

export default AddStudent
