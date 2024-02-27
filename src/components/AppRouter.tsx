import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index';
import { useEffect, useState } from "react";
import Loader from "./UI/Loader/Loader";
import React from 'react';
import {useAuth} from "../hooks/useAuth";

const AppRouter = () => {
    const isAuth = useAuth();

    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setLoading(true);

        const handlePageLoaded = () => {
            setTimeout(() => {
                setLoading(false);
                setPageLoaded(true);
            }, 2000);
        }

        handlePageLoaded();

        return () => {
            setPageLoaded(false);
        };
    }, [location]);

    if (isLoading || !pageLoaded) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth ? (
                privateRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))
            ) : (
                publicRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))
            )}

            <Route
                path="*"
                element={
                    isAuth
                        ? <Navigate to="/" replace />
                        : <Navigate to="/auth" replace />
                }
            />
        </Routes>
    );
};

export default AppRouter;