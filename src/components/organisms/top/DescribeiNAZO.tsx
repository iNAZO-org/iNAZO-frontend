import { Grid, Typography } from "@mui/material";
import { FC } from "react";

type DescribeiNAZOProps = {};

const DescribeiNAZO: FC<DescribeiNAZOProps> = () => {
  return (
    <Grid item>
      <Typography>
        <Typography component="span">iNAZO</Typography>とは？
      </Typography>
      <Typography className="text-h6 text-center">
        北大が公開している成績分布データをより扱いやすくしました。
        <br />
        <br />
        受けたい講義の過去の成績分布が知りたい <br />
        気になる複数の講義の成績分布を比較したい <br />
        自分が受講した講義の成績分布を知りたい <br />
        そんなとき、あなたをお手伝いします。 <br />
        <br />
        iNAZOを使って取りたい成績をあなたのものにしよう。 <br />
      </Typography>
    </Grid>
  );
};

export default DescribeiNAZO;
