import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>404 Not Found</p>
      <p>💿 Hey developer 👋</p>
      <p>
        You can provide a way better UX than this when your app throws errors by
        providing your own ErrorBoundary or errorElement prop on your route.
      </p>
    </div>
  );
};

export default ErrorPage;
