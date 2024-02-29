import {JSX} from "react";
import React from "react";

import Home from "../pages/Home";
import Play from "../pages/Play";
import Donate from "../pages/Donate";
import Cabinet from "../pages/Cabinet";
import Shop from "../pages/Shop";
import Vote from "../pages/Vote";
import Rules from "../pages/Rules";
import Auth from "../pages/auth/Auth";
import Register from "../pages/auth/register/Register";
import RegisterConfirm from "../pages/auth/register/RegisterConfirm";
import Recovered from "../pages/auth/recovery/Recovery";
import RecoveryConfirm from "../pages/auth/recovery/RecoveryConfirm";


export interface RouteObject {
    path: string
    element: JSX.Element
    exact: boolean
}

/* Если авторизован, то можно заходить только на эти страницы: */
export const privateRoutes = [
    { path: '/', element: <Home/>, exact: true },
    { path: '/donate', element: <Donate/>, exact: true },
    { path: '/shop', element: <Shop/>, exact: true },
    { path: '/play', element:  <Play/>, exact: true },
    { path: '/rules', element: <Rules/>, exact: true },
    { path: '/vote', element: <Vote/>, exact: true },
    { path: '/cabinet', element: <Cabinet/>, exact: true },
];


/* Если не авторизован, то можно заходить только на эти страницы: */
export const publicRoutes = [
    { path: '/auth', element: <Auth/>, exact: true },
    { path: '/recoveryConfirm', element: <RecoveryConfirm/>, exact: true },
    { path: '/recovery', element: <Recovered/>, exact: true },
    { path: '/signup', element: <Register/>, exact: true },
    { path: '/play', element:  <Play/>, exact: true },
    { path: '/', element: <Home/>, exact: true },
    { path: '/rules', element: <Rules/>, exact: true },
    { path: '/confirm', element: <RegisterConfirm/>, exact: true }
];