import { LinkWithArrow } from "@/components/link";
import style from "./style.module.css";
import Image from "next/image";

export const AboutContainer = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <LinkWithArrow title="わたしのこと" />
                <LinkWithArrow title="つくったもの" />
                <LinkWithArrow title="しゃしんとか" />
                <LinkWithArrow title="イベント情報" />
                <LinkWithArrow title="魔法をかける" />
            </div>
            <div className={style.content}>
                <div className={style.image}>
                    <Image
                        src="/chinatsu-ozawa-1.jpg"
                        alt="Chinatsu Ozawa"
                        width={300}
                        height={400}
                        priority
                    />
                    {/* <img src="/chinatsu-ozawa-2.jpg" alt="Chinatsu Ozawa" /> */}
                </div>
                <div className={style.text}>
                    <h1 className={style.name}>小澤 知夏</h1>
                    <p className={style.birth}>2001.07.26(23)</p>
                    <div className={style.section}>
                        <p className={style.title}>Education</p>
                        <p className={style.description}>2025-now<br />筑波大学大学院<br />人間総合科学学術院人間総合科学研究群情報学学位プログラム<br />博士前期課程<br />Graduate School of Comprehensive Human Sciences<br />University of Tsukuba</p>
                        <p className={style.description}>2022-2025<br />学士（情報メディア科学）<br />筑波大学<br />情報学群情報メディア創成学類<br />School of Informatics, College of Media Arts, Science and Technology<br />University of Tsukuba</p>
                        <p className={style.description}>2020-2022<br />宮城大学<br />事業構想学群価値創造デザイン学類<br />Miyagi University<br />School of Project Design, Department of Value-Creating Design</p>
                        <p className={style.description}>2017-2020<br />宮城県仙台第三高等学校<br />理数科<br />Miyagi Prefecture Sendai Daisan High School<br />Science and mathematics course</p>
                    </div>
                    <div className={style.section}>
                        <p className={style.title}>Publication</p>
                        <p className={style.description}>【筆頭,フルペーパー】◯Chinatsu Ozawa, Tatsuya Minagawa, and Yoichi Ochiai. 2024. Can AI Generate Ambrotype chain the Aura of photographic process. In SIGGRAPH Asia 2024 Art Papers.</p>
                        <p className={style.description}>【筆頭,フルペーパー（採択率17 %）】◯Chinatsu Ozawa, Kenta Yamamoto, Kazuya Izumi, and Yoichi Ochiai. 2023. Alternative Photographic Processes Reimagined: The Role of Digital Technology in Revitalizing Classic Printing Techniques. In SIGGRAPH Asia 2023 Art Papers.</p>
                        <p className={style.description}>【共著，コラム】木村 正子，小倉 歩，高下 修聡，高見 太基，◯小澤知夏，荻原 百愛. 情報処理学会論文誌：デジタルコンテンツ22号 (Vol.12, No.1, Feb. 2024)　コラム「SIGGRAPH 2023レポート：50周年記念に寄せて」</p>
                        <p className={style.description}>【筆頭,ショートペーパー】◯Chinatsu Ozawa*, Kenta Yamamoto*, Kazuya Izumi, and Yoichi Ochiai. 2022. Computational Alternative Photographic Process toward Sustainable Printing. In SIGGRAPH Asia 2022 Technical Communications.</p>
                        <p className={style.description}>【筆頭,デモ】◯Chinatsu Ozawa, Kenta Yamamoto, Kazuya Izumi, and Yoichi Ochiai. 2023. Give Life Back to Alternative Process: Exploring Handmade Photographic Printing Experiments towards Digital Nature Ecosystem. In Special Interest Group on Computer Graphics and Interactive Techniques Conference Labs.</p>
                    </div>
                    <div className={style.section}>
                        <p className={style.title}>Presentation</p>
                        <p className={style.description}>【筆頭，口頭発表】◯小澤知夏，山本健太，泉和哉，落合陽一. 「デジタル処理とオルタナティブプロセスを融合した写真表現の実践とワークショップ」 2025年日本写真学会年次大会.</p>
                        <p className={style.description}>【筆頭著者，口頭発表】 ◯Chinatsu Ozawa, Kenta Yamamoto, Kazuya Izumi, and Yoichi Ochiai. 2023. Alternative Photographic Processes Reimagined: The Role of Digital Technology in Revitalizing Classic Printing Techniques. In Visual Computing 2024 国際招待セッション</p>
                        <p className={style.description}>【筆頭，口頭発表】◯小澤知夏，山本健太，泉和哉，落合陽一. 「フルカラーサイアノタイプのための計算機処理を統合させた新しい印刷フレームワークの構築」 2023年画像関連学会連合会第９回合同秋季大会.</p>
                        <p className={style.description}>【筆頭，ポスター】◯小澤知夏，山本健太，泉和哉，落合陽一. 「モノクロのオルタナティブプロセスのための計算機処理を統合させた新しい印刷フレームワークの構築」 2023年画像関連学会連合会第９回合同秋季大会.</p>
                        <p className={style.description}>【招待講演，口頭発表】SIGGRAPH Asia 2022 Birds of Feather “Interactive Techniques and CG in Asia”</p>
                    </div>
                    <div className={style.section}>
                        <p className={style.title}>Grants and Awards</p>
                        <p className={style.description}>令和6年度 筑波大学 学長表彰（筑波大学 情報学群 情報メディア創成学類 4年次）</p>
                        <p className={style.description}>令和3年度 宮城大学 学長賞（宮城大学 事業構想学群 価値創造デザイン学類 2年次）</p>
                    </div>
                </div>
            </div>
        </div>
    );
};