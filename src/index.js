import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './mainRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);

