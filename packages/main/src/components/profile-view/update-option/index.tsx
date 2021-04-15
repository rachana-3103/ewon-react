import { FC } from "react";
import { Edit3, Image, Video, FileText } from "react-feather";
import {
    StyledWrap,
    StyledShare,
    StyledAnchor,
    RightBtn,
    RightBtnLink,
} from "./style";

const UpdateOption: FC = () => {
    return (
        <StyledWrap>
            <StyledShare>
                <Edit3 width={18} height={18} />
                <StyledAnchor href="#!">
                    <span>Share an</span> Update
                </StyledAnchor>
            </StyledShare>
            <RightBtn>
                <RightBtnLink href="#!">
                    <Image width={18} height={18} />
                </RightBtnLink>
            </RightBtn>
            <RightBtn>
                <RightBtnLink href="#!">
                    <Video width={18} height={18} />
                </RightBtnLink>
            </RightBtn>
            <RightBtn>
                <RightBtnLink href="#!">
                    <FileText width={18} height={18} />
                </RightBtnLink>
            </RightBtn>
        </StyledWrap>
    );
};

export default UpdateOption;
