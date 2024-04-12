import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
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
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
// PAGES END

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<GlobalError />}>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Navigate replace to="login" />} />
        <Route element={<RejectAuthenticatedUser />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="reset-password/:resetToken"
            element={<ResetPasswordPage />}
          />
        </Route>
      </Route>
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FullScreenLoader />}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
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
