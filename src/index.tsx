import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from "./utill/theme";
import {ThemeProvider} from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);