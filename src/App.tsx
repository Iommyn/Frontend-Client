import { BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import './App.css';
import React from 'react';
import TokenExpirationCheck from "./helpers/TokenExpirationCheck";
export default function App() {

    return (
        <BrowserRouter>
            <div className="relative">
              <TokenExpirationCheck />
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
};