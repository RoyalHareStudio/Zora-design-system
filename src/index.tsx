export * from './components/CButton';
export * from './components/CNavBar';
export * from './components/CSideNav';
export * from './wrapper/WSection';
export * from './wrapper/WMain';
export * from './wrapper/WHeader';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if (root != null) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

