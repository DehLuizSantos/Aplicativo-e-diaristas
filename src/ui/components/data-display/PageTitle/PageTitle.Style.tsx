import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + " " + 0}; //40px 0
  text-align: center;
`;
let cor = "red";

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: #6b2aee;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + "0"};
  color: ${({ theme }) => theme.palette.text.primary};

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
