import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App'
import styles from './components/App/App.scss'

let element = React.createElement(App, {});

render(element, document.querySelector('.container'))
