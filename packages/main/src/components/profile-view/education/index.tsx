import { FC } from "react";
import { Plus, ChevronDown, BookOpen } from "react-feather";
import {
    Card,
    CardBody,
    Heading,
    Text,
    Media,
    MediaBody,
} from "@doar/components";
import Header from "../header";
import Footer from "../footer";
import NavWithIcon, { NavLink } from "../../nav-with-icon";
import { StyledTime, StyledIcon, StyledName } from "./style";

const Education: FC = () => {
    return (
        <Card mb={["20px", null, null, "25px"]}>
            <Header>
                <Heading tt="uppercase" fontWeight="600" mb="0px">
                    Education
                </Heading>
                <NavWithIcon iconPosition="left" iconDistance="7px">
                    <NavLink path="#!">
                        <Plus />
                        Add New
                    </NavLink>
                </NavWithIcon>
            </Header>
            <CardBody p={["25px", "25px"]}>
                <Media display={["block", "flex"]}>
                    <StyledIcon>
                        <BookOpen width={40} height={40} />
                    </StyledIcon>
                    <MediaBody ml={[null, "25px"]} mt={["25px", 0]}>
                        <Heading as="h5" mb="5px">
                            BS in Computer Science
                        </Heading>
                        <Text mb="3px">
                            <StyledName>Holy Name University</StyledName>,
                            Tagbilaran City, Bohol
                        </Text>
                        <StyledTime>2002-2006</StyledTime>
                    </MediaBody>
                </Media>
            </CardBody>
            <Footer>
                <NavWithIcon iconPosition="right" iconDistance="2px">
                    <NavLink path="#!">
                        Show More Experiences (4)
                        <ChevronDown />
                    </NavLink>
                </NavWithIcon>
            </Footer>
        </Card>
    );
};

export default Education;
