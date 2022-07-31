import { FC } from "react";
import { TypographyProps } from "@doar/shared/styled";
interface IProps {
    title: string;
    desc?: string;
    descProps?: TypographyProps;
    titleProps?: TypographyProps;
}
declare const SectionTitle: FC<IProps>;
export default SectionTitle;
