import { FC } from "react";
import { Typography, Grid, Box, Link } from "@mui/material";

type QuestionProps = {};

const Question: FC<QuestionProps> = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography>Q&A</Typography>

        <Box>
          <Typography>Q. 誰が作っているのですか？</Typography>
          <Typography>
            A. 北大生応援メディアの
            <Link
              href="https://hu-jagajaga.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JagaJaga
            </Link>
            が開発・運用しています。
          </Typography>
        </Box>

        <Box>
          <Typography>Q. このサービスは大学公認ですか？</Typography>
          <Typography>
            A. 非公認です。
            <Link
              href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              データ参照先
            </Link>
            の併用をお勧めします。
          </Typography>
        </Box>

        <Box>
          <Typography>Q. バグを見つけました。どうすればいいですか？</Typography>
          <Typography>
            A. 見つけたバグを
            <Link
              href="https://forms.gle/tLRiKrShckWsiuXs9"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </Link>
            のGoogle Formで教えて下さると幸いです。
            機能追加等の要望もお待ちしています。
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Question;
