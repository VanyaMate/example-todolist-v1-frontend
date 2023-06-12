import React from "react";
import css from './link.module.scss';
import {cn} from "../../../helpers/react.helper";

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

}

const Link: React.FC<ILinkProps> = (props) => {
    const { className, ...other } = props;
    return (
        <a {...other} className={cn(className, css.container)}/>
    );
};

export default Link;