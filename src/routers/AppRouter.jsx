// React Router
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router"

// Pages
import CartPage from "@/pages/Cart/CartPage"
import { HomePage } from "@/pages/Home/HomePage"
import { ShopPage } from "@/pages/Shop/ShopPage"
import { ProductPage } from "@/pages/Product/ProductPage"
import { CheckoutPage } from "@/pages/Checkout/CheckoutPage"

// Layouts
import { MainLayout } from "@/components/layouts/MainLayout/MainLayout"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}