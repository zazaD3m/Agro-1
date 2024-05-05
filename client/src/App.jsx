import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
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
// LAYOUTS END

// PAGES START
const HomePage = lazy(() => import("./pages/home/HomePage"));
const CatalogPage = lazy(() => import("./pages/catalog/CatalogPage"));
const AccountPage = lazy(() => import("./pages/account/AccountPage"));
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AccountLayout from "./components/layout/AccountLayout";
import PrivateRoute from "./components/PrivateRoute";
import MyProductsPage from "./pages/account/MyProductsPage";
import EditAccountPage from "./pages/account/EditAccountPage";
import AddNewProductPage from "./pages/account/AddNewProductPage";
// PAGES END

// INFO START
import PrivacyPolicy from "./pages/siteinfo/PrivacyPolicy";
import TermsOfService from "./pages/siteinfo/TermsOfService";
import InfoAddProduct from "./pages/siteinfo/InfoAddProduct";
// INFO END

// BLOG START
import BlogPage from "./pages/blog/BlogPage";
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
        <Route path="catalog">
          <Route
            index
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
        </Route>
        {/* == ACCOUNT PATHS START */}
        <Route element={<PrivateRoute />}>
          <Route element={<AccountLayout />}>
            <Route path="account">
              <Route
                index
                element={
                  <Suspense fallback={<FullScreenLoader />}>
                    <AccountPage />
                  </Suspense>
                }
              />
              <Route path="my-products" element={<MyProductsPage />} />
              <Route path="edit" element={<EditAccountPage />} />
              <Route path="add-new-product" element={<AddNewProductPage />} />
            </Route>
          </Route>
        </Route>
        {/* == ACCOUNT PATHS END */}
        {/* == INFO PATHS END */}
        <Route path="info">
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfService />} />
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
        <Route element={<AuthLayout />}>
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
          <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="auth/reset-password/:resetToken"
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
