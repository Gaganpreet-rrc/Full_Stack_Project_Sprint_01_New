import { Outlet } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
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
