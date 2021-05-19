import { FC } from "react";
import { TypographyProps } from "@doar/shared/styled";
import { StyledTitle, StyledDesc } from "./style";

interface IProps {
    title: string;
    desc?: string;
    descProps?: TypographyProps;
}

const SectionTitle: FC<IProps> = ({ title, desc, descProps }) => {
    return (
        <>
            <StyledTitle $hasDesc={Boolean(desc)}>{title}</StyledTitle>
            {desc && <StyledDesc {...descProps}>{desc}</StyledDesc>}
        </>
    );
};

export default SectionTitle;
