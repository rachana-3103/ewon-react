import { Helmet } from "react-helmet";

interface IProps {
    title?: string;
    titleTemplate?: string;
}

const SEO = ({ title, titleTemplate }: IProps) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                {title} - {titleTemplate}
            </title>
        </Helmet>
    );
};

SEO.defaultProps = {
    title: "EWON",
    titleTemplate: "Application",
};

export default SEO;
