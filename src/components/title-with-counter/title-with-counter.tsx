import React from 'react';
import css from './title-with-counter.module.scss';
import Row from '../ui/containers/row/row.component';
import Theme from '../ui/containers/theme/theme.component';


export interface ITitleWithCounterProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    counter: number;
}

const TitleWithCounter: React.FC<ITitleWithCounterProps> = (props) => {
    const { title, counter, ...other } = props;
    return (
        <Theme css={ css } { ...other }>
            <Row offset={ 15 } className={ css.row }>
                <h2 className={ css.title }>{ title }</h2>
                <div className={ css.counter }>{ counter }</div>
            </Row>
        </Theme>
    );
};

export default TitleWithCounter;