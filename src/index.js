import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";

const Header = lazy(() => import("./Header"));
const Cardgame = lazy(() => import("./Cardgame"));
render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Cardgame />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
