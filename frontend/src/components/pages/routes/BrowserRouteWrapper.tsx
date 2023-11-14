import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from "../../layout/index"
import { BrowserRouteWrapperProps } from "../../../types";


export const BrowserRouteWrapper: React.FC<BrowserRouteWrapperProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {children}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
