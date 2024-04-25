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
import PrivacyPolicy from "./pages/siteinfo/PrivacyPolicy";
import TermsOfService from "./pages/siteinfo/TermsOfService";
// PAGES END

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
            path="/catalog/*"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          {/* <Route
            path=":mainCat/:subCat/:subCatItem"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path=":mainCat/:subCat"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path=":mainCat"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <CatalogPage />
              </Suspense>
            }
          /> */}
        </Route>
        <Route path="account">
          <Route
            index
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <AccountPage />
              </Suspense>
            }
          />
          <Route path="my-products" element={<AccountPage />} />
          <Route path="edit" element={<AccountPage />} />
          <Route path="add-new-product" element={<AccountPage />} />
        </Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfService />} />
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
