import { FC } from "react";
import UpdateOption from "../../../components/profile-view/update-option";
import LatestActivity from "../../../components/profile-view/latest-activity";
import WorkExperience from "../../../components/profile-view/work-experience";

const Main: FC = () => {
    return (
        <>
            <UpdateOption />
            <LatestActivity />
            <WorkExperience />
        </>
    );
};

export default Main;
