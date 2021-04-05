import { FC } from "react";
import { StyledTitle, StyledDesc } from "./style";

interface IProps {
    title: string;
    desc?: string;
}

const SectionTitle: FC<IProps> = ({ title, desc }) => {
    return (
        <>
            <StyledTitle $hasDesc={Boolean(desc)}>{title}</StyledTitle>
            {desc && <StyledDesc>{desc}</StyledDesc>}
        </>
    );
};

export default SectionTitle;
