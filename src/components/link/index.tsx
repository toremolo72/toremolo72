import style from "./style.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";


interface LinkProps {
    title: string;
}

type LinkMap = {
    [key: string]: string;
} & {
    "わたしのこと": "/about";
    "つくったもの": "/works";
    "しゃしんとか": "/photos";
    "魔法をかける": "/";
};

export const LinkWithArrow: React.FC<LinkProps> = ({ title }) => {
    const linkMap: LinkMap = {
        "わたしのこと": "/about",
        "つくったもの": "/works",
        "しゃしんとか": "/photos",
        "イベント情報": "/notification",
        "魔法をかける": "/"
    };

    const path = linkMap[title] || "/";

    return (
        <Link href={path} className={style.container}>
            <h1 className={style.title}>{title}</h1>
            <MdArrowForwardIos />
        </Link>
    );
};