import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";

const ContactLabels: FC = () => {
    return (
        <>
            <Label>My Family</Label>
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
            <Label>My Friends</Label>
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
            <Label>My Officemates</Label>
            <ContactItem
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
            />
        </>
    );
};

export default ContactLabels;
