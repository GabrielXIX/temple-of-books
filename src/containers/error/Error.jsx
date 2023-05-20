// import {
//   ErrorBoundary,
//   FallbackProps,
//   useErrorBoundary,
// } from "react-error-boundary";
import { Link } from "react-router-dom";

export default function Error({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <h1>Error Ocurred</h1>
      <h3>{error.message}</h3>
      <p>{error.name}</p>
      <p>{error.stack}</p>
      <button
        style={{
          padding: "1rem",
          backgroundColor: "#2f3dff",
          borderRadius: "10px",
          color: "#fff",
        }}
        onClick={resetErrorBoundary}
      >
        Reset Error Boundary
      </button>
      <Link
        style={{
          padding: "1rem",
          backgroundColor: "#4bff41",
          borderRadius: "10px",
        }}
        to={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
}
