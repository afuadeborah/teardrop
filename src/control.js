import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ControlForm from './components/ControlForm'; 

const root = ReactDOM.createRoot(document.getElementById('control-root'));
root.render(
    <React.StrictMode>
        <ControlForm />
    </React.StrictMode>
);