import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Nav } from "./nav/Nav";

export function Layout() {
    return(
        <>
            <Nav /> 
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
