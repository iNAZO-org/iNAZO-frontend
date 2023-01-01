import * as React from "react";
import Box from "@mui/material/Box";
import Head from "next/head";
import { Grid } from "@mui/material";

import Question from "components/organizms/top/Question";
import Links from "components/organizms/top/Links";
import FeatureiNAZO from "components/organizms/top/FeatureiNAZO";
import DescribeiNAZO from "components/organizms/top/DescribeiNAZO";

const App = () => {
  return (
    <div>
      <Head>
        <title>ホームページ</title>
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <DescribeiNAZO />
          <FeatureiNAZO />
          <Question />
          <Links />
        </Grid>
      </Box>
    </div>
  );
};

export default App;
