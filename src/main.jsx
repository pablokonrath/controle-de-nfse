import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu.jsx';
import Sidebar from './Sidebar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Sidebar />
  </React.StrictMode>,
);
