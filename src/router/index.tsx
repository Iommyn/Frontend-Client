import Home from "../pages/Home";
import Play from "../pages/Play";
import Donate from "../pages/Donate";
import Cabinet from "../pages/Cabinet";
import Shop from "../pages/Shop";
import Vote from "../pages/Vote";
import Rules from "../pages/Rules";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import RegisterConfirm from "../pages/RegisterConfirm";
import {JSX} from "react";
import React from "react";


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
    { path: '/signup', element: <Register/>, exact: true },
    { path: '/play', element:  <Play/>, exact: true },
    { path: '/', element: <Home/>, exact: true },
    { path: '/rules', element: <Rules/>, exact: true },
    { path: '/Confirm', element: <RegisterConfirm/>, exact: true }
];