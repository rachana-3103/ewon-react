import { FC } from "react";
import { Plus, Image, Gift, Smile } from "react-feather";
import {
    StyledForm,
    StyldFile,
    StyledInput,
    StyledNav,
    StyledImage,
    StyledBtn,
} from "./style";

const ChatForm: FC = () => {
    return (
        <StyledForm>
            <>
                <StyldFile htmlFor="add-file">
                    <Plus />
                </StyldFile>
                <input type="file" id="add-file" name="add-file" hidden />
            </>
            <StyledInput
                type="text"
                id="message"
                name="message"
                placeholder="Message"
            />
            <StyledNav>
                <>
                    <StyledImage htmlFor="add-image">
                        <Image />
                    </StyledImage>
                    <input type="file" id="add-image" name="add-image" hidden />
                </>
                <StyledBtn>
                    <Gift />
                </StyledBtn>
                <StyledBtn>
                    <Smile />
                </StyledBtn>
            </StyledNav>
        </StyledForm>
    );
};

export default ChatForm;
