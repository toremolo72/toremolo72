import style from "./style.module.css";
import { LinkWithArrow } from "@/components/link";

export const HomeContainer = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <LinkWithArrow title="わたしのこと" />
                <LinkWithArrow title="つくったもの" />
                <LinkWithArrow title="しゃしんとか" />
                <LinkWithArrow title="イベント情報" />
            </div>
            <h1 className={style.title}>魔法をかける！</h1>
        </div>
    );
};
