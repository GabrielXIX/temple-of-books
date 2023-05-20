/*
  Project Import Structure:
    components/objects/constants/functions
    packages/hooks
    styles
*/
import App from "./App";
import ExplorePage from "./containers/explore/ExplorePage";
import BookTemplatePage from "./containers/bookTemplate/BookTemplatePage";
import ReviewsPage from "./containers/reviews/ReviewsPage";
import BookshelfPage from "./containers/bookshelf/BookshelfPage";
import Error from "./containers/error/Error";
import PathErrorPage from "./containers/error/PathErrorPage";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { GlobalStyles } from "./styles/GlobalStyles.style";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        FallbackComponent={Error}
        onError={() => console.log("App Error")}
      >
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: "/explore",
    element: (
      <ErrorBoundary
        FallbackComponent={Error}
        onError={() => console.log("Explore Error")}
      >
        <ExplorePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/explore/:bookId",
    element: (
      <ErrorBoundary
        FallbackComponent={Error}
        onError={() => console.log("Template Error")}
      >
        <BookTemplatePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/reviews",
    element: (
      <ErrorBoundary
        FallbackComponent={Error}
        onError={() => console.log("Reviews Error")}
      >
        <ReviewsPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/bookshelf",
    element: (
      <ErrorBoundary
        FallbackComponent={Error}
        onError={() => console.log("Bookshelf Error")}
      >
        <BookshelfPage />
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
