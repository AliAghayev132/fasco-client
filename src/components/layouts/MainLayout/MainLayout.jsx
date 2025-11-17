// React Router
import { Outlet } from "react-router";

// Components
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}