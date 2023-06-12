import React from "react";
import css from './link.module.scss';
import {cn} from "../../../helpers/react.helper";
import {Link} from "react-router-dom";

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

}

const StandardLink: React.FC<ILinkProps> = (props) => {
    const { className, href, ...other } = props;
    return (
        <Link {...other} to={href ?? ''} className={cn(className, css.container)}/>
    );
};

export default StandardLink;