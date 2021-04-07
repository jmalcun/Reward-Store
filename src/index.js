import React from 'react';
import ReactDOM from 'react-dom';
import { HomeScreen } from './components/HomeScreen';
import { AppRouter } from './routes/AppRouter';
import './styles/styles.css'


ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);

