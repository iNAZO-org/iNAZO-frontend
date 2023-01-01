import { Typography, Grid, Link } from "@mui/material";
import { FC } from "react";

type LinksProps = {};

const Links: FC<LinksProps> = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography>
          <Link
            href="https://twitter.com/iNAZO_HU"
            target="_blank"
            rel="noopener noreferrer"
          >
            iNAZO公式Twitter
          </Link>
        </Typography>
        <Typography>
          更新情報や障害情報をお知らせします。フォロー推薦です。お問い合わせはDMにお願いします。
        </Typography>
        <Typography>
          <Link
            href="https://hu-jagajaga.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JagaJaga - 北大生応援メディア -
          </Link>
        </Typography>
        <Typography>
          北大生目線の記事を掲載しています。ぜひご覧ください。
        </Typography>
        <Typography>
          <Link
            href="https://twitter.com/jagajagahu"
            target="_blank"
            rel="noopener noreferrer"
          >
            JagaJaga公式Twitter
          </Link>
        </Typography>
        <Typography>
          北大生に届けたい情報を配信・いいね&RTしています。フォローお待ちしています。
        </Typography>
        <Typography>
          <Link
            href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            北海道大学 成績分布ＷＥＢ公開システム
          </Link>
        </Typography>
        <Typography>
          データ参照先である北海道大学公式のサイトです。本サービスとの併用をお勧めします。
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Links;
