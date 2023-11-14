import React from "react";
import { BrowserRouteWrapper } from "./BrowserRouteWrapper";
import {Route} from 'react-router-dom'
import TodoPage from "../public/todoPage";

export const RouterHandler:React.FC = () => {
    return (
        <BrowserRouteWrapper>
            <Route path="/" element={<TodoPage/>}/>
        </BrowserRouteWrapper>
    )
}