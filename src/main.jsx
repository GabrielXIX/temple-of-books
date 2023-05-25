/*
  Project Import Structure:
    components/objects/constants/functions
    packages/hooks
    styles
*/
import App from "./App";
import ExplorePage from "./containers/ExplorePage";
import BookTemplatePage from "./containers/BookTemplatePage";
import ReviewsPage from "./containers/ReviewsPage";
import BookshelfPage from "./containers/BookshelfPage";
import Error from "./containers/error/Error";
import PathErrorPage from "./containers/error/PathErrorPage";
import LoginPage from "./containers/login/LoginPage";
import SignupPage from "./containers/signup/SignupPage";
import AccountPage from "./containers/AccountPage";
import { AuthProvider } from "./contexts/AuthContext";
import { RequireAuth } from "./components/RequireAuth";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { GlobalStyles } from "./styles/GlobalStyles.style";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("App Error")}>
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: "/explore",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Explore Error")}>
        <ExplorePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/explore/:bookId",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Template Error")}>
        <BookTemplatePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/reviews",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Reviews Error")}>
        <ReviewsPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/bookshelf",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Bookshelf Error")}>
        <RequireAuth>
          <BookshelfPage />
        </RequireAuth>
      </ErrorBoundary>
    ),
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Login Error")}>
        <LoginPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/signup",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Signup Error")}>
        <SignupPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/account",
    element: (
      <ErrorBoundary FallbackComponent={Error} onError={() => console.log("Account Error")}>
        <AccountPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <PathErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
