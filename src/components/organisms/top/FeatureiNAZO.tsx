import { Card, Typography, Grid } from "@mui/material";
import { FC } from "react";

type FeatureiNAZOProps = {};

const FeatureiNAZO: FC<FeatureiNAZOProps> = () => {
  return (
    <Grid container>
      <Grid item>
        <Card>
          <Typography>ブックマーク登録</Typography>
          <Typography>
            気になる講義を登録してあなただけの一覧を
            <br />
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FeatureiNAZO;
