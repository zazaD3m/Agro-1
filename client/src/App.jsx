import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { rehydrateState } from "./app/actions";
import { store } from "./app/store";

// ERRORS START
import GlobalError from "./components/errors/GlobalError";
import PageNotFound from "./components/errors/PageNotFound";
// ERRORS END

// COMPONENTS START
import FullScreenLoader from "./components/FullScreenLoader";
import RejectAuthenticatedUser from "./components/RejectAuthenticatedUser";
// COMPONENTS END

// LAYOUTS START
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import AccountLayout from "./pages/account/AccountLayout";
// LAYOUTS END

// PAGES START
const HomePage = lazy(() => import("./pages/home/HomePage"));
const CatalogPage = lazy(() => import("./pages/catalog/CatalogPage"));
const ProductPage = lazy(() => import("./pages/product/ProductPage"));
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import MyProductsPage from "./pages/account/MyProductsPage";
import AddNewProductPage from "./pages/account/AddNewProductPage";
// PAGES END

// INFO START
import PrivacyPolicy from "./pages/siteinfo/PrivacyPolicy";
import TermsOfUse from "./pages/siteinfo/TermsOfUse";
import InfoAddProduct from "./pages/siteinfo/InfoAddProduct";
import Contact from "./pages/siteinfo/Contact";
import Faq from "./pages/siteinfo/Faq";
// INFO END

// BLOG START
import BlogPage from "./pages/blog/BlogPage";
import EditAccountLayout from "./pages/account/EditAccountLayout";
import EditPassword from "./pages/account/EditPassword";
import DeactivateAccount from "./pages/account/DeactivateAccount";
import EditAccountInfo from "./pages/account/EditAccountInfo";
// BLOG END

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<GlobalError />}>
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FullScreenLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="catalog/:catId?/:mainCategory?/:subCategory?/:category?">
          <Route
            index
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
        </Route>
        {/* == PRODUCT PATHS START */}
        <Route path="product/:productId/:catId/:mainCategory/:subCategory?/:category/:productTitle">
          <Route
            index
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <ProductPage />
              </Suspense>
            }
          />
        </Route>
        {/* == PRODUCT PATHS END */}
        {/* == ACCOUNT PATHS START */}
        <Route element={<PrivateRoute />}>
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<Navigate to="my-products" replace />} />
            <Route path="add-new-product" element={<AddNewProductPage />} />
            <Route path="my-products" element={<MyProductsPage />} />
            <Route path="edit" element={<EditAccountLayout />}>
              <Route index element={<Navigate to="info" replace />} />
              <Route path="info" element={<EditAccountInfo />} />
              <Route path="password" element={<EditPassword />} />
              <Route path="deactivate" element={<DeactivateAccount />} />
            </Route>
          </Route>
        </Route>
        {/* == ACCOUNT PATHS END */}
        {/* == INFO PATHS END */}
        <Route path="info">
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-product" element={<InfoAddProduct />} />
        </Route>
        {/* == INFO PATHS END */}
        {/* == BLOG PATHS END */}
        <Route path="blog">
          <Route index element={<BlogPage />} />
        </Route>
        {/* == BLOG PATHS END */}
      </Route>
      {/* == AUTH PATHS START */}
      <Route element={<RejectAuthenticatedUser />}>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="reset-password/:resetToken"
            element={<ResetPasswordPage />}
          />
        </Route>
      </Route>
      {/* == AUTH PATHS END */}
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

window.addEventListener("storage", (event) => {
  if (event.key === "persist:root" && event.newValue) {
    store.dispatch(rehydrateState());
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
