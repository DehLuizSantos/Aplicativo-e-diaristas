import React from "react";

interface PageTitleProps {
  title: JSX.Element | String;
  subtitle?: String;
}

import { PageTitleContainer, PageTitleStyled } from "./PageTitle.Style";

import { Container } from "@material-ui/core";
import { jsx } from "@emotion/react";

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled> {props.title} </PageTitleStyled>

      {props.subtitle}
    </PageTitleContainer>
  );
};

export default PageTitle;
