import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";
import("./bootstrap.min.css");

const Header = lazy(() => import("./Header"));
const Cardgame = lazy(() => import("./Cardgame"));
const Article = lazy(() => import("./Article"));
render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Cardgame />
      <Article/>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
