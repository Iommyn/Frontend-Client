import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.css';
import React, {useEffect} from 'react';
import {login} from "./store/user/userSlice";
import {useAppDispatch} from "./store/hooks";
import {getTokenFromLocalStorage} from "./helpers/localstorage.helper";
import {IUser} from "./types/types";
import {toast} from "react-toastify";


export default function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = getTokenFromLocalStorage();
        if (token) {
            const tokenExpiration = JSON.parse(localStorage.getItem('tokenExpiration'));
            const currentTime = new Date().getTime();
            if (currentTime > tokenExpiration) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('tokenExpiration');
                localStorage.removeItem('isAuth');
                toast.info('Срок действия токена истек, пожалуйста, авторизуйтесь снова');
            } else {
                const user: IUser = {token};
                dispatch(login(user));
                localStorage.setItem('isAuth', JSON.stringify(true));
            }
        }
    }, [dispatch]);


    return (
        <BrowserRouter>
            <div className="relative">
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
};