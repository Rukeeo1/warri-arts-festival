import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const root = document.getElementById('root');

const Hello = () => {
  return (
    <div>
      Hello
    </div>
  )
}

ReactDom.render(<App />, root);
