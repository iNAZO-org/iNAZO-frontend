import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import { Card, Typography } from "@mui/material";

const App = () => {
  return (
    <div>
      <Head>
        <title>ホームページ</title>
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid container>
            {/* iNAZOとは？ */}
            <Grid item xs={8}>
              <Typography>
                <Typography>iNAZO</Typography>とは？
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
            {/* Card */}
            <Grid container>
              <Grid item>
                <Card>
                  <p>ブックマーク登録</p>
                  <p>
                    気になる講義を登録してあなただけの一覧を
                    <br />
                  </p>
                </Card>
              </Grid>
            </Grid>
            {/* Q&A */}
            <Grid container>
              <Grid item>
                <p>Q&A</p>

                <div>
                  <p>Q. 誰が作っているのですか？</p>
                  <p>
                    A. 北大生応援メディアの
                    <a
                      href="https://hu-jagajaga.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JagaJaga
                    </a>
                    が開発・運用しています。
                  </p>
                </div>

                <div>
                  <p>Q. このサービスは大学公認ですか？</p>
                  <p>
                    A. 非公認です。
                    <a
                      href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      データ参照先
                    </a>
                    の併用をお勧めします。
                  </p>
                </div>

                <div>
                  <p>Q. バグを見つけました。どうすればいいですか？</p>
                  <p>
                    A. 見つけたバグを
                    <a
                      href="https://forms.gle/tLRiKrShckWsiuXs9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      こちら
                    </a>
                    のGoogle Formで教えて下さると幸いです。
                    機能追加等の要望もお待ちしています。
                  </p>
                </div>
              </Grid>
            </Grid>
            {/* link */}

            <Grid container>
              <Grid item>
                <p>
                  <a
                    href="https://twitter.com/iNAZO_HU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iNAZO公式Twitter
                  </a>
                </p>
                <p>
                  更新情報や障害情報をお知らせします。フォロー推薦です。お問い合わせはDMにお願いします。
                </p>
                <p>
                  <a
                    href="https://hu-jagajaga.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JagaJaga - 北大生応援メディア -
                  </a>
                </p>
                <p>北大生目線の記事を掲載しています。ぜひご覧ください。</p>
                <p>
                  <a
                    href="https://twitter.com/jagajagahu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JagaJaga公式Twitter
                  </a>
                </p>
                <p>
                  北大生に届けたい情報を配信・いいね&RTしています。フォローお待ちしています。
                </p>
                <p>
                  <a
                    href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    北海道大学 成績分布ＷＥＢ公開システム
                  </a>
                </p>
                <p>
                  データ参照先である北海道大学公式のサイトです。本サービスとの併用をお勧めします。
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
