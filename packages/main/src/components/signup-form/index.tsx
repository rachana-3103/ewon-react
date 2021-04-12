import { FC } from "react";
import { Input, Anchor, Button, Text } from "@doar/components";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledFormGroup,
    StyledLabel,
    StyledDivider,
    StyledBottomText,
} from "./style";

const SigninForm: FC = () => {
    return (
        <StyledWrap>
            <StyledTitle>Create New Account</StyledTitle>
            <StyledDesc>
                It&apos;s free to signup and only takes a minute.
            </StyledDesc>
            <form action="#">
                <StyledFormGroup>
                    <StyledLabel htmlFor="email">Email address</StyledLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="first_name">Firstname</StyledLabel>
                    <Input
                        id="first_name"
                        name="first_name"
                        type="text"
                        placeholder="Enter your firstname"
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="last_name">Lastname</StyledLabel>
                    <Input
                        id="last_name"
                        name="last_name"
                        type="text"
                        placeholder="Enter your Lastname"
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <Text fontSize="12px">
                        By clicking <strong>Create an account</strong> below,
                        you agree to our terms of service and privacy statement.
                    </Text>
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
                    <Anchor path="/signin">Sign In</Anchor>
                </StyledBottomText>
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
