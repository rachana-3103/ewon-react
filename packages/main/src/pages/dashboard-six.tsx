import SEO from "../components/seo";
import Layout from "../layouts";
import Content from "../layouts/content";
import RowOne from "../containers/dashboard-six/row-one";

const DashboardSix = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <RowOne />
            </Content>
        </Layout>
    );
};

export default DashboardSix;
