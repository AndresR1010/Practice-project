import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Signin = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }

    return (
    <>    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" id="username-input">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" id="password-input">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
    <Button>Signup as a Candidate</Button>
    <Button onClick={() => props.onFormSwitch ('voterSignup')}>Signup as a Voter</Button>
    </>
    )
}