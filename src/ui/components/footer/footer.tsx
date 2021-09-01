import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  Applist,
} from "./footer.style";
import { Typography, Box } from "@material-ui/core";
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza de sua casa garantimos a melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo o pais.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>

          <Applist>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"AppStore"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"AppStore"} />
              </a>
            </li>
          </Applist>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
