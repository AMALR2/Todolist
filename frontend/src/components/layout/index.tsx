import React,{ReactNode} from "react"
interface BrowserRouteWrapperProps {
    children: ReactNode;
}
const Layout:React.FC<BrowserRouteWrapperProps>=({children})=>{
    return(
        <main>{children}</main>
    )
}

export default Layout