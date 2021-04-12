import { FC } from "react";
import { Input, Anchor, Button } from "@doar/components";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledFormGroup,
    StyledLabel,
    StyledLabelWrap,
    StyledDivider,
    StyledBottomText,
} from "./style";

const SigninForm: FC = () => {
    return (
        <StyledWrap>
            <StyledTitle>Sign In</StyledTitle>
            <StyledDesc>Welcome back! Please signin to continue.</StyledDesc>
            <form action="#">
                <StyledFormGroup>
                    <StyledLabel htmlFor="email">Email address</StyledLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="yourname@yourmail.com"
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabelWrap>
                        <StyledLabel htmlFor="password">Password</StyledLabel>
                        <Anchor path="/forgot-password" fontSize="13px">
                            Forgot password?
                        </Anchor>
                    </StyledLabelWrap>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </StyledFormGroup>
                <Button type="submit" color="brand2" fullwidth>
                    Sign In
                </Button>
                <StyledDivider>or</StyledDivider>
                <Button variant="outlined" color="facebook" fullwidth>
                    Sign In With Facebook
                </Button>
                <Button
                    variant="outlined"
                    color="twitter"
                    mt="0.5rem"
                    fullwidth
                >
                    Sign In With Twitter
                </Button>
                <StyledBottomText>
                    Don&apos;t have an account?{" "}
                    <Anchor path="/signup">Create an Account</Anchor>
                </StyledBottomText>
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
