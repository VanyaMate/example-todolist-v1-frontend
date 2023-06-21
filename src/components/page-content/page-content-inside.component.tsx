import Vertical from "../ui/containers/vertical/vertical.component";
import Row from "../ui/containers/row/row.component";
import css from './page-content-inside.module.scss';
import React from "react";
import Theme from "../ui/containers/theme/theme.component";

interface IPageContentInsideProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
    count: number;
}

const PageContentInside: React.FC<IPageContentInsideProps> = (props) => {
    const { title, count, children } = props;
    return (
        <Theme css={css}>
            <Vertical offset={30} className={css.container}>
                <Row offset={30} className={css.header}>
                    <h2 className={css.title}> { title }</h2>
                    <div className={css.count}>{ count }</div>
                </Row>
                <div>
                    { children }
                </div>
            </Vertical>
        </Theme>
    );
};

export default PageContentInside;