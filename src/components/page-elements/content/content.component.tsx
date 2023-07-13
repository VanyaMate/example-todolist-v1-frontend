import css from './content.module.scss';
import Theme from "../../ui/containers/theme/theme.component";
import React from "react";

export interface IContentProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Content: React.FC<IContentProps> = (props) => {
    return (
        <Theme css={css}>
            {props.children}
        </Theme>
    );
};

export default Content;