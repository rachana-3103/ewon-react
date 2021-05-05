import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";

const RecentlyContacted: FC = () => {
    return (
        <>
            <Label>Recently Contacted</Label>
            <ContactItem
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
            />
            <ContactItem
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
            />
            <ContactItem
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
            />
            <ContactItem
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
            />
        </>
    );
};

export default RecentlyContacted;
