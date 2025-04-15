import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/scss/style.scss';
import Homepage from './components/Homepage.tsx';
import ControlForm from './components/ControlForm.tsx';
import Display from './components/Display.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/control" element={<ControlForm />} />
                <Route path="/display" element={<Display />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

