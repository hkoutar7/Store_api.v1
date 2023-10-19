import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("./components/NavBar"));
const Slider = lazy(() => import("./components/Slider"));
const ListProducts = lazy(() => import("./components/ListProducts"));
const About = lazy(() => import("./components/About"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Loader = lazy(() => import("./components/Loader"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Slider />
                <ListProducts />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
              </>
            }
          />
          <Route
            path="/products/:pid/"
            element={
              <>
                <NavBar />
                <ProductDetails />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
