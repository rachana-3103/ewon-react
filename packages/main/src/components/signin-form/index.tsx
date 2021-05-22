import { FC } from "react";
import { Input, Anchor, Button } from "@doar/components";
import { useForm } from "react-hook-form";
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        console.log(errors);
        alert(JSON.stringify(data, null));
    };
    return (
        <StyledWrap>
            <StyledTitle>Sign In</StyledTitle>
            <StyledDesc>Welcome back! Please signin to continue.</StyledDesc>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <StyledFormGroup>
                    <StyledLabel htmlFor="email">Email address</StyledLabel>
                    <Input
                        type="email"
                        id="email"
                        placeholder="yourname@yourmail.com"
                        {...register("email")}
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
