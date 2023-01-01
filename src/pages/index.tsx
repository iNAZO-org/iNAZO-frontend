import * as React from "react";
import Box from "@mui/material/Box";
import Head from "next/head";
import { Grid } from "@mui/material";

import Question from "components/organisms/top/Question";
import Links from "components/organisms/top/Links";
import FeatureiNAZO from "components/organisms/top/FeatureiNAZO";
import DescribeiNAZO from "components/organisms/top/DescribeiNAZO";
import Header from "components/organisms/Header";
import BasicLayout from "components/templates/BasicLayout";

const App = () => {
  return (
    <div>
      <Head>
        <title>ホームページ</title>
      </Head>
      <BasicLayout>
        <DescribeiNAZO />
        <FeatureiNAZO />
        <Question />
        <Links />
      </BasicLayout>
    </div>
  );
};

export default App;
