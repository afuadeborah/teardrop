import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from './components/Display'; 

const root = ReactDOM.createRoot(document.getElementById('display-root'));
root.render(
    <React.StrictMode>
        <div className="d-flex justify-content-center align-content-center">
            <Display />
        </div>
    </React.StrictMode>
);