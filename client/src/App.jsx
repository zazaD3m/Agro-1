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
import FullSizeLoader from "./components/FullSizeLoader";
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
import MyProductsPage from "./pages/account/MyProductsPage";
const AddNewProductPage = lazy(
  () => import("./pages/account/AddNewProductPage"),
);
import EditAccountLayout from "./pages/account/EditAccountLayout";
import EditPassword from "./pages/account/EditPassword";
import DeactivateAccount from "./pages/account/DeactivateAccount";
import EditAccountInfo from "./pages/account/EditAccountInfo";
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
// BLOG END

// AUTH START
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import RegisterPage from "./pages/auth/RegisterPage";
import TestComp from "./components/TestComp";
import Test from "./pages/account/components/Test";
import MyProductsActive from "./pages/account/components/MyProductsActive";
import MyProductsArchive from "./pages/account/components/MyProductsArchive";
// AUTH START

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<GlobalError />}>
      <Route path="test" element={<Test />} />
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FullSizeLoader className="min-h-svh" />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="catalog/:catId?/:mainCategory?/:subCategory?/:category?">
          <Route
            index
            element={
              <Suspense fallback={<FullSizeLoader />}>
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
              <Suspense fallback={<FullSizeLoader />}>
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
                <Suspense fallback={<FullSizeLoader />}>
                  <AddNewProductPage />
                </Suspense>
              }
            />
            <Route path="my-products" element={<MyProductsPage />}>
              <Route path="active" element={<MyProductsActive />} />
              <Route path="archive" element={<MyProductsArchive />} />
            </Route>
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
        <Route path="*" element={<PageNotFound />} />
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
      <Route path="test" element={<TestComp />} />
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
