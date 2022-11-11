import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import react from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const greetingMessage = react.createElement("h1", null, "Hello world")
const messageJsx = <h1>hello workshop</h1>

root.render(greetingMessage);
root.render(messageJsx);