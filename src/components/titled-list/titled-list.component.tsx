import Vertical from "../ui/containers/vertical/vertical.component";
import css from './titled-list.module.scss';
import React from "react";
import {cn} from "../../helpers/react.helper";

interface ITitledListProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const TitledList: React.FC<ITitledListProps> = (props) => {
    const { title, className, children } = props;
    return (
        <Vertical offset={5} className={cn(css.container, className)}>
            <h3 className={css.title}>{ title }</h3>
            {
                children
            }
        </Vertical>
    );
};

export default TitledList;