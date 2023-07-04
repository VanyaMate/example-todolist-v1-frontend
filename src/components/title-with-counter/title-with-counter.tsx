import React from 'react';
import css from './title-with-counter.module.scss';
import Row from "../ui/containers/row/row.component";
import Theme from "../ui/containers/theme/theme.component";

export interface ITitleWithCounterProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    counter: number;
}

const TitleWithCounter: React.FC<ITitleWithCounterProps> = (props) => {
    return (
        <Theme css={css}>
            <Row offset={15} className={css.row}>
                <h2 className={css.title}>{ props.title }</h2>
                <div className={css.counter}>{ props.counter }</div>
            </Row>
        </Theme>
    );
};

export default TitleWithCounter;