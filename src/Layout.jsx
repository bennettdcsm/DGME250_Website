
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import './index.css'


export default function Layout() {
    const {pathname} = useLocation();

    const hideAsideOn = ["/news", "/events"];
    const showAside = !hideAsideOn.includes(pathname);

    return (
        <div className="container mx-auto max-w-[1512px]">
            <Header/>
            <main className="flex justify-center">
                {showAside && <Aside/>}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
