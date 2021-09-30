import './App.css';
import React from 'react';
import { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Hobbies from './Components/Hobbies';
import Resume from './Components/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Task = ({ number, text }) => {
  let id = '';
  if (window.location.pathname == '/' && number == 1) {
    id = 'Active';
  }
  else if (window.location.pathname == '/education' && number == 2) {
    id = 'Active';
  }
  else if (window.location.pathname == '/experience' && number == 3) {
    id = 'Active';
  }
  else if (window.location.pathname == '/projects' && number == 4) {
    id = 'Active';
  }
  else if (window.location.pathname == '/hobbies' && number == 5) {
    id = 'Active';
  }
  return <div className='task'>
    <span className='task-number' id={id} >{number}</span>
    <div>{text}</div>
  </div>
}

const TaskContainer = () => {
  return <>
    <div id='tasks'>
      <Task number='1' text='Personal Details' />
      <span className='dash'></span>

      <Task number='2' text='Education' />
      <span className='dash'></span>

      <Task number='3' text='Experience' />
      <span className='dash'></span>

      <Task number='4' text='Projects' />
      <span className='dash'></span>

      <Task number='5' text='Hobbies/Achievements' />
    </div>
  </>
}

const CautionMessage = () => {
  return <>
    <p style={{ fontSize: 12 }}>Do not worry, your previous data is already saved.</p>
  </>
}

function App() {

  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <h1>We create your resume!</h1>

        <form noValidate>

          <TaskContainer />

          <Router>

            <div id='questions-container'>

              <Switch>

                <Route path='/' exact >
                  <CautionMessage />
                <PersonalDetails setPage={setPage} />
                </Route>

                <Route path='/education' >
                  <CautionMessage />
                  <Education setPage={setPage} />
                </Route>

                <Route path='/experience' >
                  <CautionMessage />
                  <Experience setPage={setPage} />
                </Route>

                <Route path='/projects' >
                  <CautionMessage />
                  <Projects setPage={setPage} />
                </Route>

                <Route path='/hobbies' >
                  <CautionMessage />
                  <Hobbies setPage={setPage} />
                </Route>

                <Route path='/success'  >
                  <h1>Your resume is Ready!</h1>
                  <Resume setPage={setPage} />
                </Route>

              </Switch>

            </div>

          </Router>

        </form>

      </div>
    </div>
  );
}

export default App;
