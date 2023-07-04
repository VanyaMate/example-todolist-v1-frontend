import React from "react";
import css from './title-section.module.scss';
import Theme from "../ui/containers/theme/theme.component";

interface ITitleSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const TitleSection: React.FC<ITitleSectionProps> = (props) => {
    const {title, className, children} = props;
    return (
        <Theme css={css} className={className}>
            <h3 className={css.title}>{title}</h3>
            { children }
        </Theme>
    );
};

export default TitleSection;