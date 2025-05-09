
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import './index.css'


export default function Layout() {
    const { pathname } = useLocation();

    const hideAsideOn = ["/news", "/events"];
    const showAside = !hideAsideOn.includes(pathname);

    return (
        <div className="container mx-auto max-w-[1512px]">
            <Header />
            <main className="flex gap-x-[2%]">
                {showAside && (
                    <div className="w-[394px] flex-shrink-0 pt-6 pb-6 pr-6">
                    <Aside />
                </div>
                
                )}
                <div className="flex-1 py-6">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
