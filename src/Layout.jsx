
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";


export default function Layout() {
    return (
        <>
            <Header/>
            <main className="main-container">
                <Aside/>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}