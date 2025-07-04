import Link from "next/link";
import { MdLaunch } from "react-icons/md";
import style from "./style.module.css";

interface ResearchSectionProps {
    title: string;
    description: string;
    url: string;
}

export const Section = ({ title, description, url }: ResearchSectionProps) => {
    return (
        <div className={style.section}>
            <p className={style.title}>{title}</p>
            <p className={style.description}>{description}</p>
            <div className={style.readMore}>
                <Link href={url} target="_blank" rel="noopener noreferrer">Read More</Link>
                <MdLaunch />
            </div>
        </div>
    );
};
