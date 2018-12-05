import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import Modal from './components/Modal';

class App extends Component {

  render() {
      return (
        <div className="App">
          {ReactDOM.createPortal(
            <h1>Inside the portal</h1>,
            document.getElementById('my-portal')
          )}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <ErrorBoundary>
            <StudentForm />
          </ErrorBoundary>

          <Modal>
            <div class="modal">
              this is the modal window
            </div>
          </Modal>
        </div>
      );
    }
}
export default App;
