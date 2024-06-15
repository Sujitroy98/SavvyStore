import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/layout/AppLayout";
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from "./components/scollTop/ScrollTop";
import CartPage from "./pages/CartPage";
import AllProduct from "./pages/AllProduct";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddProductPage from "./components/Admin/AddProductPage";
import UpdateProduct from "./components/Admin/UpdateProduct";
import { ContextProvider } from "./context/GlobalContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
      />
    </ContextProvider>
  );
}

export default App;
