import { LinkWithArrow } from "@/components/link";
import style from "./style.module.css";
import { Section } from "./components/section";

export const WorksContainer = () => {
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
                <div className={style.text}>
                    <h1 className={style.name}>Research</h1>
                    <Section
                        title="Computational Alternative Photographic Process toward Sustainable Printing"
                        description="フルカラーサイアノタイプのための計算機処理を統合させた新しい印刷フレームワークの構築"
                        url="https://digitalnature.slis.tsukuba.ac.jp/2022/11/computational-alternative-photographic-process-toward-sustainable-printing/"
                    />
                    <Section
                        title="Give Life Back to Alternative Process: Exploring Handmade Photographic Printing Experiments towards Digital Nature Ecosystem"
                        description="モノクロのオルタナティブプロセスのための計算機処理を統合させた新しい印刷フレームワークの構築"
                        url="https://digitalnature.slis.tsukuba.ac.jp/2023/06/give-life-back-to-alternative-process/"
                    />
                    <Section
                        title="Can AI Generated Ambrotype Chain the Aura of Alternative Process?"
                        description="デジタルファブリケーションと生成AIを用いた湿板写真の再現"
                        url="https://digitalnature.slis.tsukuba.ac.jp/2024/11/can-ai-generated-ambrotype-chain-the-aura-of-alternative-process/"
                    />
                </div>
            </div>
        </div>
    );
};
