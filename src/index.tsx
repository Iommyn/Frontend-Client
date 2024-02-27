import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        <ToastContainer position="bottom-center" autoClose={1000} />
    </Provider>,
)