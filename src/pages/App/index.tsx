import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { NotFound } from "../NotFound";
import { Layout } from "../../components/Layout";
import { GlobalStyle } from "../../styles/global";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
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
