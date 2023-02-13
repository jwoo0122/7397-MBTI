import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';

const rootElement = document.getElementById('root');

if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(<App test={'hello, world!'} />);
}
