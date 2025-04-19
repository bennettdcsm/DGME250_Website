
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";


export default function Layout() {
    const {pathname} = useLocation();

    const hideAsideOn = ["/news", "/events"];
    const showAside = !hideAsideOn.includes(pathname);

    return (
        <div className="App">
            <Header/>
            <main className="main-container">
                {showAside && <Aside/>}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
