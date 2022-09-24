import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PasswordStrengthBar from 'react-password-strength-bar';
import axios from 'axios';

const Signup = () => {

  const [credential, setCredential] = useState({username: "", email: "", password: "", confirmpassword: ""});
  

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(credential)
    axios.post("http://localhost:8080/signup", {username: credential.username, email: credential.email, password: credential.password})
    .then(response => console.log(response.data));
    setCredential({username: "", email: "", password: "", confirmpassword: ""});
  }

  const changeCredential = (e) => {
    setCredential({...credential, [e.target.name]: e.target.value})
  }

  return (
    <div>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >User name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" name="username" value={credential.username} onChange={changeCredential}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={credential.email} onChange={changeCredential}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label > Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={credential.password} onChange={changeCredential}/>
      </Form.Group>
      <PasswordStrengthBar password={credential.password} barColors={[
          "#B83E26",
          "#FFB829",
          "#009200",
          "#009200",
          "#009200",
          "#009200"
        ]} style={{ width: 200 }} minLength={8} />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" value={credential.confirmpassword} onChange={changeCredential}/>
      </Form.Group>
      { (credential.confirmpassword !== credential.password) ? <p>Those passwords didn’t match. Try again.</p> : <p></p>}

      <Button variant="primary" type="submit" disabled={credential.confirmpassword !== credential.password}>
        Submit
      </Button>

    </Form>
    </Container>
    </div>
  )
}

export default Signup
