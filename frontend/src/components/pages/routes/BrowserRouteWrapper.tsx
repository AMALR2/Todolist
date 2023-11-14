import React, { ReactNode } from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from "../../layout/index"

interface BrowserRouteWrapperProps {
    children: ReactNode;
}

export const BrowserRouteWrapper: React.FC<BrowserRouteWrapperProps> = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {children}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
};
