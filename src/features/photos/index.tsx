import { LinkWithArrow } from "@/components/link";
import style from "./style.module.css";

export const PhotosContainer = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <LinkWithArrow title="わたしのこと" />
                <LinkWithArrow title="つくったもの" />
                <LinkWithArrow title="しゃしんとか" />
                <LinkWithArrow title="魔法をかける" />
            </div>
            <h1 className={style.title}>魔法をかける！</h1>
        </div>
    );
};
