import ContentHeight from "../content-height/content-height";
import Box from "../ui/containers/box/box.component";
import css from './redactor-fixed.module.scss';

const RedactorFixed = () => {
    return (
        <ContentHeight className={css.container}>
            <Box>
                RedactorFixed
            </Box>
        </ContentHeight>
    );
};

export default RedactorFixed;