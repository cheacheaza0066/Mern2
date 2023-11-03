import { Form, Container, Button } from 'react-bootstrap';
import MyNav from '../../components/MyNavBar/MyNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { authenticate, getUser } from '../../service/authorize';
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5555/books/login", formData)
      .then((res) => {
        console.log(res);
        authenticate(res);
        // Redirect to "/create" on successful login
        navigate('/create')

      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data.error);
      });
  };
   useEffect(()=>{
    getUser() && navigate('/')
   })

  return (
    <>
      <MyNav />
      <Container>
        {error && <div className="alert alert-danger">{error}</div>}
        {JSON.stringify(formData)}
        <Form className="mt-4" onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Username" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange} />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
