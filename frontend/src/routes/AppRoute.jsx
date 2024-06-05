import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { ProductList } from "../pages/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { MyPage } from "../pages/MyPage";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { NotFound } from "../pages/NotFound";
import { OrderConfirmation } from "../pages/OrderConfirmation";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:Id" element={<ProductDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};
