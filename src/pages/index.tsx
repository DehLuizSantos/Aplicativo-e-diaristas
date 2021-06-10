import Head from "next/head";
import styles from "@styles/Home.module.css";

import SafeEnviroment from "ui/components/feedback/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />

      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha seu endereço e veja todas ás profissionais disponiveis na sua região"
        }
      />

      <UserInformation
        name={"André Luiz Santos"}
        picture={"http://github.com/DehLuizSantos.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
