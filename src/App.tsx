import { useTranslation } from "react-i18next";

function App() {
  const [t] = useTranslation("global");
  return <p>{t("saludo")}</p>;
}

export default App;
