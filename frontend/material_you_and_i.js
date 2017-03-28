import React from 'react';
import {render} from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  render(<App/>, root);
});
