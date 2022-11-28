import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Signin } from './components/signin';
import { CandidateSignup } from './components/candidate-signup';
import { VoterSignup } from './components/voter-signup';

function App() {
  const[currentForm, setCurrentForm] = useState('Signin');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "Signin" ? <Signin onFormSwitch={toggleForm} /> : <VoterSignup onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;
