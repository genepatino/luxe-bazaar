import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { NotFound } from "../NotFound";
import { Layout } from "../../components/Layout";
import { GlobalStyle } from "../../styles/global";
import { ProductDetails } from "../../components/ProductDetails";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/product/:id", element: <ProductDetails /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
