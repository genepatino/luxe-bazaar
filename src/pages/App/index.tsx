import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { NotFound } from "../NotFound";
import { Layout } from "../../components/Layout";
import { GlobalStyle } from "../../styles/global";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    /* { path: "/clothes", element: <Clothes /> },
    { path: "/shoes", element: <Home /> },
    { path: "/jewelry", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/miscellaneous", element: <Home /> }, */
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
