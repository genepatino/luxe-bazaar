import { useTranslation } from "react-i18next";

function Home() {
  const [t] = useTranslation("global");
  return <p>{t("saludo")}</p>;
}

export { Home };
