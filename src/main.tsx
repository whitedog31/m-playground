import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import 'antd/dist/antd.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
