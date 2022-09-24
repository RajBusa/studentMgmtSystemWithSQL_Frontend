import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [credential, setCredential] = useState({email: "", password: ""});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault() 
    // console.log(credential)
    axios.post("http://localhost:8080/login", {email: credential.email, password: credential.password})
    .then(response => {
      console.log(response.data)
      if(response !== null){
        navigate("/studentlist");
      }
    })
    .catch(error => console.error(error));
    setCredential({username: "", email: "", password: "", confirmpassword: ""});
  }

  const changeCredential = (e) => {
    setCredential({...credential, [e.target.name]: e.target.value})
  }



  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={credential.email} onChange={changeCredential}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={credential.password} onChange={changeCredential}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Login
