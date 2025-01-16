import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Header from './Header';
import App from './App';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen bg-background '>
    <p>Hui</p>
    <App></App>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
