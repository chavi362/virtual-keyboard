import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store.js';
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store} >
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
)
