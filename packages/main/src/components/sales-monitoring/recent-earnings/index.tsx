import { FC } from "react";
import { Card } from "@doar/components";
import { StyledHeader, StyledTitle, StyeldSubtitle } from "./style";

const RecentEarnings: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <div>
                    <StyledTitle>Your Most Recent Earnings</StyledTitle>
                    <StyeldSubtitle>
                        Your sales and referral earnings over the last 30 days
                    </StyeldSubtitle>
                </div>
            </StyledHeader>
        </Card>
    );
};

export default RecentEarnings;
