import style from "./style.module.css";
import { MdArrowForwardIos } from "react-icons/md";


interface LinkProps {
    title: string;
}

export const LinkWithArrow: React.FC<LinkProps> = ({ title }) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>{title}</h1>
            <MdArrowForwardIos />
        </div>
    );
};