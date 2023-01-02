import { Container } from "@mui/material";

import Header from "components/organisms/Header";
import { BaseProps } from "types";

type BasicLayoutProps = BaseProps & {
  children: React.ReactNode;
};

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Container sx={{ marginTop: "4rem" }}>{children}</Container>
    </div>
  );
};

export default BasicLayout;
