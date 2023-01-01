import { Grid } from "@mui/material";

import Header from "components/organisms/Header";

type BasicLayoutProps = {
  children: React.ReactNode;
};

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Grid sx={{ marginTop: "4rem", p: "0 0.5rem" }}>{children}</Grid>
    </div>
  );
};

export default BasicLayout;
