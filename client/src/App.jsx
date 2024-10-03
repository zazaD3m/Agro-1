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
import PrivateRoute from "./components/PrivateRoute";
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
// PAGES END

// ACCOUNT START
const MyProductsPage = lazy(() => import("./pages/account/MyProductsPage"));
const AddNewProductPage = lazy(
  () => import("./pages/account/AddNewProductPage"),
);
import EditAccountLayout from "./pages/account/EditAccountLayout";
const EditPassword = lazy(() => import("./pages/account/EditPassword"));
const DeactivateAccount = lazy(
  () => import("./pages/account/DeactivateAccount"),
);
const EditAccountInfo = lazy(() => import("./pages/account/EditAccountInfo"));
// ACCOUNT END

// INFO START
import PrivacyPolicy from "./pages/siteinfo/PrivacyPolicy";
import TermsOfUse from "./pages/siteinfo/TermsOfUse";
import FaqAddProduct from "./pages/siteinfo/components/FaqAddProduct";
import Contact from "./pages/siteinfo/Contact";
import Faq from "./pages/siteinfo/Faq";
import AboutUs from "./pages/siteinfo/AboutUs";
import FaqIndex from "./pages/siteinfo/components/FaqIndex";
import FaqAuth from "./pages/siteinfo/components/FaqAuth";
import FaqAuthRegister from "./pages/siteinfo/components/FaqAuthRegister";
import FaqAuthEdit from "./pages/siteinfo/components/FaqAuthEdit";
import FaqAuthRecover from "./pages/siteinfo/components/FaqAuthRecover";
// INFO END

// BLOG START
import BlogPage from "./pages/blog/BlogPage";
import { Spinner } from "./components/ui/spinner";
import FullSizeLoader from "./components/FullSizeLoader";

// BLOG END

// AUTH START
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const ForgotPasswordPage = lazy(
  () => import("./pages/auth/ForgotPasswordPage"),
);
const ResetPasswordPage = lazy(() => import("./pages/auth/ResetPasswordPage"));
const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));
// AUTH START

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<GlobalError />}>
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FullSizeLoader />}>
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
            <Route
              path="add-new-product"
              element={
                <Suspense fallback={<FullScreenLoader />}>
                  <AddNewProductPage />
                </Suspense>
              }
            />
            <Route
              path="my-products"
              element={
                <Suspense fallback={<FullScreenLoader />}>
                  <MyProductsPage />
                </Suspense>
              }
            />
            <Route path="edit" element={<EditAccountLayout />}>
              <Route index element={<Navigate to="info" replace />} />
              <Route
                path="info"
                element={
                  <Suspense fallback={<FullSizeLoader />}>
                    <EditAccountInfo />
                  </Suspense>
                }
              />
              <Route
                path="password"
                element={
                  <Suspense fallback={<FullScreenLoader />}>
                    <EditPassword />
                  </Suspense>
                }
              />
              <Route
                path="deactivate"
                element={
                  <Suspense fallback={<FullScreenLoader />}>
                    <DeactivateAccount />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
        {/* == ACCOUNT PATHS END */}
        {/* == INFO PATHS END */}
        <Route path="info">
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="faq" element={<Faq />}>
            <Route index element={<FaqIndex />} />
            <Route
              path="rogor-davamato-gancxadeba"
              element={<FaqAddProduct />}
            />
            <Route path="registracia-angarishis-martva" element={<FaqAuth />}>
              <Route
                path="rogor-davregistrirde"
                element={<FaqAuthRegister />}
              />
              <Route
                path="rogor-davaredaqtiro-angarishi"
                element={<FaqAuthEdit />}
              />
              <Route
                path="rogor-aRvadgino-angarishi"
                element={<FaqAuthRecover />}
              />
            </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="about-us" element={<AboutUs />} />

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
          <Route
            path="login"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="forgot-password"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <ForgotPasswordPage />
              </Suspense>
            }
          />
          <Route
            path="reset-password/:resetToken"
            element={
              <Suspense fallback={<FullScreenLoader />}>
                <ResetPasswordPage />
              </Suspense>
            }
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
