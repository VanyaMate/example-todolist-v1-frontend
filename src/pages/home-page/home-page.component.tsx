import Row from "../../components/ui/containers/row/row.component";
import Menu from "../../components/menu/menu.component";
import PageContent from "../../components/page-content/page-content.component";

const HomePage = () => {
    return (
        <Row offset={20}>
            <Menu/>
            <PageContent/>
        </Row>
    );
};

export default HomePage;