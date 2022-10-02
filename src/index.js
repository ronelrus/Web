import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home/>
        <About/>
        <Projects/>
    </React.StrictMode>
);

reportWebVitals();
