import React from "react"
import { BrowserRouteWrapperProps } from "../../types"

const Layout: React.FC<BrowserRouteWrapperProps> = ({ children }) => {
    return (
        <main>{children}</main>
    )
}

export default Layout