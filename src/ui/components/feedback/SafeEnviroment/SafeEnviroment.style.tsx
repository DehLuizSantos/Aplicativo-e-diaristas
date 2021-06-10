import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnviromentContainer = styled("div")`
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2) + " " + 0}; //16px

  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 12px;
`;
