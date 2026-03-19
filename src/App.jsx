import React from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Information Portal</h1>
      </header>
      <main>
        <FormComponent />
      </main>
      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#666' }}>

      </footer>
    </div>
  );
}

export default App;
